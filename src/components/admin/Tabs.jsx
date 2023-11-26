import * as React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomAllTypography from "../typography/CustomTypograpgy";
import { styled } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { setSelectedJobPostingPage } from "../../slice/common.slice";
import { useSelector } from "react-redux";
import {
  useAddNewJobMutation,
  usePublishLinkMutation,
  useUpdateBasicDetailsMutation,
  useUpdateBrandingMutation,
  useUpdateParametersMutation,
} from "../../services/job";
import FormData from "form-data";

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
  const urls = [
    "/jobposting/basic-details",
    "/jobposting/question-setup",
    "/jobposting/branding",
    "/jobposting/publish-link",
  ];
  // const counter = useSelector((state) => state.common.selectedJobPostingPage);
  const [value, setValue] = React.useState("1");
  const responsive = useResponsiveStyles();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const adminId = useSelector((state)=>state.auth.adminId)

const {jobpost_id} = useParams()
  const { basic_details, branding, publish_link, question_setup } = useSelector(
    (state) => state.job
  );

  console.log("branding branding branding ",branding)

  const [updateBasicDetails, { data: basicDetails, isLoading }] =
  useUpdateBasicDetailsMutation();
  const [updateParameters] = useUpdateParametersMutation();
  const [publishLink] = usePublishLinkMutation();
  const [updatedBranding] = useUpdateBrandingMutation();


  // console.log("path", pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setSelectedJobPostingPage(newValue));
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/dashboard/home");
  };

  // const handleNext = () => {
  //   const nextValue = parseInt(value) + 1;
  //   console.log("nextValue --- > ",nextValue, pathname)
  //   if (nextValue <= 4) {
  //     setValue(nextValue.toString());
  //     dispatch(setSelectedJobPostingPage(nextValue));
  //   }
  // };

  //handle next function for handeling the api

  const [addNewJob] = useAddNewJobMutation();
  // console.log("dataaaa",)
  
  
  React.useEffect(()=>{
    addNewJob(adminId);
  },[])

  const handleNext = async () => {
    const nextValue = parseInt(value) + 1;
    console.log("nextValue --- > ", nextValue, pathname);

    if (nextValue <= 4) {
      switch (value) {
        case "1":
          console.log("hoo1", basic_details);
          const jobPostId = jobpost_id;
          await updateBasicDetails({ basic_details, jobPostId }).then(
            (response) => {
              console.log("response data", response);
              if (response.data) {
                setValue(nextValue.toString());
                dispatch(setSelectedJobPostingPage(nextValue));
              }
            }
          );
          break;
        case "2":  
          const jobPostId1 = jobpost_id;
          const adminId1 = adminId;
          
          await updateParameters({
            json_data: question_setup,
            adminId: adminId1,
            jobPostId: jobPostId1,
          }).then((response) => {
            console.log("response data", response);
            if (response.data) {
              setValue(nextValue.toString());
              dispatch(setSelectedJobPostingPage(nextValue));
            }
          });
          break;
        case "3":
          const formData = new FormData();
          formData.append('file', branding.blobFile)
          formData.append('json_data',JSON.stringify(branding.colors))
          await updatedBranding({
            adminId,
            jobPostId:jobpost_id,
            formData
          }).then((response) => {
            console.log("response data", response);
            if (response.data) {
              setValue(nextValue.toString());
              dispatch(setSelectedJobPostingPage(nextValue));
            }
          });
          break;
        default:
          console.log("tabindex is not present");
          break;
      }
    }
  };

  const handlePublish = async () => {
    const formData = new FormData();
    formData.append("key",publish_link.csvFile)
    await publishLink({
      formData: formData,
      adminId: adminId,
      jobPostId: jobpost_id,
    }).then((response) => {
      console.log("response data", response);
      if (response.data) {
        navigate("/dashboard/home")
      }
    });
  };

  const handleBack = () => {
    const prevValue = parseInt(value) - 1;
    if (prevValue >= 1) {
      setValue(prevValue.toString());
      dispatch(setSelectedJobPostingPage(prevValue));
    }
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
        <LinkBar
          linkArray={[
            { title: "Home", path: "/dashboard/home" },
            { title: "My Job Post", },
          ]}
          currentStep={value}
          showSteps={true}
        />
      )}

      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: "#F4F3FE" }}>
          <TabList
            onChange={handleChange}
            variant="scrollable"
            aria-label="scrollable force tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#202020",
                color: "red",
              },
            }}
          >
            <StyledTab
              label="Basic Details"
              value="1"
              component={Link}
              to={`/jobposting/${jobpost_id}/basic-details`}
            />
            <StyledTab
              label="Question Setup"
              value="2"
              component={Link}
              to={`/jobposting/${jobpost_id}/question-setup`}
            />
            <StyledTab
              label="Branding"
              value="3"
              component={Link}
              to={`/jobposting/${jobpost_id}/branding`}
              disabled= {false ? true : false}
            />
            <StyledTab
              label="Publish link"
              value="4"
              component={Link}
              to={`/jobposting/${jobpost_id}/publish-link`}
            />
          </TabList>
        </Box>
        <StyleTabPanel value="1">
          <JobPostingStepFourB adminid={adminId} jobpostid={jobpost_id}/>
        </StyleTabPanel>
        <StyleTabPanel value="2">
          <JobPostingStepTwo adminid={adminId} jobpostid={jobpost_id}/>
        </StyleTabPanel>
        <StyleTabPanel value="3">
          <JobPostingStepThree adminid={adminId} jobpostid={jobpost_id}/>
        </StyleTabPanel>
        <StyleTabPanel value="4">
          <JobPostingStepFourA adminid={adminId} jobpostid={jobpost_id}/>
        </StyleTabPanel>
      </TabContext>
      {value == "1" ? (
        <div style={{ padding: "2rem 1rem 0 1rem" }}>
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

        }}
      >
        <div
          style={{
            padding: responsive.isMobile ? "" : "0 1rem 0 1rem",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {!responsive.isMobile ? (
            <div>
              {value != "1" ? (
                <CustomInputButton
                  variant="text"
                  size="medium"
                  startIcon={<LeftArrowIcon />}
                  onClick={handleBack}
                >
                  Back
                </CustomInputButton>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <div
            style={{
              zIndex: 1,
              backgroundColor: "white",
              display: "flex",
              gap: responsive.isMobile ? "" : "1.12rem",
              width: responsive.isMobile ? "100%" : "",
              boxShadow: responsive.isMobile
                ? "2px 2px 2px 2px rgba(0, 0, 0, 0.25)"
                : "",
              position: responsive.isMobile ? "fixed" : "",
              bottom: 1,
              justifyContent: responsive.isMobile ? "space-around" : "",
              padding: responsive.isMobile ? "0.5rem 0.5rem" : "",
            }}
          >
            <CustomInputButton
              variant="text"
              size="medium"
              onClick={() => navigate("/dashboard/home/existinguser")}
            >
              Close
            </CustomInputButton>
            {value === "4" ? (
              responsive.isMobile ? (
                ""
              ) : (
                <CustomInputButton variant="outlined" size="medium">
                  Preview
                </CustomInputButton>
              )
            ) : (
              ""
            )}
            {value === "4" ? (
              <CustomInputButton
                size="medium"
                endIcon={<RightArrowIcon />}
                onClick={handlePublish}
              >
                Publish
              </CustomInputButton>
            ) : (
              <CustomInputButton
                size="medium"
                endIcon={<RightArrowIcon />}
                onClick={handleNext}
              >
                Save & Next
              </CustomInputButton>
            )}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CustomTabs;
