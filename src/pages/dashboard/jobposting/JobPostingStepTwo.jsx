import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import { CustomCard } from "../../../components/card/CustomCard";
import useResponsiveStyles from "../../../utils/MediaQuery";
import EditIcon from '../../../components/icons/EditIcon';
import DeleteIcon from "../../../components/icons/DeleteIcon";
import InfoIcon from "../../../components/icons/InfoIcon";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import { Body3 } from "../../../components/typography/Fields";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import AddIcon from "../../../components/icons/AddIcon";
import DbIcon from "../../../components/icons/DbIcon";
import QuestionCard from "../../../components/admin/QuestionCard";
import Notification from "../../../components/notification/Notification";
import IconButton from "../../../components/button/IconButton";

const JobPostingStepTwo = () => {
  const responsive = useResponsiveStyles();
  const ratingParameter = [
    "Concentration",
    "Flexible",
    "Competency",
    "Skills",
    "Aptitude",
  ];
  return (
    <div
      style={{
        backgroundColor: "",
        // height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "2rem",
        }}
      >
        <div style={{ backgroundColor: "" }}>
          <div>
            <CustomAllTypography variant={"h1"} name={"Rating Parameter"} />
            <div style={{ paddingTop: "0.5rem" }}>
              <CustomAllTypography
                variant={"body2"}
                name={
                  "Effortlessly set up or modify your own candidate rating parameters per job post."
                }
              />
            </div>
          </div>
          <div
            style={{
              paddingTop: "1.5rem",
              paddingBottom: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                width: "100%",
                backgroundColor: "",
              }}
            >
              <CustomAllTypography
                name={"Minimum passing per Parameter"}
                variant={"h6"}
              />
              <InfoIcon />
            </div>
            <div>
              {/* <CustomAllTypography variant={"body3"} name={"dropdown121"} /> */}
              <CommonTextInput
                    style={{ margin: "1.5rem 0rem"}}
                    borderStyle = {{borderRadius:'0.25rem'}}
                    type="dropdown"
                    placeholder="All"
                  />
            </div>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <CustomCard>
              <div style={{}}>
                {ratingParameter.map((data, index) => {
                  return (
                    <div style={{ padding: "1rem" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ width: "80%" }}>
                          <CustomAllTypography name={data} variant={"body2"} />
                        </div>
                        <div
                          style={{
                            width: "20%",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* <IconButto icon={<EditIcon/>}/> */}
                          {/* <IconButton variant="contained" icon={<EditIcon/>}/> */}
                          <EditIcon/>
                          <DeleteIcon/>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CustomCard>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "30px",
              paddingBottom: "30px",
              alignItems:'center'
            }}
          >
            <Body3>Sample Ratings</Body3>
            <CustomInputButton variant="outlined" size="medium" startIcon={<AddIcon/>}>Add Parameter</CustomInputButton>
          </div>
        </div>
        <div style={{ backgroundColor: "", paddingTop: "30px" }}>
          <div style={{ backgroundColor: "" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CustomAllTypography name={"Add Questions"} variant={"h2"} />
              <div style={{display:'flex',gap:'0.5rem',justifyContent:'center',alignItems:'center'}}>
                <DbIcon/>
                <CustomAllTypography
                  name={"10"}
                  variant={"h3"}
                />
               <div>
               <Body3
                >Questions</Body3>
                <Body3
                >Added</Body3>
               </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <CustomAllTypography
                  name={"Display Questions"}
                  variant={"body1"}
                />
                {/* <AiOutlineInfoCircle /> */}
                <InfoIcon/>
              </div>
              <div>
                <CommonTextInput
                    style={{ margin: "1.5rem 0rem"}}
                    borderStyle = {{borderRadius:'0.25rem'}}
                    type="dropdown"
                    placeholder="None"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: "3rem",
          backgroundColor: "",
          display: responsive.isMobile ? "" : "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            paddingLeft: responsive.isMobile ? "1rem" : "",
          }}
        >
          <CustomAllTypography name={"Q1"} variant={"h2"} fontColor="red" />
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              paddingLeft: responsive.isMobile ? "1rem" : "",
              paddingRight: responsive.isMobile ? "1rem" : "",
              paddingTop: responsive.isMobile ? "1rem" : "",
            }}
          >
            <QuestionCard/>
          </div>
        </div>
      </div>
      <div style={{padding:responsive.isMobile?'1rem':'2.5rem'}}>
      <div style={{width:'100%', backgroundColor:''}}>
        {/* <Notification/> */}
        <Notification/>
        </div>
      </div>
      <div style={{paddingLeft:responsive.isMobile?'1rem':'2rem'}}>
      <div style={{width:'95%'}}>
            <CustomInputButton size="medium" variant="outlined" startIcon={''} width="100%">Add Questions</CustomInputButton>
        </div>
      </div>
    </div>
  );
};

export default JobPostingStepTwo;
