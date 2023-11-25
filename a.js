exports.becomeASubscriber = catchError(async (req, res, next) => {
  const { planID } = req.body;

  const user = req.user;

  if (!(user?.role === "user"))
    return next(new ErrorHandler("You already have a subscription", 400));
    const plan =  await SubscriptionPlan.findOne({_id:planID});
  if (!plan)
    return next(new ErrorHandler("plan not exist"));
    let customerId;
    if(!user.stripeCostumerId){
  const customer = await stripe.customers.create({
    email: user.email, 
  });
  customerId = customer.id
  const paymentMethod = await stripe.paymentMethods.attach('pm_card_visa', {
    customer: customerId,
  });
  await stripe.customers.update(customerId, {
    invoice_settings: {
      default_payment_method: paymentMethod.id,
    },
  });
}
else  customerId = user.stripeCostumerId;

console.log(plan.type)
  const StripeSubscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [
      {price_data: {
        currency: process.env.STRIPE_APP_CURRENCY,
        product: plan.productID,
        unit_amount: plan.price * 100,
        recurring: {
          interval: plan.type,
        },
      },
        metadata: {
          paymentType: 'Subscription', 
        },
      },
    ],
    payment_settings: {
      payment_method_types: ["card"], //, 'ach_debit', 'acss_debit', 'au_becs_debit', 'bacs_debit', 'bancontact', 'boleto', 'cashapp', 'customer_balance', 'eps', 'fpx', 'giropay', 'grabpay', 'ideal', 'konbini', 'link', 'p24', 'paynow', 'paypal', 'promptpay', 'sepa_debit', 'sofort', 'us_bank_account'
      save_default_payment_method: "on_subscription",
    },
    metadata: {
      paymentType: 'Subscription', 
    },
    expand: ["latest_invoice.payment_intent"],
  });
  console.log({StripeSubscription})

  const subscription = new Subscription({
    userId: user._id,
    plan: plan._id,
    status: "pending",
    currentPeriodEndAt: StripeSubscription.current_period_start && new Date(StripeSubscription.current_period_end * 1000) || undefined,
    currentPeriodStartAt: StripeSubscription.current_period_start && new Date(StripeSubscription.current_period_start * 1000) || undefined,
    trialPeriodStartAt: StripeSubscription.trial_start && new Date(StripeSubscription.trial_start * 1000) || undefined,
    trialPeriodEndAt: StripeSubscription.trial_end && new Date(StripeSubscription.trial_end * 1000) || undefined,
    stripeSubscriptionId: StripeSubscription.id,
  });

  let savedSubscription = await subscription.save();

  const savedUser = await User.findByIdAndUpdate(
    req.user._id,
    { $push: { subscription: savedSubscription._id },  stripeCostumerId:customerId},
    { new: true } //This  option returns the updated document
  );
  
  res.status(201).json({data: {savedSubscription, savedUser , clientSecret :  StripeSubscription.latest_invoice.payment_intent.client_secret}});

});










  // -- > da
   // Create a new Stripe product
   const stripeProduct = await stripe.products.create({
    name: name,
    // Add a trial period to the price data
    default_price_data: {
      currency: process.env.STRIPE_APP_CURRENCY,
      recurring: {
        interval: type,
      },
      unit_amount: parseFloat(price) * 100,
      // trial_period_days: trialDays, // Add trial period days here
    },
  });



//  productID: stripeProduct.id,
//  defaultPriceID: stripeProduct.default_price,


//  ["day","week", "month", "year"]



//  web hooks ->







// front end
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Stripe Payment Example (Test Mode)</title>
//     <!-- Include Stripe JavaScript library -->
//     <script src="https://js.stripe.com/v3/"></script>
// </head>
// <body>
//     <h1>Stripe Payment Example (Test Mode)</h1>
//     <div id="payment-form">
//         <form id="stripe-form">
//             <!-- A container for the card element -->
//             <div id="card-element">
//                 <!-- Stripe.js injects the Card Element here -->
//             </div>
//             <!-- Used to display form errors -->
//             <div id="card-errors" role="alert"></div>
//             <button type="submit">Submit Payment</button>
//         </form>
//     </div>

//     <script>
//         // Your Stripe test mode publishable key
//         const stripe = Stripe('pk_test_51No9k5SHRTF9NKkasSylKQ05A7d4BnKyRzj1EecsC5UpQqGV1HA2b8N5oNwAsIDcYvm1LMsdNXi7oX9g5qxxotKi00ToW5zyOO'); // Replace with your actual test publishable key

//         // Create an instance of the card Element
//         const elements = stripe.elements();
//         const cardElement = elements.create('card');

