// import React, { useState, useEffect } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const StripePaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     // Use the hardcoded test-mode client secret (for demonstration purposes only)
//     const hardcodedClientSecret = 'pi_3O54QOSHRTF9NKka1fVFCNN3_secret_UAHANpdieBJgyQernidCPWx8j';

//     // Confirm the payment on the client-side using the hardcoded test-mode client secret
//     const result = await stripe.confirmCardPayment(hardcodedClientSecret, {
//       payment_method: {
//         card: cardElement,
//       },
//     });

//     if (result.error) {
//       setError(result.error.message);
//     } else {
//       // Payment successful
//       console.log('Payment successful:', result.paymentIntent);
//       // You can update the UI and perform any necessary actions here
//     }
//   };

//   return (
//     <div>
//       <h1>Stripe Payment Example (Test Mode)</h1>
//       <form onSubmit={handleSubmit}>
//         {/* A container for the card element */}
//         <div id="card-element">
//           {/* Stripe.js injects the Card Element here */}
//           <CardElement />
//         </div>
//         {/* Used to display form errors */}
//         <div role="alert">{error && <span>{error}</span>}</div>
//         <button type="submit">Submit Payment</button>
//       </form>
//     </div>
//   );
// };

// export default StripePaymentForm;


import { CardElement, useElements, useStripe , } from "@stripe/react-stripe-js";
// import { Button, Input } from "antd"; 
import React, { useState } from "react";

function CheckoutForm() {
  
  // collect data from the user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [priceId, setPriceId] = useState("");
  
  // stripe items
  const stripe = useStripe();
  const elements = useElements();

  // main function
  const createSubscription = async () => {
    try {
      
      // create a payment method
      const paymentMethod = await stripe?.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement),
        billing_details: {
          name,
          email,
        },
      });

      // call the backend to create subscription
      const response = await fetch("http://localhost:4000/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethod: paymentMethod?.paymentMethod?.id,
          name,
          email,
          priceId
        }),
      }).then((res) => res.json());

      const confirmPayment = await stripe?.confirmCardPayment(
        response.clientSecret
      );

      if (confirmPayment?.error) {
        alert(confirmPayment.error.message);
      } else {
        alert("Success! Check your email for the invoice.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid gap-4 m-auto">
      <input  // this should not be a text field. maybe a radio button ro something
        placeholder="Price Id"
        type="text"
        value={name}
        onChange={(e) => setPriceId(e.target.value)}
      />
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <CardElement />
      <button onClick={createSubscription} disabled={!stripe}>
        Subscribe
      </button>
    </div>
  );
}

export default CheckoutForm;