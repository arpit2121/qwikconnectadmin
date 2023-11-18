import React, { useState } from "react";
import Home from "./components/structure/Home/Home";
import OnBoardingPage from "./pages/OnBoardingPage";
import Password from "./pages/Password";
import Login from "./pages/Login";
import Dashboard from "./components/structure/admin/Dashboard";
import OtpVerification from "./pages/OtpVerification";
import { Routes, Route, useParams, BrowserRouter } from "react-router-dom";
import JobPostingStepOne from "./pages/dashboard/jobposting/JobPostingStepOne";
import DashboardHome from "./pages/dashboard/DashboardHome";
import ExistingUser from "./pages/dashboard/ExistingUser";
import DashBoardMail from "./pages/dashboard/DashBoardMail";
import JobPostingDetailsPage from "./pages/dashboard/jobposting/JobPostingDetailsPage";
import PlansBilling from "./pages/dashboard/profile/PlansBilling";
import MyProfile from "./pages/dashboard/profile/MyProfile";
import ChangePassword from "./pages/dashboard/profile/ChangePassword";
import CandiatateReview from "./pages/dashboard/jobposting/CandiatateReview";
import Error404 from "./pages/error404/Error404";
import InviteTemplate from "./components/admin/InviteTemplate";
import MarketingPage from "./pages/marketing/pages/MarketingPage";
import PrivacyPolicy from "./pages/marketing/pages/PrivacyPolicy";
import TermCondition from "./pages/marketing/pages/TermCondition";
import AppRoutes from "./router/AppRoutes";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";


const App = () => {
  const param = useParams();

  console.log("param", param);
  // console.log("jobpostid", jobPostId,"adminId",adminId)

  return (
    // <Routes>
    //   <Route path="/home" element={<MarketingPage/>}/>
    //   <Route path="/" element={<Home />}>
    //      <Route path=":name" element={<Login />} />
    //     <Route path="otp" element={<OtpVerification />} />
    //     <Route path="password/:name" element={<Password />} />
    //   </Route>
    //   <Route path="on-boarding" element={<OnBoardingPage />} />
    //   <Route path="/dashboard" element={<Dashboard />}>
    //     <Route path="home/:id" element={<DashboardHome />}></Route>
    //     <Route path="changepass/:id" element={<ChangePassword />} />
    //     <Route path="myprofile/:id" element={<MyProfile />} />
    //     <Route path="myPlans/:id" element={<PlansBilling />} />
    //     <Route path="myJobPost/:id" element={<DashBoardMail />} />
    //     <Route path="*" redirect to={<ExistingUser />} />
    //   </Route>
    //   <Route path="jobposting/:jobpost_id/:tabno" element={<JobPostingStepOne />} />
    //   <Route
    //     path="jobpostingdetailspage/:jobPostId"
    //     element={<JobPostingDetailsPage />}
    //   ></Route>
    //   <Route path="/candidatereview/:intervieweeId" element={<CandiatateReview />} />
    //   <Route path="*" element={<Error404 />} />
    //   <Route path="invite" element={<InviteTemplate />} />
    //   <Route path="/home/privacy-policy" element={<PrivacyPolicy />} />
    //   <Route path="/home/term-condition" element={<TermCondition />}/>
    // </Routes>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <AppRoutes/>
      </ReduxProvider>    
    </BrowserRouter>
  );
};

export default App;


// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./stripe";

// const stripePromise = loadStripe("your_publishable_key"); // starts with pk_

// function App() {
//   return (
//     <div>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm />
//       </Elements>
//     </div>
//   );
// }

// export default App;