import React, { useState } from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import PricingCard from "../components/PricingCard";
import useResponsiveStyles from "../../../utils/MediaQuery";

const Plans = () => {
  const responsive = useResponsiveStyles();
  const [selectedPlan, setSelectedPlan] = useState("annual");

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

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
        <div
          style={{
            display: "inline-flex",
          }}
        >
          <button
            style={{
              display: "inline-flex",
              padding: "8px 16px",
              alignItems: "flex-start",
              gap: "10px",
              color: selectedPlan === "monthly" ? "white" : "black",
              background: selectedPlan === "monthly" ? "#202020" : "#F4F3FE",
            }}
            onClick={() => handleSelectPlan("monthly")}
          >
            Monthly
          </button>
          <button
            style={{
              display: "inline-flex",
              padding: "8px 16px",
              alignItems: "flex-start",
              gap: "10px",
              color: selectedPlan === "annual" ? "white" : "black",
              background: selectedPlan === "annual" ? "#202020" : "#F4F3FE",
              }}
            onClick={() => handleSelectPlan("annual")}
          >
            Annual
          </button>
        </div>
      </div>
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <CustomAllTypography
          name={"Annual pricing (save up to 40%)"}
          variant={"body1"}
          textcolor={"#6941C6"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: responsive.isMobile ? "column" : "row",
          gap: "3rem",
          justifyContent: "center",
          width: responsive.isMobile ? "100%" : "auto",
          flexWrap: "wrap",
        }}
      >
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
};

export default Plans;
