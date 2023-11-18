import React from "react";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../utils/MediaQuery";
import { CustomInputButton } from "../components/button/CustomButoon";
import GoogleSocial from "../components/social/GoogleSocial";
import CommonTextInput from "../components/textfield/CommonTextInput";
import { useLazyVerifyEmailQuery } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "../validations";
import { useEffect } from "react";
import CustomizedSnackbar from "../components/snackbar/CustomizedSnackbar";
import  CircularIndeterminate from "../components/loader/CircularLoader";
import { useLocation } from "react-router-dom";

const Login = () => {
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  const [verifyEmail, { data, isSuccess, isLoading }] = useLazyVerifyEmailQuery();

  const { state } = useLocation();

  const onSubmit = async (emailId) => {
    await verifyEmail(emailId.email, true);
  };

  const { values, handleChange, handleSubmit, errors, touched, isValid } =
    useFormik({
      initialValues: {
        email: "",
      },
      isInitialValid:false,
      validationSchema: basicSchema,
      onSubmit,
    });

    useEffect(()=>{
      console.log("isValid",isValid)
    },[isValid])

  useEffect(() => {
    if (isSuccess) {
      navigate(data.message === "Found" ? "/password/enterpass" : "/otp", {
        state: {
          newUser: true,
          header: "Welcome Back!",
          belowHeader: `Enter your password for ${values?.email}`,
          button: "Log in",
          footer:
            "By Continuing this I agree to the Terms & Conditions and Privacy Policy",
          goTo: "/dashboard/home/existinguser",
          email: values?.email,
          message: data?.message,
        },
      });
    }
  }, [isSuccess]);

  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: responsive.isMobile
          ? "3rem"
          : responsive.isTablet
          ? "2rem"
          : "4.5rem",
      }}
    >
      <CustomAllTypography variant={"h1"} name={state?.name ? state.name : 'Login/Signup'} />
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
            width: "100%",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <GoogleSocial />
          or
        </div>
        <CommonTextInput
          value={values.email}
          title="Email ID"
          placeholder="Type your name"
          searchInput={false}
          handleChange2={handleChange}
          name={"email"}
          status={errors.email && touched.email ? "error" : ""}
          message={errors.email && touched.email ? errors.email : ""}
        />
      </div>
      <CustomInputButton
        variant="contained"
        size="large"
        responsive
        goon={"password"}
        onClick={() => handleSubmit(values.email)}
        width={"100%"}
        disabled={!isValid}
      >
        {
          isLoading
          ?
          <CircularIndeterminate/>
          :
          "Continue"
        }
      </CustomInputButton>
      <CustomizedSnackbar />
    </div>
  );
};

export default Login;
