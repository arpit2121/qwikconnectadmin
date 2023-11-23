import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import useResponsiveStyles from "../../../utils/MediaQuery";
import axios from "axios";
import { useSelector } from "react-redux";

const PricingCard = () => {
  const responsive = useResponsiveStyles();
  const adminId = useSelector((state) => state.auth.adminId);

  const checkout = async (plan) => {
    try {
      const response = await axios.post(
        "http://localhost:4546/v1/subscription/create-subscription-checkout-session",
        { body: JSON.stringify({ plan: "plan", customerId: adminId }) },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      window.location = response.data.url;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "35px 23px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "44px",
        flexShrink: 0,
        width:"full",
        cursor:'pointer',
        borderRadius: "20px",
        minWidth: '280px',
        border: "1px solid #F4F3FE",
        background: "#FFF",
        boxShadow: "0px 8px 16px 0px rgba(142, 141, 208, 0.12)",
        transition: "all 0.5s ease",
      }}
      onClick={() => checkout("price")}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderRadius = "30px";
        e.currentTarget.style.background =
          "linear-gradient(180deg, #605DEC 0%, #A5F 100%)";
          e.currentTarget.style.color= 'white'
          e.currentTarget.style.boxShadow= '0px 8px 16px 0px rgba(142, 141, 208, 0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderRadius = "20px";
        e.currentTarget.style.background = "#FFF";
        e.currentTarget.style.color= 'black'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CustomAllTypography name={"Starter Pack"} variant={"h4"} />
        <CustomAllTypography
          name={"Free trial plan for companies."}
          variant={"body1"}
          sx={{ textAlign: "center" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CustomAllTypography name={"FREE"} variant={"h2"} />
        <CustomAllTypography name={"forever"} variant={"body2"} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CustomAllTypography name={"1 Job post"} variant={"body1"} />
        <CustomAllTypography
          name={"10 Interviews per month"}
          variant={"body1"}
        />
        <CustomAllTypography name={"No Downloads"} variant={"body1"} />
        <CustomAllTypography name={"No Branding feature"} variant={"body1"} />
        <CustomAllTypography name={"Up to 2 Invitations"} variant={"body1"} />
        <CustomAllTypography
          name={"30 days recordings backup"}
          variant={"body1"}
        />
      </div>
      <CustomInputButton
        variant="contained"
        size="large"
        responsive
        width={"100%"}
        style={{
          borderRadius: "20px",
          background: 'black'
        }}
      >
        Choose Starter
      </CustomInputButton>
    </div>
  );
};

export default PricingCard;
