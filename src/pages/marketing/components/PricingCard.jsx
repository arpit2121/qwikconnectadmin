import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import axios from "axios";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const PricingCard = ({ plan }) => {
  const adminId = useSelector((state) => state.auth.adminId);

  const navigate = useNavigate();

  const checkout = async () => {
    if(false){
      try {
        const response = await axios.post(
          "http://localhost:4546/v1/subscription/create-subscription-checkout-session",
          {
            body: JSON.stringify({
              plan: plan.priceId, // Use the plan's priceId
              customerId: adminId,
            }),
          },
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
    }else{
      navigate('/login')  
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
        width: "full",
        cursor: "pointer",
        borderRadius: "20px",
        minWidth: "280px",
        border: "1px solid #F4F3FE",
        background: "#FFF",
        boxShadow: "0px 8px 16px 0px rgba(142, 141, 208, 0.12)",
        transition: "all 0.5s ease",
      }} // Pass the function directly
      onMouseEnter={(e) => {
        e.currentTarget.style.borderRadius = "30px";
        e.currentTarget.style.background =
          "linear-gradient(180deg, #605DEC 0%, #A5F 100%)";
        e.currentTarget.style.color = "white";
        e.currentTarget.style.boxShadow =
          "0px 8px 16px 0px rgba(142, 141, 208, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderRadius = "20px";
        e.currentTarget.style.background = "#FFF";
        e.currentTarget.style.color = "black";
      }}
    >

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CustomAllTypography name={`${plan.planPrice === 'Free' ?  '' : '$'} ${plan.planPrice}`} variant={"h2"} />
        <CustomAllTypography name={plan.planPrice==='Free' ? 'forever': plan.planDuration  } variant={"body2"} sx={{ textTransform:'capitalize'}}/>

      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CustomAllTypography
          name={`${plan.noOfJobPost} Job post`}
          variant={"body1"}
        />
        <CustomAllTypography
          name={`${plan.interviewsPerMonth} Interviews per month`}
          variant={"body1"}
        />
        <CustomAllTypography
          name={plan.isDownload ? "Download available" : "No Downloads"}
          variant={"body1"}
        />
        <CustomAllTypography
          name={
            plan.isBranding
              ? "Branding feature available"
              : "No Branding feature"
          }
          variant={"body1"}
        />
        <CustomAllTypography
          name={`Up to ${plan.noOfInvitation} Invitations`}
          variant={"body1"}
        />
        <CustomAllTypography
          name={`Recording backup for ${plan.recordingBackupInDays} days`}
          variant={"body1"}
        />
      </div>

      <CustomInputButton
        variant="contained"
        size="medium"
        responsive
        width={"100%"}
        style={{
          borderRadius: "20px",
          background: "black",
        }}
        onClick={checkout}
      >
        Choose {plan.planType}
      </CustomInputButton>
    </div>
  );
};


PricingCard.propTypes = {
  plan: PropTypes.shape({
    priceId: PropTypes.string.isRequired,
    planType: PropTypes.string.isRequired,
    planDescription: PropTypes.string.isRequired,
    planPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    planDuration: PropTypes.string.isRequired,
    noOfJobPost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    interviewsPerMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    isDownload: PropTypes.bool.isRequired,
    isBranding: PropTypes.bool.isRequired,
    noOfInvitation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    recordingBackupInDays: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};


export default PricingCard;
