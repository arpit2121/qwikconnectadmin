import React, {useState } from "react";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import { CustomInputButton } from "../components/button/CustomButoon";
import { useLocation, useNavigate } from "react-router-dom";
import CommonTextInput from "../components/textfield/CommonTextInput";
import PasswordIcon from "../components/icons/PasswordIcon";
import { useLoginUserMutation, useSignupUserMutation } from "../services/auth";
import OpenEyeIcon from "../components/icons/OpenEyeIcon";
import { passwrodSchema } from "../validations";
import { useFormik } from "formik";
import { useEffect } from "react";
import CircularIndeterminate from "../components/loader/CircularLoader";


const Password = () => {
  const navigate = useNavigate();
  const [type, setCurrType] = useState(true);
  const { state } = useLocation();

  const [loginUser, {data:loginData, isSuccess:isLoginSuccess, isLoading: isLoginLoading}] = useLoginUserMutation();
  const [signupUser, {data: signupData, isSuccess:isSignupSuccess, isLoading: isSignupLoading}] = useSignupUserMutation();
  

  const changeType = () => {
    setCurrType(!type);
  };
  

  const handleClick = () => {
    // console.log(state.goTO);
    console.log("hii", values.password)
    if(state?.message==="Found"){
      loginUser({email: state.email, password: values.password}).then((response)=>{
        console.log("response -> ",response)
        if(response.data?.adminId===null)
        {
          navigate("/on-boarding", {
            state:{
              email: state.email,
            }
          });
        }
        else{
          navigate(`/dashboard/home/${response.data?.adminId}`);
        }
      }).catch((error)=>{console.log("hahahah", error)});
    }else{
      signupUser({email: state.email, password: values.password}).then(()=>{
        navigate("/on-boarding", {
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
      }).catch(()=>{});
      console.log(signupData);
    }
  };


  const handleClick1 = async () =>{
    if(state?.message==="Found"){
      await loginUser({email: state.email, password: values.password});
    }
    else{
      await signupUser({email: state.email, password: values.password})
    }
  }

  useEffect(()=>{
    if(isLoginSuccess){
      if(data?.adminId===null)
        {
          navigate("/on-boarding", {
            state:{
              email: state.email,
            }
          });
        }
        else{
          navigate(`/dashboard/home/${data?.adminId}`);
        }
    }else if(isSignupSuccess){
      navigate("/on-boarding", {
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
    }
  },[isLoginSuccess, isSignupSuccess])



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

  const {values, handleBlur, handleChange,handleSubmit,errors,touched, isSubmitting,isValid, isValidating} = useFormik({
    initialValues:{
      password: "",
    },
    validationSchema: passwrodSchema,
    handleClick
  })
  
  return (
    <div
      style={{
        marginTop:'2rem',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "3rem",
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
          name={state.header}
        />
        <CustomAllTypography
          name={state.belowHeader}
          variant={"h5"}
        />
      </div>
      <div>
        <CommonTextInput
          handleChange2={handleChange('password')}
          value={values.password}
          status={errors.password ? "error": ""}
          message={errors.password ? errors.password: ""}
          title="Password"
          placeholder="Enter your password"
          searchInput={false}
          type1={type ? "password" : "text"}
          onClick={changeType}
          endIcon={type ? <PasswordIcon /> : <OpenEyeIcon />}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "4px",
          }}
        >
          <CustomInputButton variant="text" onClick={forgetPassword}>
            {state.header === "Set Password" ? "" : "Forgot Password?"}
          </CustomInputButton>
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <CustomInputButton
          variant="contained"
          width={"100%"}
          size="large"
          responsive
          onClick={handleClick1}
          disabled={!isValid}
        >
          {
            isLoginLoading || isSignupLoading
            ?
            <CircularIndeterminate/>
            :
            state.button
          }
        </CustomInputButton>
        {!state.newUser ? (
          <div
            style={{
              marginTop: "1.38rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: "0.4rem",
            }}
          >
            By Continuing this I agree to the Terms & Conditions and Privacy
            Policy
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Password;
