import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import polygon from "../../assets/polygon.svg";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--bg-white, #FFF)",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: "0px 4px 8px 0px rgba(142, 141, 208, 0.30)",
    borderRadius: "0.25rem",
    fontSize: "0.75rem",
    padding: "0rem 0.5rem 0.375rem 0.5rem",
    lineHeight: "1rem",
    fontWeight: 400,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: 'var(--bg-white, #FFF);', // Set the arrow color to match the tooltip background
  },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  // Add your custom styles here
  boxShadow: 'none', // Remove boxShadow
  // backgroundColor: 'red', // Example: Change the background color
  '&:hover': {
    backgroundColor: 'white', // Example: Change the background color on hover
    // boxShadow: 'none'
  },
  '&:active': {
    backgroundColor: 'transparent', // Remove the background color on click
  },
}));

const CustomTooltip = ({ icon, message }) => {
  return (
    <>
      <LightTooltip title={message} placement="bottom-start" arrow>
        <CustomIconButton >{icon}</CustomIconButton>
      </LightTooltip>
    </>
  );
};

export default CustomTooltip;

