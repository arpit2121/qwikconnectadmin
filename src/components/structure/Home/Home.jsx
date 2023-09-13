import React, { useEffect } from "react";
import CustomContainer from "../CustomContainer";
import useResponsiveStyles from "../../../utils/MediaQuery";
import header from "../../../assets/header.svg";
import hero from "../../../assets/hero.svg";
import { TextDescription } from "../../typography/Fields";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const {pathname}=useLocation()
  useEffect(() => {
    if (pathname == "/") {
      navigate("/login");
    }
  }, []);
  const responsive = useResponsiveStyles();
  return (
    <CustomContainer>
      <div
        style={{
          width: "100vw",
          display: "flex",
          maxHeight: "862px",
          backgroundColor: "",
          padding:!responsive.isMobile?'3.88rem 6rem':'2rem'
        }}
      >
        <div
          style={{
            width: !responsive.isMobile ? "50%" : "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingRight:!responsive.isMobile?'6rem':'',
            paddingLeft: !responsive.isMobile ? "rem" : "",
          }}
        >
          <div style={{ width: "100%", height: "100%", backgroundColor: "" }}>
            <div
              style={{
                // width: "110%",
                // height: "20%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <img src={header} width={"50%"} height={"50%"}></img>
            </div>
            <div style={{ width: "100%", height: "70%" }}>
              <Outlet />
            </div>
          </div>
          <div
            style={{
              // height: "10%",
              width: "97%",
              display: "flex",
              alignItems: "flex-start",
              marginTop: "5rem",
            }}
          >
            <TextDescription responsive={responsive}>
              Copyright © 2023 QwikConnect. All rights reserved.
            </TextDescription>
          </div>
        </div>
        {!responsive.isMobile ? (
        
            <div
              style={{
                width: "50%",
                height: '100%',
                display: "flex",
                alignItems: "center",
                borderRadius:'2.5rem'
              }}
            >
              <img  style={{
                width: "100%",
                height:responsive.isTablet?'70%': "100%",
                // padding: "0 2rem",
                objectFit:'contain',
                display: "flex",
                alignItems: "center",
                borderRadius:'2.5rem'
              }} src={hero} alt="side image" width="100%" height="100%"></img>
             </div>
         
        ) : (
          ""
        )}
      </div>
    </CustomContainer>
  );
};

export default Home;
