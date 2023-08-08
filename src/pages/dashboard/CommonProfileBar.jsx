import React from "react";
import StatsTopBar from "./StatsTopBar";
import CommonProfile from "./profile/CommonProfile";
import useResponsiveStyles from "../../utils/MediaQuery";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";

const CommonProfileBar = ({
  showProfile = true,
  showStatusBar = true,
  title,
  showChangePasswordButton,
}) => {
  const responsive = useResponsiveStyles();
  return (
    // <div
    //   style={{
    //     display: responsive.isMobile ? "" : "flex",
    //     justifyContent: "space-between",
    //   }}
    // >
    //   <div
    //     style={{
    //       marginTop: "2.38rem",
    //       display: "flex",
    //       flexDirection: "column",
    //       gap: "1.5rem",
    //     }}
    //   >
    //     {showProfile && <CommonProfile />}
    //     {title && <CustomAllTypography name={title} variant={"h3"} />}
    //   </div>
    //   {showStatusBar && (
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         marginTop: "1.5rem",
    //       }}
    //     >
    //       <StatsTopBar />
    //     </div>
    //   )}
    // </div>
    <div
      style={{
        display: responsive.isMobile || responsive.isTablet ? "" : "flex",
        justifyContent: "space-between",
      }}
    >
      {/* <div
        style={{
          marginTop: "2.38rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      > */}
   {showProfile && <CommonProfile />}
      {/* </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1.5rem",
        }}
      >
        <StatsTopBar />
      </div>
    </div>
  );
};

export default CommonProfileBar;
