import React from "react";
import MarketingNavbar from "../components/MarketingNavbar";
import CustomContainer from "../../../components/structure/CustomContainer";
import Footer from "../components/Footer";
import ContactUs from './ContactUs'
import HeroSection from "./HeroSection";

const MarketingPage = () => {
  return (
    <CustomContainer>
    <div
      style={{
        height: "100%",
        width: "100vw",
      }}
    >
      <MarketingNavbar />
     {true ?  <HeroSection/> : <ContactUs/>}
      <Footer/>
    </div>
    </CustomContainer>
  );
};

export default MarketingPage;
