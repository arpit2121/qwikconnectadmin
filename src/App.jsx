import React, { useState } from "react";
import Home from "./components/structure/Home/Home";
import OnBoardingPage from "./pages/OnBoardingPage";
import Password from "./pages/Password";
import Login from "./pages/Login";
import Dashboard from "./components/structure/admin/Dashboard";
import OtpVerification from "./pages/OtpVerification";
import { Routes, Route } from "react-router-dom";
import JobPostingStepOne from "./pages/dashboard/jobposting/JobPostingStepOne";
import DashboardHome from "./pages/dashboard/DashboardHome";
import ExistingUser from "./pages/dashboard/ExistingUser";
import NonExisting from "./pages/dashboard/NonExisting";
import DashBoardMail from "./pages/dashboard/DashBoardMail";
import JobPostingDetailsPage from "./pages/dashboard/jobposting/JobPostingDetailsPage";
import PlansBilling from "./pages/dashboard/profile/PlansBilling";
import MyProfile from "./pages/dashboard/profile/MyProfile";
import ChangePassword from "./pages/dashboard/profile/ChangePassword";
import CandiatateReview from "./pages/dashboard/jobposting/CandiatateReview";
import Error404 from "./pages/error404/Error404";
import InviteTemplate from "./components/admin/InviteTemplate";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="login" element={<Login />} />
        <Route path="otp" element={<OtpVerification />} />
        <Route path="password/:name" element={<Password />} />
      </Route>
      <Route path="on-boarding" element={<OnBoardingPage />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home/:id" element={<DashboardHome />}>
          {/* <Route path="existinguser" element={<ExistingUser />} />
          <Route path="nonexisting" element={<NonExisting />} /> */}
        </Route>
        <Route path="changepass" element={<ChangePassword />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="myPlans" element={<PlansBilling />} />
        <Route path="myJobPost" element={<DashBoardMail />} />
        <Route path="*" redirect to={<ExistingUser />} />
      </Route>
      <Route path="jobposting/:tabno" element={<JobPostingStepOne />} />
      <Route
        path="jobpostingdetailspage"
        element={<JobPostingDetailsPage />}
      ></Route>
      <Route path="/candidatereview" element={<CandiatateReview />} />
      <Route path="*" element={<Error404/>}/>
      <Route path="invite" element={<InviteTemplate/>}/>
    </Routes>
  );
};

export default App;
