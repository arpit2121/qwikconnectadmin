import React, { useState } from "react";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
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
    verifyPassword(pass);
    if (data.name) {
      //name have something???then navigate to dashbaord page else navigate to onBoard page
      navigate("dashbaord page");
    } else {
      navigate("on-board page");
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
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
          name={newUser ? "Set Password" : "Welcome Back!"}
        />
        <CustomAllTypography
          name={
            newUser
              ? "for youremail@example.com"
              : "Enter your password for youremail@example.com"
          }
          variant={"h5"}
        />
      </div>
      <div style={{ marginTop: "2.50rem" }}>
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
            {newUser ? "" : "Forgot Password?"}
          </CustomInputButton>
        </div>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <CustomInputButton
          variant="contained"
          width={"100%"}
          size="large"
          responsive
          onClick={handleClick}
        >
          {state.newUser ? "Login" : "Register"}
        </CustomInputButton>
      </div>
    </div>
  );
};

export default Password;
