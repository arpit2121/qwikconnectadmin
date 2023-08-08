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
          height: "100%",
          width: "100vw",
          maxHeight: "862px",
          
        }}
      >
       {/* <div style={{height:'100%', width:'100%', position:'fixed'}}> */}
       {
          responsive.isMobile
          ?
          ''
          :
          <div
          style={{
            height: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 1rem 0 1rem",
            boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.5)",
            position:'sticky',
            top:0,
            overflow:'hidden',
            backgroundColor:'#fff',
            zIndex:1
            // backgroundColor:'red'
          }}
        >
          <Navbar job={'Job Posting'}/>
        </div>
        }
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
