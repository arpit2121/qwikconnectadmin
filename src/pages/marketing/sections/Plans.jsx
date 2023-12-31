import  { useState } from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import PricingCard from "../components/PricingCard";
import useResponsiveStyles from "../../../utils/MediaQuery";

const Plans = () => {
  const responsive = useResponsiveStyles();
  const [selectedPlan, setSelectedPlan] = useState("annual");

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const plans = [
    {
      priceId: "aa1232da",
      planPrice: "Free",
      planType: "Starter Pack",
      planDuration: "monthly",
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
      planDuration: "yearly",
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
  ];
  const filteredPlans = plans.filter((plan) =>
  selectedPlan === "monthly"
    ? plan.planDuration === "monthly"
    : plan.planDuration === "yearly"
);
  return (
    <div id="plans" className="plans">
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
              padding: "10px 20px",
              alignItems: "flex-start",
              gap: "10px",
              border: 'none',
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
              padding: "10px 20px",
              alignItems: "flex-start",
              gap: "10px",
              border: 'none',
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
 {filteredPlans.map((plan) => (
          <PricingCard key={plan.priceId} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
