import React from "react";
import Message from "../../../assets/svg/message.svg";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import useResponsiveStyles from "../../../utils/MediaQuery";

const ContactUs = () => {
    const responsive = useResponsiveStyles();
  return (
    <div
      style={{
        display: "flex",
        padding: responsive.isMobile ? "" : "4rem 6rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "4rem",
        alignSelf: "center",
        backgroundColor: "#FFF",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: responsive.isMobile ? "" : "0rem 2rem",
          justifyContent: "center",
          alignItems: "center",
          gap: responsive.isMobile ? '': "7rem",
          flex: "1 0 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: "1 0 0",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "3rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1.25rem",
                alignSelf: "stretch",
              }}
            >
              <CustomAllTypography name={"Get in touch"} variant={"h3"} />
              <CustomAllTypography
                name={"Our friendly team would love to hear from you."}
                variant={"body2"}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2rem",
                alignSelf: "stretch",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                  alignSelf: "stretch",
                }}
              >
                <CommonTextInput
                  value=''
                  title="Full Name"
                  placeholder="Full Name"
                />
                <CommonTextInput
                  value=''
                  title="Email Id"
                  placeholder="youremail@example.com"
                />
                <CommonTextInput
                  value=''
                  title="Full Name"
                  placeholder="Full Name"
                />
                <CommonTextInput
                  value=''
                  title="Full Name"
                  placeholder="Full Name"
                />
                <CustomAllTypography name={"You agree to our friendly privacy policy."} variant={"body2"} />
              </div>
            </div>
          </div>
        </div>
        {responsive.isMobile ? '' : <img src={Message} width="26.75rem" height="26.75rem" />}
      </div>
    </div>
  );
};

export default ContactUs;
