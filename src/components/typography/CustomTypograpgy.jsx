import React from "react";
import { styled } from "@mui/material";
import useResponsiveStyles from "../../utils/MediaQuery";
import { Typography } from "@mui/material";

export const CustomTypography = styled(Typography)(
  ({ theme, responsive, fontStyle }) => ({
    "&.MuiTypography-h1": {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: responsive.isMobile
        ? "1.5rem"
        : responsive.isTablet
        ? "3rem"
        : "3.5rem",
      lineHeight: responsive.isMobile ? "120%" : "110%",
    },
    "&.MuiTypography-h2": {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: responsive.isMobile
        ? "1.25rem"
        : responsive.isTablet
        ? "2rem"
        : "3rem",
      lineHeight: "120%",
    },
    "&.MuiTypography-h3": {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: responsive.isMobile
        ? "1.125rem"
        : responsive.isTablet
        ? "1.5rem"
        : "2rem",
      lineHeight: "120%",
    },
    "&.MuiTypography-h4": {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: responsive.isMobile
        ? "1rem"
        : responsive.isTablet
        ? "1.125rem"
        : "1.5rem",
      lineHeight: "120%",
    },
    "&.MuiTypography-h5": {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontSize: responsive.isMobile
        ? "0.875rem"
        : responsive.isTablet
        ? "1rem"
        : "1.125rem",
      lineHeight: "120%",
    },
    "&.MuiTypography-body1": {
      fontFamily: "Nunito",
      fontWeight: 400,
      fontSize: responsive.isMobile
        ? "1rem"
        : responsive.isTablet
        ? "1rem"
        : "1.125rem",
      lineHeight: responsive.isMobile
        ? "130%"
        : responsive.isTablet
        ? "130%"
        : "140%",
    },
    "&.MuiTypography-body2": {
      fontFamily: "Nunito",
      fontWeight: 400,
      fontSize: responsive.isMobile
        ? "0.875rem"
        : responsive.isTablet
        ? "0.875rem"
        : "1rem",
      lineHeight: responsive.isMobile
        ? "130%"
        : responsive.isTablet
        ? "130%"
        : "140%",
    },
    // '&:hover': {
    //   cursor: 'pointer',
    // },
    // '&.MuiTypography-body3': {
    //   fontWeight: 'regular',
    //   fontColor: 'grey',
    //   fontSize: responsive.isMobile
    //     ? '0.875rem'
    //     : responsive.isTablet
    //     ? '0.875rem'
    //     : '0.875rem',
    // },
    // '&:hover': {
    //   cursor: 'pointer',
    // },
  })
);

const CustomAllTypography = ({ name, variant, sx={}, fontStyle, textcolor}) => {
  const responsive = useResponsiveStyles();
  // console.log(responsive)
  return (
    <CustomTypography
      variant={variant}
      responsive={responsive}
      fontStyle={fontStyle}
      
      sx={{...sx,color:textcolor}}
    >
      {name}
    </CustomTypography>
  );
};

export default CustomAllTypography;

// https://chat.openai.com/share/00cf3b17-3577-46be-a57d-ccbbeaee767b
