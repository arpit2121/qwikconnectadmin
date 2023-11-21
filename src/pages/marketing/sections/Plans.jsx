import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import PricingCard from "../components/PricingCard";
import useResponsiveStyles from "../../../utils/MediaQuery";

const Plans = () => {
  const responsive = useResponsiveStyles();
  return (
    <div style={{ padding: "4rem 2rem" }} id="plans" className="plans">
      <div style={{ marginTop: "5.5rem" }}>
        <CustomAllTypography
          name={"Limitless Interviews, Affordable Plans: Get Started Today!"}
          variant={"h1"}
          sx={{ textAlign: "center" }}
        />
      </div>
      <div
        style={{
          marginTop: "2.81rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Monthly Annually
      </div>
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomAllTypography
          name={"Annual pricing (save up to 40%)"}
          variant={"body1"}
        />
      </div>
      <div style={{display: responsive.isMobile ? 'flex' : 'flex', flexDirection: responsive.isMobile || responsive.isRandom ? 'column' : 'row', alignItems: 'stretch',gap:'3rem',justifyContent:'center'}}>
      <PricingCard/>
        <PricingCard/>
        <PricingCard/>
      </div>

      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: responsive.isMobile ? "repeat(1,1fr)" : "repeat(3, 1fr)",
          gap: "5px",
          zIndex: "50",
          placeItems: "center",
          // width: "75%",
          margin: "auto",
          marginTop: "80px",
          backgroundColor:'red'
        }}
      >
        <PricingCard/>
      </div> */}
    </div>
  );
};

export default Plans;
