import React from "react";
import { styled } from "@mui/material";
import { Button } from "@mui/material";
import useResponsiveStyles from "../../utils/MediaQuery";
import useNavigation from "../../utils/NaivigateTo";
import DeleteIcon from '@mui/icons-material/Delete';

export const CustomIconButton = styled(Button)(
  ({ theme, responsive, variant, size }) => {
    let padding;
    switch (size) {
      case "large":
        padding = "1.25rem";
        break;
      case "normal":
        padding = "1rem";
        break;
      case "medium":
        padding = "0.75rem";
        break;
      case "small":
        padding = "0.5rem";
        break;
      case "extra-small":
      default:
        padding = "0.5rem";
        break;
    }

    return {
      borderRadius: "0.25rem",
      padding,
      color:
        variant === "outlined"
          ? "#605DEC"
          : variant === "text"
          ? "#605DEC"
          : "#FFFFFF",
      backgroundColor:
        variant === "outlined"
          ? "transparent"
          : variant === "text"
          ? "transparent"
          : "#000000",
      border:
        variant === "outlined"
          ? "1px solid #605DEC"
          : variant === "text"
          ? "none"
          : "none",
      "&:hover": {
        backgroundColor:
          variant === "outlined"
            ? "#F6F5FF"
            : variant === "text"
            ? "#F6F5FF"
            : "#3D3ACE",
      },
      "&:focus": {
        border:
          variant === "outlined"
            ? "1px solid  #F845FC"
            : variant === "text"
            ? " 1px solid  #F845FC"
            : "1px solid  #F845FC",
        backgroundColor:
          variant === "outlined"
            ? "#F6F5FF"
            : variant === "text"
            ? "#F6F5FF"
            : "#3D3ACE",
      },
      "&:active": {
        backgroundColor:
          variant === "outlined"
            ? "#F6F5FF"
            : variant === "text"
            ? "#F6F5FF"
            : "#3D3ACE",
        color:
          variant === "outlined"
            ? "#C5C0DB"
            : variant === "text"
            ? "#605DEC"
            : "#FFFFFF",
      },
      "&:disabled": {
        backgroundColor:
          variant === "outlined"
            ? "transparent"
            : variant === "text"
            ? "transparent"
            : "#F4F3FE",
        color:
          variant === "outlined"
            ? "#C5C0DB"
            : variant === "text"
            ? "#C5C0DB"
            : "#C5C0DB",
      },
      "&.MuiButton-clicked": {
        backgroundColor:
          variant === "outlined"
            ? "#F6F5FF"
            : variant === "text"
            ? "#E2E1FF"
            : "#23209F",
        color:
          variant === "outlined"
            ? "#FFFFFF"
            : variant === "text"
            ? "#605DEC"
            : "#C5C0DB",
      },
    };
  }
);

const IconButton = (props) => {
  const responsive = useResponsiveStyles();
  const navigation = useNavigation();
  const handleButtonClick = () => {
    console.log("hii");
    navigation.goTo("password");
  };
  return (
    <div>
      <CustomIconButton aria-label="delete" variant="text" size="extra-small" responsive>
        <DeleteIcon />
      </CustomIconButton>
    </div>
  );
};

export default IconButton;

//endIcon={<DeleteIcon />}
//startIcon={<DeleteIcon />}
