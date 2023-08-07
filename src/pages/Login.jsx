import React, { useState } from "react";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../utils/MediaQuery";
import { CustomInputButton } from "../components/button/CustomButoon";
import GoogleSocial from "../components/social/GoogleSocial";
import useNavigation from "../utils/NaivigateTo";
import CommonTextInput from "../components/textfield/CommonTextInput";
import { useSigninUserMutation } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const responsive = useResponsiveStyles();
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const navigate = useNavigate();
  const [signinuser, {data,isError,isSuccess,error}] = useSigninUserMutation();

  // --- functions ---
  const handleButtonClick = () => {
    console.log(email)
    signinuser(email)
    if(true)//data=="alreadyExists"
    {
      // navigation.goTo(true ? "/password" : "/otp");
      //data === "alreadyExists"
      navigate( true? "/password/enterpass" : "/otp", {
        state: { newUser: true,
        header: "Welcome Back!",
        belowHeader: "Enter your password for youremail@example.com",
        button: "Log in",
        footer: ""
        }
      })
    }
    
    console.log("error",error, data)
  };

  /*
  {
    h1: ""
    h2: ""
    button: ""
    data: ""
  }
   */


  return (
    <div
      style={{
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: responsive.isMobile ? "3rem" : "3rem",
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
