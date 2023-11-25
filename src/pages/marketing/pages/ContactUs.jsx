// ContactUs.js

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import useResponsiveStyles from "../../../utils/MediaQuery";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import Message from "../../../assets/svg/message.svg";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  message: Yup.string().required("Message is required"),
  // Add more validations for other fields if needed
});

const ContactUs = () => {
  const responsive = useResponsiveStyles();
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
      // Add more fields if needed
    },
    validationSchema,
    onSubmit: (values) => {
      // Set submitted to true when the form is submitted
      setSubmitted(true);

      // Handle the form submission logic here
      console.log("Submitted Data:", values);

      // Example: Send data to a server
      // fetch('https://example.com/submit', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(values),
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log('Success:', data);
      //     // Handle success, show a success message, etc.
      //   })
      //   .catch((error) => {
      //     console.error('Error:', error);
      //     // Handle error, show an error message, etc.
      //   });
    },
  });
  console.log({touched: formik.errors ,})

  return (
      <div
        style={{
          display: "flex",
          padding: responsive.isMobile ? "4rem" : "4rem 6rem",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
          alignSelf: "center",
          backgroundColor: "#FFF",
          width:"full"
        }}
        // className="contact-us"
        id="contact-us"
      >
      
          
             
                <form
                  onSubmit={formik.handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "1rem",
                    alignSelf: "stretch",
                    width: responsive.isMobile ? "100%" :"50%"

                  }}
                >
          <CustomAllTypography name={"Get in touch"} variant={"h3"} />
                <CustomAllTypography
                  name={"Our friendly team would love to hear from you."}
                  variant={"body2"}
                />
                  <CommonTextInput
                    title="Full Name"
                    placeholder="Full Name"
                    name="fullName"
                    value={formik.values.fullName}
                    handleInputChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    message={
                      (submitted || formik.touched.fullName) &&
                      Boolean(formik.errors.fullName) &&
                      formik.errors.fullName
                    }
                    helperText={
                      (submitted || formik.touched.fullName) &&
                      formik.errors.fullName
                    }
                    status={
                      ( formik.errors.fullName) && "error"
                    }
                  />
                  <CommonTextInput
                    title="Email Id"
                    placeholder="youremail@example.com"
                    name="email"
                    value={formik.values.email}
                    handleInputChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    message={
                      (submitted || formik.touched.email) &&
                      Boolean(formik.errors.email) &&
                      formik.errors.email
                    }
                    helperText={
                      (submitted || formik.touched.email) && formik.errors.email
                    }
                    status={( formik.errors.email) && "error"}
                  />
                  <CommonTextInput
                    title="Phone Number"
                    placeholder="Phone Number"
                    name="phoneNumber"

                    value={formik.values.phoneNumber}
                    handleInputChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    message={
                      (submitted || formik.touched.phoneNumber) &&
                      Boolean(formik.errors.phoneNumber) &&
                      formik.errors.phoneNumber
                    }
                    helperText={
                      (submitted || formik.touched.phoneNumber) &&
                      formik.errors.phoneNumber
                    }
                    status={
                      (formik.errors.phoneNumber) && "error"
                    }
                    
                  />
                  <CommonTextInput
                    title="Message"
                    placeholder="Your Message"
                    name="message"
                    value={formik.values.message}
                    handleInputChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    message={
                      (submitted || formik.touched.message) &&
                      Boolean(formik.errors.message) &&
                      formik.errors.message
                    }
                    helperText={
                      (submitted || formik.touched.message) &&
                      formik.errors.message
                    }
                    status={
                      ( formik.errors.message) && "error"
                    }
                  />
                  <CustomInputButton
                    variant="contained"
                    size="large"
                    responsive
                    width={"100%"}
                    type="submit"
                  >
                    Submit
                  </CustomInputButton>

                  <CustomAllTypography
                    name={"You agree to our friendly privacy policy."}
                    variant={"body2"}
                  />
                </form>
          {responsive.isMobile ? (
            ""
          ) : (
            <img src={Message} width={"20%"} height={'auto'} />
          )}
      </div>
  );
};

export default ContactUs;
