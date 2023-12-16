import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import user1 from "../../../assets/svg/user1.svg";
import thumbnail from "../../../assets/videoThumbnail.png";
import UsersComponent from "../../../components/admin/UsersComponent";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import StatusButton from "../../../components/button/StatusButton";
import { CustomCard } from "../../../components/card/CustomCard";
import CopyIcon from "../../../components/icons/CopyIcon";
import DownloadIcon from "../../../components/icons/DownloadIcon";
import CustomContainer from "../../../components/structure/CustomContainer";
import Navbar from "../../../components/structure/admin/Navbar";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import { Body3, TextDescription } from "../../../components/typography/Fields";
import { darkspacetheme } from "../../../theme/theme";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CommentSection from "./CommentSection";
import LinkBar from "./LinkBar";
import RatingSection from "./RatingSection";
import VideoPlayer from "./VideoPlayer";
import { useParams, useLocation } from "react-router-dom";
import {  useLazyGetCandidateDataQuery } from "../../../services/interviewee";
import axios from "axios";
import { setCurrIndex, setCurrQuestion, setVideoLink } from "../../../slice/intervieweeSlice";


const CandiatateReview = () => {
  const responsive = useResponsiveStyles();
  const [showMoreContent, setShowMoreContent] = useState(false);
  const {state} = useLocation();


console.log("response  ", state)
  const handleToggleContent = () => {
    setShowMoreContent(!showMoreContent);
  };
  
  useEffect(() => {
    setShowMoreContent(responsive.isMobile ? false : true);
  }, [responsive.isMobile]);


  const initialContentStyle = {
    overflow: "hidden",
    transition: "max-height 3s ease-in-out",
    // maxHeight: showMoreContent ? "50%" : "100%", // Initial height to show half the content
    marginTop: responsive.isMobile ? 0 : "3.41rem",
    display: responsive.isMobile ? "flex" : "",
    gap: "2rem",
    height: "100%",
    width: "100%",
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
  const statusStyle = {
    display: "flex",
  };

  const dispatch = useDispatch();
  const { intervieweeId } = useParams();

  const [getCandidateData, { data: candidateData }] = useLazyGetCandidateDataQuery();


  useEffect(() => {
    getCandidateData(intervieweeId, true);
  }, []);

  const handelViewResume = async (key) =>{
      try{
        const response = await axios.get(`${import.meta.env.VITE_API_KEY}/v1/s3-manager/presigned-url?key=${key}`)
        if(response){
          window.open(response?.data);
        }
      }catch(error){
        console.log("error", error)
      }
  }

  const handelCurrQuestionAndVideoLink = async (questionObject, index)=>{
    console.log("questionObject", questionObject?.ansVideoKey)
    try{
      //give ansVideoKey to call the api whiche return the video link i will set in the currquestion also
      const response = await axios.get(`${import.meta.env.VITE_API_KEY}/v1/s3-manager/presigned-url?key=${questionObject?.ansVideoKey}`)
      if(response){
        //dispatch the current question -> set the current question in reducer
        dispatch(setCurrQuestion(questionObject));
        dispatch(setCurrIndex(index))
        //dispatch the video link in reducer
        dispatch(setVideoLink(response.data))//set video link in reducer
      }
    }catch(error){
      console.log("error", error)
    }
  }

  const {currQuestion, currIndex} = useSelector((state)=>state.interviewee)

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
          <Navbar showTitle={false} showStatsBar  stats={state.stats}/>
          <div
            style={{
              display: responsive.isMobile ? "" : "flex",
              height: "calc(100% - 100px",
              overflow: responsive.isMobile ? "scroll" : "hidden",
            }}
          >
            <div
              style={{
                width: responsive.isMobile ? "100%" : "25%",
                padding: responsive.isMobile
                  ? "1.87rem 1.87rem 1rem 1.87rem"
                  : "0 3rem 3rem 3rem",
                boxSizing: "border-box",
                border: "1px solid #EBEBEB",
                borderTop: "none",
                overflow:'scroll'
              }}
            >
              <div style={initialContentStyle}>
                <UsersComponent image={user1} style={{width:'4rem', height:'4rem'}}/>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    
                  }}
                >
                  <div
                    style={{
                      marginTop: !responsive.isMobile ? "2.30rem" : 0,
                      
                    }}
                  >
                    <CustomAllTypography
                      name={candidateData?.fullName}
                      variant={"h3"}
                    />
                  </div>
                  <div
                    style={{
                      // marginTop: "0.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                      }}
                    >
                      <CustomAllTypography
                        name={candidateData?.email}
                        variant={"body2"}
                        textcolor="#212121"
                      />
                      <CopyIcon
                        color={" #818181"}
                        onClick={() =>
                          navigator.clipboard.writeText(
                            `${candidateData?.email}`
                          )
                        }
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                      }}
                    >
                      <CustomAllTypography
                        name={`+91 ${candidateData?.phoneNumber}`}
                        variant={"body2"}
                        textcolor="#212121"
                      />
                      <CopyIcon color={" #818181"} />
                    </div>
                  </div>
                  {!responsive.isMobile && (
                    <div style={{ marginTop: "1.44rem" }}>
                      <Body3 color={"#8A8894"}>{"1d ago"}</Body3>
                    </div>
                  )}
                  <div
                    style={{
                      // marginTop: responsive.isMobile ? "1.5rem" : "2.50rem",
                      display: "flex",
                      gap: responsive.isMobile ? "1rem" : "2rem",
                      alignItems: "center",
                    }}
                  >
                    <CustomAllTypography name={"Status"} variant={"body2"} />{" "}
                    <StatusButton name={candidateData?.status === "shortlisted" ? "Shortlisted" : candidateData?.status === "pending" ? "Pending" : "Rejected"} />{" "}
                    {responsive.isMobile && (
                      <div style={{ 
                        // marginLeft: "1.44rem" 
                      }}>
                        <Body3 color={"#8A8894"}>{"1d ago"}</Body3>
                      </div>
                    )}
                  </div>
                  {responsive.isMobile && (
                    <CustomInputButton
                      sx={{
                        borderRadius: 0,
                        marginTop: "1.93rem",
                        marginLeft: "-5rem",
                      }}
                      variant="text"
                      size="Large"
                      onClick={handleToggleContent}
                    >
                      More
                    </CustomInputButton>
                  )}
                  {showMoreContent && (
                    <div
                      style={{
                        ...moreContentStyle,
                        // marginTop: responsive.isMobile ? 0 : "1.30rem",
                        // backgroundColor:"blue"
                      }}

                    >
                      <div
                        style={{
                          // marginTop: responsive.isMobile ? "1rem" : "2.50rem",
                          display: "flex",
                          flexDirection: "column",
                          // gap: "0.50rem",
                          // backgroundColor:'red'
                        }}
                      >
                        <CustomAllTypography
                          name={`Current company: ${candidateData?.currentCompany}`}
                          variant={"body2"}
                        />
                        <CustomAllTypography
                          name={`Exp.: ${candidateData?.experience}`}
                          variant={"body2"}
                        />
                        <CustomAllTypography
                          name={`Profession:${candidateData?.profession}`}
                          variant={"body2"}
                        />
                        <CustomAllTypography
                          name={"Location: Remote"}
                          variant={"body2"}
                        />
                      </div>
                      {/* <div style={{ 
                        marginTop: "2.63rem",
                         backgroundColor:'red'
                         }}> */}
                        {/* <CustomInputButton
                          variant="outlined"
                          size="small"
                          width="100%"
                        >
                          View Resume
                        </CustomInputButton> */}
                        <CustomInputButton
                          variant="outlined"
                          size="small"
                          width="100%"
                          onClick={()=>handelViewResume(candidateData?.cv_path)}
                        >
                          View Resume
                        </CustomInputButton>
                      {/* </div> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              style={{
                width: responsive.isMobile ? "100%" : "50%",
                padding: responsive.isMobile ? "0" : "0 1.5rem 5rem 1.5rem",
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
                    padding: "1rem",
                  }}
                >
                  <CustomAllTypography
                    name={`Q${currIndex} `+currQuestion?.questionTitle}
                    variant={"h5"}
                    sx={{ marginBottom: "0.5rem" }}
                  />
                  <VideoPlayer />
                  <div
                    id={"card_container_div"}
                    style={{
                      display: responsive.isMobile ? "" : "flex",
                      overflow: "auto",
                      gap: "1rem",
                      maxHeight: responsive.isMobile ? "300px" : "unset",
                      padding: "0.2rem",
                      paddingTop: "1rem",
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    {
                      candidateData
                      ?
                      candidateData.alloted_questions?.map((data, index) => {
                        return (
                          <div
                            key={index}
                            onClick={()=>handelCurrQuestionAndVideoLink(data, index+1)}
                            //set current video by default 1st one
                            style={{
                              height: responsive.isMobile
                                ? "5.43rem"
                                : "6.5625rem",
                              display: "flex",
                              border: "1px solid #DCDCDC",
                              borderRadius: "0.625rem",
                              flexDirection: responsive.isMobile
                                ? "row"
                                : "column",
                              alignItems: "center",
                              justifyContent: responsive.isMobile
                                ? "space-around"
                                : "",
                              width: responsive.isMobile ? "100%" : "9.25rem",
                              marginTop: responsive.isMobile ? 5 : 0,
                            }}
                          >
                            <div
                              style={{
                                border: "1px solid #DCDCDC",
                                borderRadius: "0.625rem",
                                background: `url(${thumbnail})`,
                                backgroundSize: "cover",
                                width: responsive.isMobile ? "32%" : "100%",
                                height: responsive.isMobile ? "70%" : "56%",
                                backgroundPositionY: !responsive.isMobile
                                  ? -5
                                  : "",
                              }}
                            ></div>
                            <div
                              style={{
                                width: "9.25rem",
                                height: "40%",
                                backgroundColor: "#ffff",
                                fontSize: "0.75rem",
                                padding: !responsive.isMobile ? "0.5rem" : "",
                                boxSizing: "border-box",
                                borderRadius: "0.625rem",
                              }}
                            >
                              <TextDescription>
                                Q{index + 1}. {data?.questionTitle}
                              </TextDescription>
                            </div>
                          </div>
                        );
                      })
                      :
                      ""
                    }
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
                  Download Interviews
                </CustomInputButton>
              </div>
              {responsive.isMobile ? <RatingSection status={candidateData?.status} stateData={state} intervieweeId={candidateData?._id}/> : <CommentSection />}
            </div>
            {responsive.isMobile ? <CommentSection /> : <RatingSection status={candidateData?.status} stateData={state} intervieweeId={candidateData?._id}/>}
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default CandiatateReview;
