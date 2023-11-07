import React from "react";
import StatsTopBar from "./StatsTopBar";
import CommonProfile from "./profile/CommonProfile";
import useResponsiveStyles from "../../utils/MediaQuery";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";

const CommonProfileBar = ({
  showProfile = true,
  showStatusBar = true,
  application,
  shortlisted,
  rejected,
  title,
  showChangePasswordButton,
  style = {},
  userName,
}) => {
  const responsive = useResponsiveStyles();
  return (
    <div
      style={{
        // width:'fit-content',
        display: responsive.isMobile || responsive.isRandom ? "" : "flex",
        justifyContent: responsive.isMobile ? "" : "space-between",
        alignItems: "center",
        // marginTop: "2rem",
        // padding: responsive.isMobile?'0 1.5rem 0 1.5rem':'0 1.5rem 0 1.5rem',
        padding: responsive.isMobile
          ? "2.5rem 1.5rem 0rem 1.5rem"
          : "2.7rem 3.87rem 0rem 3.87rem",
        ...style,
      }}
    >
      {title && <CustomAllTypography name={title} variant={"h3"} />}
      {showProfile && <CommonProfile userName={userName}/>}
      {responsive.isMobile ? (
        <div
          style={{
            width: "100%",
            display: responsive.isMobile ? "flex" : "",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1.5rem",
              width: "100%",
              backgroundColor: responsive.isMobile ? "rgb(236, 243, 255)" : "",
              borderRadius: responsive.isMobile ? "1rem" : "",
              // padding:'0 1.5rem 0 1.5rem'
            }}
          >
            <StatsTopBar
              application={application}
              shortlisted={shortlisted}
              rejected={rejected}
            />
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1.5rem",
            maxWidth: "fit-content",
            backgroundColor: responsive.isMobile ? "rgb(236, 243, 255)" : "",
            borderRadius: responsive.isMobile ? "1rem" : "",
            // padding:'0 1.5rem 0 1.5rem'
          }}
        >
          <StatsTopBar
            application={application}
            shortlisted={shortlisted}
            rejected={rejected}
          />
        </div>
      )}
    </div>
  );
};

export default CommonProfileBar;
