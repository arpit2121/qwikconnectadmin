import React from "react";
import Navbar from "../../../components/structure/admin/Navbar";
import CustomContainer from "../../../components/structure/CustomContainer";
import { CustomCard } from "../../../components/card/CustomCard";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import RadioGroupRating from "../../../components/admin/RatingParameter";
import UsersComponent from "../../../components/admin/UsersComponent";
import user1 from "../../../assets/svg/user1.svg";
import { Body3 } from "../../../components/typography/Fields";
import StatusButton from "../../../components/button/StatusButton";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import DownloadIcon from "../../../components/icons/DownloadIcon";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import Review from "../../../components/structure/admin/Review";
import useResponsiveStyles from "../../../utils/MediaQuery";

const CandiatateReview = () => {
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
        <div style={{ height: "100%", width: "100%" }}>
          <div
            style={{
              height: "10%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 1rem 0 1rem",
              boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.5)",
              position:"sticky",
              top: 0,
              backgroundColor: "#fff",
              zIndex:'1',

            }}
          >
            <Navbar />
          </div>
          <div style={{ display: responsive.isMobile?'':"flex" }}>
            <div
              style={{
                width: responsive.isMobile?'100%':"25%",
                // backgroundColor: "red",
                // zIndex: responsive.isMobile?'':"-1",
                // position: "sticky",
                // top: "10rem",
                // border: "1px solid #EBEBEB",
              }}
            >
              <div
                style={{
                  border: "1px solid #EBEBEB",
                  padding: "0 1rem 3rem 2rem",
                  // position: "sticky",
                  // top: "5rem",
                }}
              >
                <div style={{ marginTop: "3.41rem" }}>
                <UsersComponent image={user1}/>
                </div>
                <div style={{ marginTop: "2.30rem" }}>
                  <CustomAllTypography name={"Danish Shah"} variant={"h3"} />
                </div>
                <div style={{ marginTop: "0.75rem" }}>
                  <CustomAllTypography
                    name={"email@emailexample.com"}
                    variant={"body2"}
                  />
                  <CustomAllTypography
                    name={"+91 993 000 0000"}
                    variant={"body2"}
                  />
                </div>
                <div style={{ marginTop: "1.44rem" }}>
                  <Body3 color={"#8A8894"}>{"1d ago"}</Body3>
                </div>
                <div
                  style={{
                    marginTop: "2.50rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <CustomAllTypography name={"Status"} variant={"body2"} />{" "}
                  <StatusButton name={"Pending"} />{" "}
                </div>
                <div
                  style={{
                    marginTop: "2.50rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.50rem",
                  }}
                >
                  <CustomAllTypography
                    name={"Current company: Flipmart"}
                    variant={"body2"}
                  />
                  <CustomAllTypography
                    name={"Exp.: 16 years"}
                    variant={"body2"}
                  />
                  <CustomAllTypography
                    name={"Profession: UI/UX Lead"}
                    variant={"body2"}
                  />
                  <CustomAllTypography
                    name={"Location: Remote"}
                    variant={"body2"}
                  />
                </div>
                <div style={{ marginTop: "2.63rem" }}>
                  <CustomInputButton
                    variant="outlined"
                    size="small"
                    width="100%"
                  >
                    View Resume
                  </CustomInputButton>
                </div>
              </div>
            </div>
            <div
              style={{
                width: responsive.isMobile?'90%':"50%",
                padding: responsive.isMobile?'0 1rem':"0 1.5rem 5rem 1.5rem",
                // overflow: responsive.isMobile?'none':"auto",
              }}
            >
              <div style={{ marginTop: "1.66rem" }}>dashboard</div>
              <div style={{ marginTop: "1.75rem" }}>
                <CustomCard sx={{ borderRadius: "1.25rem" }}>
                  <CustomAllTypography
                    name={"Q1. What are your hobbies?"}
                    variant={"h5"}
                  />
                  <div
                    style={{
                      marginTop: "0.5rem",
                      height: "21rem",
                      backgroundColor: "black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflowX: "auto",
                    }}
                  >
                    <h1 style={{ color: "white" }}>Video</h1>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      gap: "1rem",
                      paddingTop: "1rem",
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    {[1, 2, 3, 4, 5, 5, 6, 4, 2, 2, 2, 2, 2, 2].map(
                      (data, index) => {
                        return (
                          <div
                            style={{
                              height: "6.5625rem",
                              gap: "10px",
                              border: "1px solid red",
                              width: "9.25rem",
                            }}
                          >
                            <div
                              style={{
                                width: "9.25rem",
                                backgroundColor: "red",
                              }}
                            ></div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </CustomCard>
              </div>
              <div
                style={{
                  marginTop: "1.30rem",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <CustomInputButton
                  variant="text"
                  size="small"
                  startIcon={<DownloadIcon />}
                >
                  Download anyway
                </CustomInputButton>
              </div>
              <div>
                <CustomAllTypography name={"Comments"} variant={"h6"} />
              </div>
              <div style={{ marginTop: "0.75rem" }}>
                {/* <CustomizedTextField /> */}
                <CommonTextInput
                  // title="Email ID"
                  placeholder="Write here"
                  searchInput={false}
                  type1={"email"}
                />
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:'3rem',marginTop:'2.44rem'}}>
              <Review/>
              <Review/>
              </div>
            </div>
            <div
              style={{
                width: responsive.isMobile?'100%':"25%",
                zIndex: responsive.isMobile?'':"-1",
              }}
            >
              <div
                style={{
                  border: "1px solid #EBEBEB",
                  padding: "0 1rem 5rem 2rem",
                  // position: responsive.isMobile?'':"sticky",
                  // top: "5rem",
                }}
              >
                <div style={{ marginTop: "6rem" }}>
                  <CustomAllTypography
                    name={"Overall Ratings:"}
                    variant={"h5"}
                  />
                </div>
                <div style={{ marginTop: "1.94rem" }}>
                  <CustomAllTypography
                    name={"Rejected"}
                    variant={"h4"}
                    sx={{ color: "#AA55FF" }}
                  />
                </div>
                <div
                  style={{
                    marginTop: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.50rem",
                  }}
                >
                  <CustomAllTypography
                    name={"Rating Parameters"}
                    variant={"body3"}
                  />
                  <span style={{ gap: "2rem", display: "flex" }}>
                    <CustomAllTypography
                      name={"Concentration"}
                      variant={"body3"}
                    />{" "}
                    <RadioGroupRating />
                  </span>
                  <span style={{ gap: "2rem", display: "flex" }}>
                    <CustomAllTypography name={"Flexible"} variant={"body3"} />{" "}
                    <RadioGroupRating />
                  </span>
                  <span style={{ gap: "2rem", display: "flex" }}>
                    <CustomAllTypography
                      name={"Competency"}
                      variant={"body3"}
                    />{" "}
                    <RadioGroupRating />
                  </span>
                  <span style={{ gap: "2rem", display: "flex" }}>
                    <CustomAllTypography name={"Skills"} variant={"body3"} />{" "}
                    <RadioGroupRating />
                  </span>
                  <span style={{ gap: "2rem", display: "flex" }}>
                    <CustomAllTypography name={"Aptitude"} variant={"body3"} />{" "}
                    <RadioGroupRating />
                  </span>
                </div>
                <div style={{ marginTop: "2.50rem" }}>
                  <CustomInputButton size="small" width="100%">
                    Confirm Result & Next
                  </CustomInputButton>
                </div>
                <div
                  style={{
                    marginTop: "1.50rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Body3 color={"#C9C8D3"}>27 reviews pending</Body3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default CandiatateReview;