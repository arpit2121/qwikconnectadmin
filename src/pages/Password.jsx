import React, { useState } from "react";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import { TextDescription } from "../components/typography/Fields";
import useResponsiveStyles from "../utils/MediaQuery";
import { CustomInputButton } from "../components/button/CustomButoon";
import { useLocation, useNavigate } from "react-router-dom";
import CommonTextInput from "../components/textfield/CommonTextInput";
import PasswordIcon from "../components/icons/PasswordIcon";
import { useVerifyPasswordMutation } from "../services/auth";

/*
3 conditon
1 - come from existing user
2 - come after otp
3 - come after forget password
*/

const Password = () => {
  const [newUser, setNewUser] = useState(false);
  const [pass, setPass] = useState("");
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  const [type, setCurrType] = useState(true);
  const { state } = useLocation();
  const [verifyPassword, { data }] = useVerifyPasswordMutation();

  console.log(state);

  const changeType = () => {
    setCurrType(!type);
  };

  const handleClick = () => {
    console.log(state.goTO)
    // verifyPassword(pass);
    if (true) {
      //name have something???then navigate to dashbaord page else navigate to onBoard page
      navigate("/dashboard/home/existinguser");
    } else {
      navigate("/on-boarding");
    }
  };

  const forgetPassword = () => {
    navigate("/password/forgetpassword", {
      state: {
        data: "forgetpassword",
        state: {
          newUser: true,
          header: "Forget Password?",
          belowHeader: "Reset your password for youremail@example.com",
          button: "Reset",
          footer: "",
        },
      },
    });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap:'3rem'
      }}
    >
      <div
        style={{
          marginTop: "",
          display: "flex",
          flexDirection: "column",
          gap: "1.50rem",
        }}
      >
        <CustomAllTypography
          variant={"h1"}
          // name={newUser ? "Set Password" : "Welcome Back!"}
          name= {state.header}
        />
        <CustomAllTypography
          // name={
          //   newUser
          //     ? "for youremail@example.com"
          //     : "Enter your password for youremail@example.com"
          // }
          name= {state.belowHeader}
          variant={"h5"}
        />
      </div>
      <div >
        {/* <CustomPassword title={'Enter Password'} data={pass} setData={setPass}/> */}
        <CommonTextInput
          value={pass}
          setValue={setPass}
          title="Password"
          placeholder="Enter your password"
          searchInput={false}
          type1={type ? "password" : "text"}
          onClick={changeType}
          endIcon={<PasswordIcon />}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "4px",
          }}
        >
          {/* <TextDescription responsive={responsive} size={'9px'} color={'#605DEC'} onClick={()=>console.log("hi")}>{newUser?'':"Forgot Password?"}</TextDescription> */}
          <CustomInputButton variant="text" onClick={forgetPassword}>
            {state.header ==='Set Password' ? "" : "Forgot Password?"}
          </CustomInputButton>
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <CustomInputButton
          variant="contained"
          width={"100%"}
          size="large"
          responsive
          onClick={handleClick}
        >
          {state.button}
        </CustomInputButton>
      </div>
    </div>
  );
};

export default Password;
