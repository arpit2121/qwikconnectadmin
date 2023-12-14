import React, { useState } from "react";
import RatingParameter from "../../../components/admin/RatingParameter";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import ThumbsDownIcon from "../../../components/icons/ThumbsDownIcon";
import ThumbsIcon from '../../../components/icons/ThumbsIcon'
import { Body3 } from "../../../components/typography/Fields";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import { useLocation, useNavigate } from "react-router-dom";

const RatingSection = ({status}) => {
  const responsive = useResponsiveStyles();

  const [state, setState] = useState(true);

  const navigate = useNavigate()

  const handelClickNext = () =>{
    navigate('/jobpostingdetailspage/656f8cf0cb1654b6eba392bb')
  }

  return (
    <div
      style={{
        width: responsive.isMobile ? "100%" : "25%",
        border: "1px solid #EBEBEB",
        borderTop: "none",
        padding: responsive.isMobile ? "2rem 4rem" : "0 3rem 3rem 3rem",
        boxSizing: "border-box",
        // zIndex: responsive.isMobile ? "" : "-1",
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
        {/* {status==="rejected" ? <ThumbsDownIcon/> : status==="shortlisted" ? <ThumbsIcon/> : "" } */}
        {state ? <ThumbsIcon/> : <ThumbsDownIcon/>}
        
        <CustomAllTypography
          name={state ? "Shortlisted" :"Rejected"}
          // name={status==="pending"? "Pending" : status=="shortlisted" ? "Shortlisted": status=="rejected"?"Rejected":""}
          sx={{ fontSize: "1.125rem !important" }}
          variant={"h4"}
          textcolor={state ? "#A5F" :"#F93232"}
          // textcolor={status=="rejected" ? "#F93232" : status=="pending" ? "orange" : status=="shortlisted" ? "#A5F":""}
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
        <RatingParameter setState={setState}/>
      </div>
      <div style={{ marginTop: "2.50rem" }}>
        <CustomInputButton size="small" width="100%" onClick={handelClickNext}>
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
  );
};

export default RatingSection;
