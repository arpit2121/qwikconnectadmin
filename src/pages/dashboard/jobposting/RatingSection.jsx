import React, { useState } from "react";
import RatingParameter from "../../../components/admin/RatingParameter";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import ThumbsDownIcon from "../../../components/icons/ThumbsDownIcon";
import ThumbsIcon from '../../../components/icons/ThumbsIcon'
import { Body3 } from "../../../components/typography/Fields";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSetIntervieweeStatusAndParameterMutation } from "../../../services/interviewee";
import CircularIndeterminate from "../../../components/loader/CircularLoader";

const RatingSection = ({stateData, intervieweeId}) => {
  const responsive = useResponsiveStyles();

  const [state, setState] = useState(true);
  // const adminId = useSelector((state)=>state.auth.adminId)
  const {status, parameters } = useSelector((state)=>state.interviewee?.intervieweeParaAndStatus)

  const [setIntervieweeStatusAndParameter, {isLoading, isError, error, isSuccess}] = useSetIntervieweeStatusAndParameterMutation();

  const navigate = useNavigate()

  const handelClickNext = async () => {

    const intervieweeData = await setIntervieweeStatusAndParameter({body:{
      status,parameters
    },intervieweeId,jobPostId:stateData.jobPostId})
      // if(isSuccess){
      //   navigate(`/jobpostingdetailspage/${stateData.jobPostId}`)
      // }
      // else{
      //   console.log("error", error, intervieweeData)
      // }
      if(error){
        console.log("err", error)
      }else{
        navigate(`/jobpostingdetailspage/${stateData.jobPostId}`)
      }
  }

  console.log("intevieweeData",stateData)

  return (
    <div
      style={{
        width: responsive.isMobile ? "100%" : "25%",
        border: "1px solid #EBEBEB",
        borderTop: "none",
        padding: responsive.isMobile ? "2rem 4rem" : "0 3rem 3rem 3rem",
        boxSizing: "border-box",
        overflow:'scroll'
      }}
    >
      <div style={{ marginTop: responsive.isMobile ? "0rem" : "6rem" }}>
        <CustomAllTypography
          sx={{ fontSize: "1.125rem !important" }}
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
        {status==="shortlisted" ? <ThumbsIcon/> : status==="rejected" ?  <ThumbsDownIcon/> : "" }
        <CustomAllTypography
          name={status? status.charAt(0).toUpperCase()+status.slice(1): ""}
          sx={{ fontSize: "1.125rem !important" }}
          variant={"h4"}
          textcolor={status==="shortlisted" ? "#A5F" : status==="rejected" ?  "#F93232" : "#FFA500" }
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
        <RatingParameter setState={stateData}/>
      </div>
      <div style={{ marginTop: "2.50rem" }}>
        <CustomInputButton size="small" width="100%" onClick={handelClickNext}>
        {
          isLoading
          ?
          <CircularIndeterminate/>
          :
          "Confirm Result & Next"
        }
        </CustomInputButton>
      </div>
      <div
        style={{
          marginTop: "1.50rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Body3 color={"#C9C8D3"}>{stateData?.stats?.pending} reviews pending</Body3>
      </div>
    </div>
  );
};

export default RatingSection;
