import React, { useState } from "react";
import Navbar from "../../../components/structure/admin/Navbar";
import CustomContainer from "../../../components/structure/CustomContainer";
import { CustomCard } from "../../../components/card/CustomCard";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import RadioGroupRating from "../../../components/admin/RatingParameter";
import UsersComponent from "../../../components/admin/UsersComponent";
import user1 from "../../../assets/svg/user1.svg";
import { Body3, TextDescription } from "../../../components/typography/Fields";
import StatusButton from "../../../components/button/StatusButton";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import DownloadIcon from "../../../components/icons/DownloadIcon";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import Review from "../../../components/structure/admin/Review";
import useResponsiveStyles from "../../../utils/MediaQuery";
import Player from "../../../components/videoplayer/Player";
import VideoPlayer from "./VideoPlayer";
import LinkBar from "./LinkBar";
import RatingParameter from "../../../components/admin/RatingParameter";
import SampleVideos from "./SampleVideos.json";
import { useDispatch } from "react-redux";
import { setVideoLink } from "../../../slice/common.slice";
import thumbnail from "../../../assets/videoThumbnail.png";
import ThumbsDownIcon from "../../../components/icons/ThumbsDownIcon";
import ThumbsUpIcon from "../../../components/icons/ThumbsUpicon";
import { darkspacetheme } from "../../../theme/theme";

const CandiatateReview = () => {
  const responsive = useResponsiveStyles();
  const [showMoreContent, setShowMoreContent] = useState(false);
  const handleToggleContent = () => {
    setShowMoreContent(!showMoreContent);
  };

  const containerStyle = {
    width: "100%", // Set width to 100% for mobile view
    // backgroundColor: "red",
  };

  const contentContainerStyle = {
    border: "1px solid #EBEBEB",
    padding: "0 1rem 3rem 2rem",
  };

  const initialContentStyle = {
    overflow: "hidden",
    transition: "max-height 3s ease-in-out",
    maxHeight: showMoreContent ? "50%" : "100%", // Initial height to show half the content
    marginTop: "3.41rem",
    // display: responsive.isMobile?"flex":""
  };

  const moreContentStyle = {
    overflow: "hidden",
    transition: "max-height 3s ease-in-out",
    maxHeight: showMoreContent ? "100%" : "0", // Max height to show all the content when open
    marginTop: "2.50rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.50rem",
  };
  const buttonContainerStyle = {
    marginTop: "2.63rem",
  };

  const buttonStyle = {
    borderRadius: 0,
  };
  const dispatch = useDispatch();
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
          <Navbar />

          <div
            style={{
              display: responsive.isMobile ? "" : "flex",
              height: "calc(100% - 100px",
            }}
          >
            <div
              style={{
                width: responsive.isMobile ? "100%" : "25%",
                // backgroundColor:'red'
              }}
            >
              <div style={containerStyle}>
                <div style={contentContainerStyle}>
                  <div style={initialContentStyle}>
                    <div
                      style={{
                        display: responsive.isMobile ? "flex" : "",
                        gap: "1rem",
                      }}
                    >
                      <UsersComponent image={user1} />
                      <div>
                        <div style={{ marginTop: "2.30rem" }}>
                          <CustomAllTypography
                            name={"Danish Shah"}
                            variant={"h3"}
                          />
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
                      </div>
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
                  </div>
                  {responsive.isMobile ? (
                    <div
                      style={{
                        marginTop: "1.30rem",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <CustomInputButton
                        sx={{ borderRadius: 0 }}
                        variant="text"
                        size="Large"
                        onClick={handleToggleContent}
                      >
                        More
                      </CustomInputButton>
                    </div>
                  ) : (
                    ""
                  )}
                  <div style={{ ...moreContentStyle, marginTop: "1.30rem" }}>
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
              </div>
            </div>
            <div
              style={{
                width: responsive.isMobile ? "90%" : "50%",
                padding: responsive.isMobile
                  ? "0 1rem"
                  : "0 1.5rem 5rem 1.5rem",
                overflow: responsive.isMobile ? "none" : "scroll",
              }}
            >
              <div style={{ marginTop: "1.66rem" }}>
                <LinkBar
                  linkArray={[
                    { title: "Home", path: "/dashboard/home" },
                    { title: "My Job Post", path: "/jobposting/basicDaetails" },
                    {
                      title: "UI/UX Developer",
                      path: "/jobposting/basicDaetails",
                    },
                  ]}
                  showSteps={false}
                />
              </div>
              <div style={{ marginTop: "1.75rem" }}>
                <CustomCard
                  sx={{
                    borderRadius: "1.25rem",
                    boxShadow: "0px 16px 24px 0px rgba(142, 141, 208, 0.12)",
                    border: `1px solid ${darkspacetheme.colorPallete.bgdisabled}`,
                  }}
                >
                  <CustomAllTypography
                    name={"Q1. What are your hobbies?"}
                    variant={"h5"}
                  />

                  <VideoPlayer />

                  <div
                    id={"card_container_div"}
                    style={{
                      display: responsive.isMobile?"":"flex",
                      overflow: "auto",
                      gap: "1rem",
                      maxHeight:responsive.isMobile?'300px':'unset',
                      padding:'0.2rem',
                      paddingTop: "1rem",
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    {SampleVideos?.map((data, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() =>
                            dispatch(setVideoLink(data?.sources?.[0]))
                          }
                          style={{
                            height: responsive.isMobile?'5.43rem':"6.5625rem",
                            display: "flex",
                            border: "1px solid #DCDCDC",
                            borderRadius: "0.625rem",
                            flexDirection:responsive.isMobile?'row': "column",
                            alignItems:'center',
                            justifyContent:responsive.isMobile?'space-around':'',
                            width: responsive.isMobile?'100%': "9.25rem",
                            marginTop:responsive.isMobile?5:0
                          }}
                        >
                          <div
                        
                            style={{
                              border: "1px solid #DCDCDC",
                              borderRadius: "0.625rem",
                              background:`url(${thumbnail})`,
                              backgroundSize:'cover',
                              width: responsive.isMobile?"32%": "100%",
                              height: responsive.isMobile?'70%': "56%",
                              backgroundPositionY:!responsive.isMobile?-5:''
                              
                            }}
                      ></div>
                          <div
                            style={{
                              width: "9.25rem",
                              height: "40%",
                              backgroundColor: "#ffff",
                              fontSize: "0.75rem",
                             
                              borderRadius: "0.625rem",
                            }}
                          >
                            <TextDescription>
                              Q{index + 1}.{' '}
                              {data?.subtitle}?
                            </TextDescription>
                          </div>
                        </div>
                      );
                    })}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                  marginTop: "2.44rem",
                }}
              >
                <Review />
                <Review />
              </div>
            </div>
            <div
              style={{
                width: responsive.isMobile ? "100%" : "25%",
                zIndex: responsive.isMobile ? "" : "-1",
              }}
            >
              <div
                style={{
                  border: "1px solid #EBEBEB",
                  padding: "0 1rem 5rem 2rem",
                }}
              >
                <div style={{ marginTop: "6rem" }}>
                  <CustomAllTypography
                    name={"Overall Ratings:"}
                    variant={"h5"}
                  />
                </div>
                <div
                  style={{
                    marginTop: "1.94rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.8rem",
                  }}
                >
                  {<ThumbsDownIcon /> || <ThumbsUpIcon />}
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
                  <RatingParameter />
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