//         // Add an instance of the card Element into the `card-element` div
//         cardElement.mount('#card-element');

//         // Hardcoded test-mode client secret (for demonstration purposes only)
//         const hardcodedClientSecret = 'pi_3O54QOSHRTF9NKka1fVFCNN3_secret_UAHANpdieBJgyQernidCPWx8j';

//         // Handle form submission
//         const form = document.getElementById('stripe-form');

//         form.addEventListener('submit', async (event) => {
//             event.preventDefault();           

//             // Confirm the payment on the client-side using the hardcoded test-mode client secret
//             stripe.confirmCardPayment(hardcodedClientSecret, {
//                 payment_method: {
//                     card: cardElement,
//                 },
//             })
//             .then((result) => {
//                 if (result.error) {
//                     // Display any errors to the user
//                     const errorElement = document.getElementById('card-errors');
//                     errorElement.textContent = result.error.message;
//                 } else {
//                     // Payment successful
//                     console.log('Payment successful:', result.paymentIntent);
//                     // You can update the UI and perform any necessary actions here
//                 }
//             });
//         });
//     </script>
// </body>
// </html>





pk_test_51OD3HjSBjrwDWUc6iZShT54UwRHavWsbz7ouCfSIkjy0m9l3x1tRyNzvQDYjyVRaSmjpeE3pAPR9NtN86juh7YXv002uuGROq7


sk_test_51OD3HjSBjrwDWUc6ImhzaE2kqZuZS4W36W887T2gEISrDm7PC0GbaISH9VBymnR6qv8H9JxaFEQb54bu3Cswxv0L00x2JGrdYJ




// create plans api

// --key--

// 







exports.paymentWebHook = catchError(async (request, response, next) => {
  const sig = request.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    console.log({ err, sig });
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  console.log(event)

  const paymentIntentSucceeded = event.data.object;
  const paymentType = paymentIntentSucceeded.metadata.paymentType;

  // console.log(paymentType);
  // console.log(event.type);

  console.log(paymentIntentSucceeded.subscription);
  
  if(paymentIntentSucceeded.subscription)
  {
      switch (event.type) {
          case 'invoice.payment_succeeded':
            await subscriptionPaymentSuccess(paymentIntentSucceeded, response);
            break;
          case 'invoice.payment_failed':
            await subscriptionPaymentFailed(paymentIntentSucceeded, response);
            break;
          case 'invoice.processing':
            await subscriptionPaymentPending(paymentIntentSucceeded, response);
            break;
          case 'invoice.canceled':
            await subscriptionPaymentCanceled(paymentIntentSucceeded, response);
            break;
          default:
            // Handle unknown payment types or do nothing
            break;
        }    
  
  }

  response.send();
});





[
  {
    priceId: "aa1232da",
    planPrice: "0",
    planType: "Free",
    planDuration: "forever",
    noOfJobPost: 1,
    interviewsPerMonth: 10,
    isDownload: false,
    isBranding: false,
    noOfInvitation: 2,
    recordingBackupInDays: 30
  },
  {
    priceId: "sder43",
    planPrice: 8,
    planType: "Essential",
    planDuration: "monthly",
    noOfJobPost: 5,
    interviewsPerMonth: 50,
    isDownload: true,
    isBranding: true,
    noOfInvitation: 6,
    recordingBackupInDays: 60
  },
  {
    priceId: "sd34343",
    planPrice: 50,
    planType: "Professional",
    planDuration: "monthly",
    noOfJobPost: 'unlimited',
    interviewsPerMonth: 1000,
    isDownload: true,
    isBranding: true,
    noOfInvitation: 20,
    recordingBackupInDays: 'unlimited'
  },
  {
    priceId: "hs454",
    planPrice: "Free",
    planType: "Starter Pack",
    planDuration: "forever",
    noOfJobPost: 1,
    interviewsPerMonth: 10,
    isDownload: false,
    isBranding: false,
    noOfInvitation: 2,
    recordingBackupInDays: 30
  },
  {
    priceId: "sd4545",
    planPrice: 14,
    planType: "Essential",
    planDuration: "yearly",
    noOfJobPost: 5,
    interviewsPerMonth: 100,
    isDownload: true,
    isBranding: true,
    noOfInvitation: 6,
    recordingBackupInDays: 60
  },
  {
    priceId: "hsh454",
    planPrice: 75,
    planType: "Professional",
    planDuration: "yearly",
    noOfJobPost: "unlimited",
    interviewsPerMonth: 1000,
    isDownload: true,
    isBranding: true,
    noOfInvitation: 20,
    recordingBackupInDays: 'unlimited'
  },
]