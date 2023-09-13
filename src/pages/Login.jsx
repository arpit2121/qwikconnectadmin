import React, { useState } from "react";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../utils/MediaQuery";
import { CustomInputButton } from "../components/button/CustomButoon";
import GoogleSocial from "../components/social/GoogleSocial";
import CommonTextInput from "../components/textfield/CommonTextInput";
import { useSigninUserMutation } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const responsive = useResponsiveStyles();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [signinuser, { data, isError, isSuccess, error }] =
    useSigninUserMutation();

  // --- functions ---
  const handleButtonClick = () => {
    signinuser(email);
    if (true) {
      navigate(false ? "/password/enterpass" : "/otp", {
        state: {
          newUser: true,
          header: "Welcome Back!",
          belowHeader: "Enter your password for youremail@example.com",
          button: "Log in",
          footer: "By Continuing this I agree to the Terms & Conditions and Privacy Policy",
          goTo: "/dashboard/home/existinguser",
        },
      });
    }
  };

  return (
    <div
      style={{
        // marginBottom: "2rem",
        marginTop:'2rem',
        display: "flex",
        flexDirection: "column",
        gap: responsive.isMobile ? "3rem": responsive.isTablet ?"2rem": "4.5rem",
      }}
    >
      <CustomAllTypography variant={"h1"} name={"Login/Signup"} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width:'100%',
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <GoogleSocial />
          or
        </div>
        <CommonTextInput
          value={email}
          setvalue={setEmail}
          title="Email ID"
          placeholder="Type your name"
          searchInput={false}
          setValue={setEmail}
          type1={"email"}
        />
      </div>
      <CustomInputButton
        variant="contained"
        size="large"
        responsive
        goon={"password"}
        onClick={handleButtonClick}
        width={"100%"}
      >
        Continue
      </CustomInputButton>
    </div>
  );
};

export default Login;
