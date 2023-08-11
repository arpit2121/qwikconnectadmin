import React, { useState } from "react";
import { CustomInputButton } from "../components/button/CustomButoon";
import OTPInput from "../components/otp";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import { useNavigate } from "react-router-dom";
import useResponsiveStyles from "../utils/MediaQuery";

const OtpVerification = () => {
  const [newUser, setNewUser] = useState(true);
  const [otp, setOtp] = useState("");
  const responsive=useResponsiveStyles()
  const navigate = useNavigate();
  const handleButtonClick = () => {
    //  navigation.goTo(true?'/password':'');
    navigate("/password/set-password", {
      state: {
        header: "Set Password",
        belowHeader: "for youremail@example.com",
        button: "Register",
        footer:
          "By Continuing this I agree to the Terms & Conditions and Privacy Policy",
        goTo: "/dashboard/home/existinguser",
      },
    });
  };

  return (
    <div style={{ width: "100%", height: "100%",paddingLeft:'0.5rem' }}>
      <div style={{ marginTop: "2rem" }}>
        <CustomAllTypography
          variant={"h1"}
          name={newUser ? "New Account Verification" : "Account Verification"}
        />
        <CustomAllTypography
        sx={{marginTop:'1rem'}}
          name={"Please enter the 4-digit code sent to youremail@example.com"}
          variant={"body1"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "2.5rem",
          gap:'2.5rem',
          backgroundColor: "",
        }}
      >
        <OTPInput
          autoFocus
          length={4}
          style={{display:'flex',gap:!responsive.isMobile||!responsive.isTablet?'1.5rem':'10px'}}
          className="otpContainer"
          inputClassName="otpInput"
          onChangeOTP={(otp) => setOtp(otp)}
        />
        <div style={{ height: "10%", width: "100%", marginTop: "1rem" }}>
          <CustomInputButton
            variant="contained"
            size="large"
            responsive
            onClick={handleButtonClick}
            width={"100%"}
          >
            Verify
          </CustomInputButton>
          <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
            <CustomAllTypography variant={"body2"} name={"Resend in"} />
            <CustomAllTypography variant={"body2"} name={"30s"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
