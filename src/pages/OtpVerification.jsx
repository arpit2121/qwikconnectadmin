import React, { useEffect, useState } from "react";
import { CustomInputButton } from "../components/button/CustomButoon";
import OTPInput from "../components/otp";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import { useLocation, useNavigate } from "react-router-dom";
import useResponsiveStyles from "../utils/MediaQuery";
import { otpSchema } from "../validations";
import { useFormik } from "formik";
import { useVerifyOtpMutation } from "../services/auth";
import CircularIndeterminate from "../components/loader/CircularLoader";

const OtpVerification = () => {
  const [newUser, setNewUser] = useState(true);
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [verifyOtp, { data: otpData, isSuccess, isError, error, isLoading }] =
    useVerifyOtpMutation();

  console.log("state --> ",state);

  const handleButtonClick = () => {
    verifyOtp({ email: state.email, otp: values.otp, task: 'verify_email' });
    // console.log("--->",otpData, isError, error);
    // if(isSuccess){
    //   navigate("/password/set-password", {
    //     state: {
    //       header: "Set Password",
    //       belowHeader: `for ${state.email}`,
    //       button: "Register",
    //       footer:
    //         "By Continuing this I agree to the Terms & Conditions and Privacy Policy",
    //       goTo: "/dashboard/home/existinguser",
    //       email: state.email,
    //       message: 'Not Found'
    //     },
    //   });
    // }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/password/set-password", {
        state: {
          header: "Set Password",
          belowHeader: `for ${state.email}`,
          button: "Register",
          footer:
            "By Continuing this I agree to the Terms & Conditions and Privacy Policy",
          goTo: "/dashboard/home/existinguser",
          email: state.email,
          message: "Not Found",
        },
      });
    }
  });


  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    isValid,
    isValidating,
  } = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: otpSchema,
    isInitialValid:false,
    handleButtonClick,
  });

  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleResendClick = () => {
    // Add logic to resend OTP here
    setOtp(''); // Clear the previous OTP
    setTimer(30); // Reset the timer
  };


  return (
    <div
      style={{
        height: "100%",
        marginTop: "2rem",
      }}
    >
      <div style={{ marginTop: "2rem" }}>
        <CustomAllTypography
          variant={"h1"}
          name={state.newUser ? "New Account Verification" : "Account Verification"}
        />
        <CustomAllTypography
          sx={{ marginTop: "1rem" }}
          name={`Please enter the 4-digit code sent to ${state.email}`}
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
          gap: "2.5rem",
          backgroundColor: "",
        }}
      >
        <div>
          <OTPInput
            autoFocus
            length={4}
            style={{
              display: "flex",
              gap:
                responsive.isMobile || responsive.isTablet ? "10px" : "1.75rem",
            }}
            className="otpContainer"
            inputClassName="otpInput"
            onChangeOTP={handleChange("otp")}
            value={values.otp}
            status={touched.otp && errors.otp ? "error" : ""}
            message={errors.otp ? errors.otp : ""}
          />
        </div>
        <div style={{ height: "10%", width: "100%", marginTop: "1rem" }}>
          <CustomInputButton
            variant="contained"
            size="large"
            responsive
            onClick={handleButtonClick}
            width={"100%"}
            disabled={!isValid}
          >
            {isLoading ? <CircularIndeterminate /> : "Verify"}
          </CustomInputButton>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem",alignItems:'center' }}>
            {
              timer > 0 
              ?
              <>
              <CustomAllTypography variant={"h6"} name={"Resend in"} />
              <CustomAllTypography variant={"body2"} name={timer+'s'} />
            </>
              :
              <>
              <CustomAllTypography variant={"h6"} name={"Haven't Received Otp ?"} />
              <CustomInputButton variant="text" size="small" onClick={handleResendClick}>Resend</CustomInputButton>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
