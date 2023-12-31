import React from "react";
import useResponsiveStyles from "../../utils/MediaQuery";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
// import UserPlusIcon from "../../components/icons/UserplusIcon";
import UserIcon from "../../components/icons/UserIcon";
import RejectedIcon from "../../components/icons/RejectedIcon";
import { darkspacetheme } from "../../theme/theme";
import UserPlusIcon from "../../components/icons/UserPlusIcon";

const StatsTopBar = ({ application, shortlisted, rejected }) => {
  const responsive = useResponsiveStyles();

  console.log("rejected",rejected)

  const size = responsive?.isMobile ? 24 : 32;
  const outerDiv = {
    display: "flex",
    flexDirection: responsive.isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
  };
  const innerDiv = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const typographyStyle={
    fontSize: responsive.isMobile
      ? "1.5rem !important"
      : "2rem !important",
    marginRight: responsive.isMobile ? 0 : "0.94rem",
  }
  return (
    <div
      style={{
        display: "flex",
        gap: !responsive.isMobile || responsive.isRandom ? "2rem" : "0.5rem",
        justifyContent: !rejected && responsive.isMobile?"space-around":"space-between",
        alignItems: "center",
        width:'100%',
        padding: responsive.isMobile || responsive.isRandom ? "1rem 1.5rem" : "0rem",
        background: responsive.isMobile ? darkspacetheme.colorPallete.aliceBlue
          : "none",
        borderRadius: responsive.isMobile ? "1.25rem" : "0rem",
      }}
    >
      <div style={outerDiv}>
        <div style={innerDiv}>
          <UserIcon
            height={size}
            width={size}
        
            style={{ marginRight: "0.9rem" }}
          />
          <CustomAllTypography
            sx={typographyStyle}
            name={application} 
          
            variant={responsive.isMobile ? "h4" : "h1"}
          />
        </div>
        <CustomAllTypography name={'Application'} variant={"body1"} />
      </div>
      <div style={outerDiv}>
        <div style={innerDiv}>
          <UserPlusIcon
            height={size}
            width={size}
            style={{ marginRight: "0.9rem" }}
          />
          <CustomAllTypography
            sx={typographyStyle}
            name={shortlisted}
            variant={responsive.isMobile ? "h4" : "h1"}
          />
        </div>
        <CustomAllTypography name={"Shortlisted"} variant={"body1"} />
      </div>
    {rejected==0 || rejected ?
    <div style={outerDiv}>
        <div style={innerDiv}>
          <RejectedIcon
            height={size}
            width={size}
            style={{ marginRight: "0.9rem" }}
          />
          <CustomAllTypography
            sx={typographyStyle}
            name={rejected}
            variant={responsive.isMobile ? "h4" : "h1"}
          />
        </div>
        <CustomAllTypography name={"Rejected"} variant={"body1"} />
      </div>:""}
    </div>
  );
};

export default StatsTopBar;
