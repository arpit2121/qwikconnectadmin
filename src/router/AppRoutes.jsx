import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../slice/auth.slice";
import MarketingPage from "../pages/marketing/pages/MarketingPage";
import Login from "../pages/Login";
import Home from "../components/structure/Home/Home";
import OtpVerification from "../pages/OtpVerification";
import Password from "../pages/Password";
import Dashboard from "../components/structure/admin/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import ChangePassword from "../pages/dashboard/profile/ChangePassword";
import MyProfile from "../pages/dashboard/profile/MyProfile";
import PlansBilling from "../pages/dashboard/profile/PlansBilling";
import DashBoardMail from "../pages/dashboard/DashBoardMail";
import ExistingUser from "../pages/dashboard/ExistingUser";
import Error404 from "../pages/error404/Error404";
import JobPostingStepOne from "../pages/dashboard/jobposting/JobPostingStepOne";
import TermCondition from "../pages/marketing/pages/TermCondition";
import PrivacyPolicy from "../pages/marketing/pages/PrivacyPolicy";
import InviteTemplate from "../components/admin/InviteTemplate";
import CandiatateReview from "../pages/dashboard/jobposting/CandiatateReview";
import OnBoardingPage from "../pages/OnBoardingPage";
import JobPostingDetailsPage from "../pages/dashboard/jobposting/JobPostingDetailsPage";
import ContactUs from "../pages/marketing/pages/ContactUs";
import HeroSection from "../pages/marketing/pages/HeroSection";



// eslint-disable-next-line react/prop-types
const ProtectedLayout = ({ user, redirectPath = "/login" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

// eslint-disable-next-line react/prop-types
const IsEmailId = ({email, redirectPath = "/login"}) =>{
    if(!email) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
}



const AppRoutes = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <Routes>
      <Route path="/" element={<MarketingPage />} >
        <Route path= "/" element={<HeroSection/>}/>
        <Route path="contact-us" element={<ContactUs/>}/>
      </Route>
      <Route path="/home/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/home/term-condition" element={<TermCondition />} />
      <Route element={<Home />}>
        <Route path=":name" element={<Login />} />
        <Route element={<IsEmailId email={"arpitsingh@gmail.com"}/>}> 
        <Route path="otp" element={<OtpVerification />} />
        <Route path="password/:name" element={<Password />} />
        </Route>
      </Route>
      <Route exact path="/" element={<MarketingPage />} />
      <Route element={<ProtectedLayout user={user} />}>
        <Route path="on-boarding" element={<OnBoardingPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="changepass" element={<ChangePassword />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="myPlans" element={<PlansBilling />} />
          <Route path="myJobPost" element=  {<DashBoardMail />} />
          <Route path="*" redirect to={<ExistingUser />} />
        </Route>
        <Route path="jobposting/:jobpost_id/:tabno" element={<JobPostingStepOne />} />
        <Route
          path="jobpostingdetailspage/:jobPostId"
          element={<JobPostingDetailsPage />}
        />
        <Route
          path="/candidatereview/:intervieweeId"
          element={<CandiatateReview />}
        />
        <Route path="invite" element={<InviteTemplate />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
