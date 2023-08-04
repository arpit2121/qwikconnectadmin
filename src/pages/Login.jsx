import React, { useState } from "react";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../utils/MediaQuery";
import { TextTitle } from "../components/typography/Fields";
import { CustomInputButton } from "../components/button/CustomButoon";
import NormalCustomTextField from "../components/textfield/CustomTextfield";
import GoogleSocial from "../components/social/GoogleSocial";
import CustomizedTextField from "../components/textfield/CustomizedTextField";
import useNavigation from "../utils/NaivigateTo";
import DropdownInput from "../components/textfield/Dropdown";
import CommonCustomizedTextField from "../components/textfield/CommonCustomizedTextfield";
import CommonTextInput from "../components/textfield/CommonTextInput";

const Login = () => {
  const responsive = useResponsiveStyles();
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const handleButtonClick = () => {
    console.log("hii");
    navigation.goTo(true ? "/password" : "/otp");
  };

  console.log(email);
  // ---checking purpose ----
  const [existing, setExisting] = useState(true);
  return (
      <div style={{marginBottom:'2rem',display:'flex', flexDirection:'column', gap:responsive.isMobile?'3rem':'3rem'}}>
        <CustomAllTypography variant={"h1"} name={"Login/Signup"} />
        <div style={{display:'flex',flexDirection:'column',gap:'1rem',alignItems:'center'}}>
        <GoogleSocial/>
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


{/* <div style={{ width: "100%", height: "100%" }}>
      <div style={{ height: "20%", marginTop: "3rem" }}>
        <CustomAllTypography variant={"h1"} name={"Login/Signup"} />
      </div>
      <div style={{ height: "15%", marginTop: "2rem" }}>
        <GoogleSocial />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "10%",
          marginTop: "1rem",
        }}
      >
        <TextTitle responsive={responsive}>or</TextTitle>
      </div>
      <div style={{ marginTop: "1rem", backgroundColor: "" }}>
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
      <div style={{ marginTop: "4rem" }}>
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
    </div> */}