import React from "react";
import Logo from "../../../components/icons/Logo";
import QwikConnectLogo from "../../../components/icons/QwikConnectLogo";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";

const MarketingNavbar = () => {
  const responsive = useResponsiveStyles();
  const navbars = ["Home", "Key features", "Plans", "Contact us"];
  return (
    <div
      style={{
        boxShadow: "0px 4px 4px 0px rgba(142, 141, 208, 0.16)",
        backgroundColor: "#fff",
        padding: responsive.isMobile ? "1rem" : "1.5rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems:'center',
        zIndex: 1,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{responsive.isMobile ? <Logo /> : <QwikConnectLogo />}</div>
        {responsive.isMobile ? (
          ""
        ) : (
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            {navbars.map((item, index) => {
              return (
                <div style={{ margin: "0 2.5rem" }}>
                  {/* <h6>{item}</h6> */}
                  <CustomAllTypography name={item} variant={'body1'}/>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {responsive.isMobile ? <div>hamburge</div> : <div>button</div>}
    </div>
  );
};

export default MarketingNavbar;

