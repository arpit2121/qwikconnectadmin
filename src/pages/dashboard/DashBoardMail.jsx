import React from "react";
import { useNavigate } from "react-router-dom";
import useResponsiveStyles from "../../utils/MediaQuery";
import CardContainerComponent from "./CardContainerComponent";
import CommonProfileBar from "./CommonProfileBar";

const DashBoardMail = () => {
  const responsive = useResponsiveStyles();
  return (
    <div
    // 0 2rem 0 2rem
      style={{
        padding: !responsive.isMobile
          ? ""
          : "0 0 3.94rem 0 3.94rem",
      }}
    >
      <CommonProfileBar  title={'Overview'} showProfile={false} rejected={23} />
      <CardContainerComponent style={{padding:responsive.isMobile?'1rem':'3.87rem',marginTop:0}} />
    </div>
  );
};

export default DashBoardMail;
