import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import DotIcon from "../../../components/icons/dotIcon";

const LinkBar = ({ linkArray = [],currentStep=1,totalStep=4,showSteps=true}) => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const breadcrumbs = linkArray.map((elem, index) => (
    <CustomAllTypography
      key={index}
      textcolor={index != linkArray.length - 1 ? "#8A8894" : "#202020"}
      sx={{ fontSize: "0.875rem", fontWeight: 400,cursor:'pointer' }}
      name={elem?.title}
      onClick={() => handleClick(elem?.path)}
      variant="body2"
    />
  ));
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1rem'}}>

    <Breadcrumbs separator={<DotIcon/>} aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>

    {showSteps &&  <CustomAllTypography
      // sx={{ fontSize: "0.875rem", fontWeight: 400 }}
      textcolor="#605DEC"
      name={`Step ${currentStep} of ${totalStep}`}
      onClick={() => handleClick(elem?.path)}
      variant="body3"
    />}
    </div>
  );
};

export default LinkBar;
