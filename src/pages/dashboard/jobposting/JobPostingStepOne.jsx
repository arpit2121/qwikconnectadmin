import React from "react";
import CustomContainer from "../../../components/structure/CustomContainer";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CustomTabs from "../../../components/admin/Tabs";
import Navbar from "../../../components/structure/admin/Navbar";

const JobPostingStepOne = () => {
  const responsive = useResponsiveStyles();
  return (
    <CustomContainer>
      <div
        style={{
          height: "fit-content%",
          width: "100vw",
          maxHeight: "862px",
        }}
      >
        {/* <div style={{height:'100%', width:'100%', position:'fixed'}}> */}
        {responsive.isMobile ? "" : <Navbar />}
        <div
          style={{
            paddingLeft: !responsive.isMobile ? "100px" : "",
            paddingRight: !responsive.isMobile ? "100px" : "",
          }}
        >
          <div>
            <CustomTabs />
          </div>
        </div>
      </div>
      {/* </div> */}
    </CustomContainer>
  );
};

export default JobPostingStepOne;
