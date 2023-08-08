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
    <div
      style={{
        padding: responsive.isMobile ? "1rem" : "50px",
        display: "flex",
        flexDirection: !responsive.isMobile ? "row" : "column",
        justifyContent: "space-between",
        
      }}
    >
      {showProfile && <CommonProfile />}
      {title && <CustomAllTypography name={title} variant={"h3"} />}
      {showStatusBar && <StatsTopBar />}
    </div>
  );
};

export default CommonProfileBar;
