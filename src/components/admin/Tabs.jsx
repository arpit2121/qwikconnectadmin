import * as React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomAllTypography from "../typography/CustomTypograpgy";
import { styled } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useResponsiveStyles from "../../utils/MediaQuery";
import JobPostingStepTwo from "../../pages/dashboard/jobposting/JobPostingStepTwo";
import JobPostingStepThree from "../../pages/dashboard/jobposting/JobPostingStepThree";
import JobPostingStepFourA from "../../pages/dashboard/jobposting/JobPostingStepFourA";
import JobPostingStepFourB from "../../pages/dashboard/jobposting/JobPostingStepFourB";
import { CustomInputButton } from "../button/CustomButoon";
import Notification from "../notification/Notification";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import LinkBar from "../../pages/dashboard/jobposting/LinkBar";

const StyledTab = styled(Tab)({
  "&.Mui-selected": {
    color: "#202020",
  },
  fontSize: "15px",
  //   responsive.isMobile
  //   ? '12px'
  //   : responsive.isTablet
  //   ? '14px'
  //   : '50px',
  // padding:'0px'
});

const StyleTabPanel = styled(TabPanel)({
  "& .MuiBox-root": {
    padding: "0px",
  },
  padding: "0px",
  // position:'fixed',
  backgroundColor: "",
});

const CustomTabs = () => {
  const [value, setValue] = React.useState("1");
  const responsive = useResponsiveStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/dashboard/home/existinguser");
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      {responsive.isMobile ? (
        <Box
          sx={{
            width: "100%",
            height: "60px",
            backgroundColor: "",
            display: "flex",
          }}
        >
          <div
            style={{
              height: "100%",
              backgroundColor: "",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            <AiOutlineArrowLeft style={{ fontSize: "30px" }} onClick={goBack} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <CustomAllTypography variant={"h2"} name={"Job Postings"} />
          </div>
        </Box>
      ) : (
        <LinkBar linkArray={[{title:'Home',path:'/dashboard/home'},{title:'My Job Post',path:'/jobposting/basicDaetails'}]} currentStep={value}  />
      )}

      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: "#F4F3FE" }}>
          <TabList
            onChange={handleChange}
            variant="scrollable"
            //   scrollButtons
            //   allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#202020",
                color: "red   ",
              },
            }}
          >
            <StyledTab
              label="Basic Details"
              value="1"
              component={Link}
              to={"/jobposting/basicDaetails"}
            />
            <StyledTab
              label="Question Setup"
              value="2"
              component={Link}
              to={"/jobposting/questionSetup"}
            />
            <StyledTab
              label="Branding"
              value="3"
              component={Link}
              to={"/jobposting/Branding"}
            />
            <StyledTab
              label="Publish link"
              value="4"
              component={Link}
              to={"/jobposting/PublicLink"}
            />
          </TabList>
        </Box>
        <StyleTabPanel value="1">
          <JobPostingStepFourB />
        </StyleTabPanel>
        <StyleTabPanel value="2">
          <JobPostingStepTwo />
        </StyleTabPanel>
        <StyleTabPanel value="3">
          <JobPostingStepThree />
        </StyleTabPanel>
        <StyleTabPanel value="4">
          <JobPostingStepFourA />
        </StyleTabPanel>
      </TabContext>
      {value == "1" ? (
        <div style={{ paddingTop: "2rem" }}>
          <Notification />
        </div>
      ) : (
        ""
      )}
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          gap: "2rem",
          paddingBottom: "3rem",
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        <div
          style={{
            padding: "0 1rem 0 1rem",
            display: "flex",
            width:'100%',
            justifyContent: "space-between",
          }}
        >
          <div>
            {
             value!="1"?<CustomInputButton variant="text" size="medium" startIcon={<LeftArrowIcon/>}>Back</CustomInputButton>:''
            }
          </div>
          <div style={{ display: "flex",gap:'1.12rem'}}>
            <CustomInputButton variant="text" size="medium">Close</CustomInputButton>
            {value==="4"?<CustomInputButton variant="outlined" size="medium">Preview</CustomInputButton>:''}
            <CustomInputButton size="medium" endIcon={<RightArrowIcon/>}>Save & Next</CustomInputButton>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CustomTabs;
