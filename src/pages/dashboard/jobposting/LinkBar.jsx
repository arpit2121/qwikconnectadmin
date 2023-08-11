import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import DotIcon from "../../../components/icons/DotIcon";
import { useSelector } from "react-redux";
import useResponsiveStyles from "../../../utils/MediaQuery";

const LinkBar = ({
  linkArray = [],
  currentStep = 1,
  totalStep = 4,
  showSteps = false,
}) => {
  const navigate = useNavigate();
  const responsive=useResponsiveStyles()
  const handleClick = (path) => {
    if (path) navigate(path);
  };
  const { selectedJobPostingPage } = useSelector((state) => state.common);
  const breadcrumbs = linkArray.map((elem, index) => (
    <CustomAllTypography
      key={index}
      textcolor={index != linkArray.length - 1 ? "#8A8894" : "#202020"}
      sx={{ fontSize: "0.875rem !important", fontWeight: 400, cursor: "pointer" }}
      name={elem?.title}
      onClick={() => handleClick(elem?.path)}
      variant="body2"
    />
  ));
  return (
    <div
      style={{
        display: responsive.isMobile?'none':"flex",
        justifyContent: "space-between",
        alignItems: "center",
        // padding: "1rem",
        paddingLeft:10
      }}
    >
      <Breadcrumbs separator={<DotIcon />} aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>

      {showSteps && (
        <CustomAllTypography
          // sx={{ fontSize: "0.875rem", fontWeight: 400 }}
          textcolor="#605DEC"
          name={`Step ${selectedJobPostingPage} of ${totalStep}`}
          onClick={() => handleClick(elem?.path)}
          variant="body3"
        />
      )}
    </div>
  );
};

export default LinkBar;
