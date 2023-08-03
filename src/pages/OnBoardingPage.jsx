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
import CustomButton from "../components/button/CustomButoon";

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
                width: responsive.isMobile?"95%":"40%",
                height: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <CustomCard sx={{padding:'4rem', marginTop:'0.78rem', width:'100%'}}>
                <CustomAllTypography name={'Let us know about you'} variant={'h3'}/>
                <div style={{marginTop:'3rem'}}>
                <SimpleTextField placeHolder={'Full Name'}/>
                <SimpleTextField placeHolder={'Full Name'}/>
                <SimpleTextField placeHolder={'Full Name'}/>
                <SimpleTextField placeHolder={'Full Name'}/>
                </div>
                <div style={{marginTop:'3.5rem'}}>
                  <CustomButton name={'Proceed'}/>
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
