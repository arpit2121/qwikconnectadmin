import React from "react";
import CustomCardComponent, { CustomCard } from "../components/card/CustomCard";
import vector from "../assets/vector.svg";
import vector1 from "../assets/vector1.svg";
import header from "../assets/header.svg";
import useResponsiveStyles from "../utils/MediaQuery";
import OnBoardingCard from "../components/card/OnBoardingCard";
import logo from "../assets/logo.svg";
import CustomContainer from "../components/structure/CustomContainer";
import SimpleTextField from "../components/textfield/SimpleTextField";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import CustomButton, {
  CustomInputButton,
} from "../components/button/CustomButoon";
import CommonTextInput from "../components/textfield/CommonTextInput";
import PhoneIcon from "../components/icons/PhoneIcon";

const OnBoardingPage = () => {
  const responsive = useResponsiveStyles();
  return (
    <CustomContainer>
      <div
        style={{
          height: "100%",
          width: "100vw",
          display: "flex",
          maxHeight: "862px",
          backgroundColor: "",
        }}
      >
        <div
          style={{
            backgroundColor: "#E5E4FF",
            width: "100vw",
            maxHeight: "862px",
            background:
              "linear-gradient(337deg, #E3E5FB 0%, #E6E7FA 12.50%, #F8F5F6 100%)",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", left: "0", bottom: "0" }}>
            <img
              src={vector}
              alt="vector1"
              width={responsive.isMobile ? "50%" : "100%"}
            />
          </div>
          <div style={{ position: "absolute", right: "0", top: "0" }}>
            {!responsive.isMobile ? (
              <img src={vector1} alt="vector2" width={"100%"} />
            ) : (
              ""
            )}
          </div>
          <div style={{ width: "100%", height: "10%" }}>
            <div style={{ width: "60%", padding: "10px" }}>
              <img
                src={responsive.isMobile ? logo : header}
                width={responsive.isMobile ? "" : ""}
              ></img>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                marginTop: '2rem',
                width: responsive.isMobile ? "95%" : "40%",
                // height: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <CustomCard
                sx={{
                  padding: responsive.isMobile || responsive.isTablet ?"1.5rem": "4rem",
                  borderRadius: "1.125rem",
                  marginTop: responsive.isTablet?'':"0.78rem",
                  width: "100%",
                  // height:'max-content'
                }}
              >
                <CustomAllTypography
                  name={"Let us know about you"}
                  variant={"h3"}
                />
                <div style={{ marginTop: responsive.isTablet?'0rem':'3rem' }}>
                  <CommonTextInput
                    style={{ margin: "1.5rem 0rem" }}
                    placeholder="Full Name"
                  />
                  <CommonTextInput
                    style={{ margin: "1.5rem 0rem" }}
                    startIcon={<PhoneIcon />}
                    extraText={"+91"}
                    placeholder="Mobile no."
                  />
                  <CommonTextInput
                    style={{ margin: "1.5rem 0rem" }}
                    placeholder="Company name"
                  />
                  <CommonTextInput
                    style={{ margin: "1.5rem 0rem" }}
                    type="dropdown"
                    placeholder="Your Profession"
                  />
                </div>
                <div style={{ marginTop: "3.5rem" }}>
                  <CustomInputButton
                    width={"100%"}
                    variant="contained"
                    size="large"
                    responsive
                    onClick={() => {}}
                  >
                    Proceed
                  </CustomInputButton>
                </div>
              </CustomCard>
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default OnBoardingPage;

{
  /* <div style={{ backgroundColor: '#E5E4FF', height:'100vh', maxWidth: '100vw', background: 'linear-gradient(337deg, #E3E5FB 0%, #E6E7FA 12.50%, #F8F5F6 100%)', position: 'relative' }}>
  <div style={{ position: 'absolute', left: '0', bottom: '0' }}>
    <img src={vector} alt="vector1" width={(responsive.isMobile)?'50%':'100%'}/>
  </div>
  <div style={{ position: 'absolute', right: '0', top: '0'}}>
    {
      (!responsive.isMobile)
      ?
      <img src={vector1} alt="vector2" width={'100%'}/>
      :
      ''
    }
  </div>
  <div style={{ width: '100%', height: '10%'}}>
    <div style={{width:'60%',padding:'10px'}}>
    <img src={(responsive.isMobile)?logo:header} width={(responsive.isMobile)?'':''}></img>
    </div>
  </div>
  <div style={{ width: '100%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
    <div style={{ width: '100%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <OnBoardingCard variant="outlined" responsive={responsive}></OnBoardingCard > 
    </div>
  </div>
</div> */
}
