import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CustomCard } from "../../../components/card/CustomCard";
import useResponsiveStyles from "../../../utils/MediaQuery";
import Notification from "../../../components/notification/Notification";
import CustomButton from "../../../components/button/CustomButoon";

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
        height: "100vh",
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
              <AiOutlineInfoCircle width={"1.5rem"} height={"1.5rem"} />
            </div>
            <div>
              <CustomAllTypography variant={"body3"} name={"dropdown"} />
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
                          <FiEdit2 />
                          <RiDeleteBin6Line />
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
              backgroundColor: "",
            }}
          >
            <CustomAllTypography name={"Sample Ratings"} variant={"h4"} />
            <CustomAllTypography name={"Add Parameter"} variant={"h4"} />
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
              <CustomAllTypography name={"Add Questions"} variant={"h1"} />
              <div>
                <CustomAllTypography
                  name={"Questions Added"}
                  variant={"body2"}
                />
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
                <AiOutlineInfoCircle />
              </div>
              <div>
                <CustomAllTypography name={"Dropdown"} variant={"body2"} />
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
            <CustomCard sx={{ backgroundColor: "red" }}>
              hi
              <br />
              hello
              <br />
              <br />
              <br />
              hhh
              <br />
              shhsd
              <br />
            </CustomCard>
          </div>
        </div>
      </div>
      <div style={{padding:responsive.isMobile?'1rem':'2.5rem'}}>
      <div style={{width:'100%', backgroundColor:''}}>
        {/* <Notification/> */}
        notifcatino
        </div>
      </div>
      <div style={{paddingLeft:responsive.isMobile?'1rem':'2rem'}}>
      <div style={{width:'100%'}}>
            {/* <CustomButton name={'Add Questions'}/> */}
            button
        </div>
      </div>
    </div>
  );
};

export default JobPostingStepTwo;

// display:'flex', justifyContent:'space-between', alignItems:'center'
