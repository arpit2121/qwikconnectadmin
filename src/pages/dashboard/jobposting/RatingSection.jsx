import React from "react";
import RatingParameter from "../../../components/admin/RatingParameter";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import ThumbsDownIcon from "../../../components/icons/ThumbsDownIcon";
import ThumbsUpIcon from "../../../components/icons/ThumbsUpicon";
import { Body3 } from "../../../components/typography/Fields";
import { CustomInputButton } from "../../../components/button/CustomButoon";

const RatingSection = () => {
  const responsive = useResponsiveStyles();
  return (
    <div
      style={{
        width: responsive.isMobile ? "100%" : "25%",
        border: "1px solid #EBEBEB",
        borderTop:'none',
        padding: responsive.isMobile ? "2rem 4rem" : "0 3rem 3rem 3rem",
        boxSizing: "border-box",
        // zIndex: responsive.isMobile ? "" : "-1",
      }}
    >
      <div style={{ marginTop: responsive.isMobile ? "0rem" : "6rem" }}>
        <CustomAllTypography sx={{fontSize:'1.125rem !important'}} name={"Overall Ratings:"} variant={"h5"} />
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
          sx={{fontSize:'1.125rem !important'}}
          variant={"h4"}
          textcolor={"#F93232"}
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
  );
};

export default RatingSection;
