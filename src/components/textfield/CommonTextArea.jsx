import { Select, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CountryList from "country-list-with-dial-code-and-flag";
import _ from "lodash";
import React, { useState } from "react";
import {
  default as ErrorIcon,
  default as LoadingIcon,
  default as SuccessIcon,
  default as WarningIcon,
} from "../../assets/cancel.svg";
import { darkspacetheme } from "../../theme/theme";
import useResponsiveStyles from "../../utils/MediaQuery";
import CustomAllTypography from "../typography/CustomTypograpgy";

const CustomSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  height: "2.5rem",
  borderRadius: "1rem",
  fontSize: "16px",
  padding: "0.5rem",
  fontFamily: "nunito",
  // boxShadow: "none",
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  // "&.MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
  //   width:'200px !important'
  // },

}));

const useStyles = makeStyles({
  mainContainer: {
    // minWidth: (props) => (props?.width ? props?.width : "100%"),
    // width: "max-content",
    minWidth:'100%',
    display: "flex",
    flexDirection: "column",
    pointerEvents: (props) => (props?.disabled ? "none" : "auto"),
  },
  searchIcon: {
    marginRight: "0.62rem",
  },
  containerStyles: {
    padding: "0rem 0.5rem 0.5rem 1rem",
    height: "max-content",
    width: "max-contant",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    outline: "none",
    position: "relative",
    backgroundColor: (props) =>
      props?.status ? props?.getStatusColor(props?.status) : "#F7F7FD",
    "&:hover": {
      border: "1px solid #E8E6F8",
    },
    "&:focus-within": {
      border: "1px solid #605DEC",
    },
    border: (props) =>
      `1px solid ${
        props?.status ? props?.getStatusColor(props?.status) : "#F7F7FD"
      }`,
    borderRadius: (props) => (props?.curvedBorder ? "1.125rem" : "unset"),
  },
  iconStyles: {
    color: "#212121",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textAreaStyles: {
    maxWidth: "100%",
    border: "none",
    outline: "none",
    padding: "0.2rem",
    color: (props) => (props?.disabled ? "#F7F7FD" : "#212121"),
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    borderRadius: "1.125rem",
    lineHeight: "1.5rem",
    backgroundColor: (props) =>
      props?.status ? props?.getStatusColor(props?.status) : "#F7F7FD",
  },
  inputdiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
  },
  textfieldStatusBoxStyles: {
    paddingTop: "0.5rem",
    height: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent:'space-between'
  },
});

const CommonTextArea = ({
  style = {},

  type = "textarea",
  placeholder = "Write here",
  title,
  value ,
  setValue = () => {},
  status = "",
  curvedBorder = true,
  onClick = () => {},
  borderStyle = {},
  maxCount=100,
  onBlur
}) => {
  const responsive = useResponsiveStyles();
  const inputRef = React.createRef();
  const [isFocused, setIsFocused] = useState(false);
console.log(value)
  const statusMap = {
    error: { color: "#FFD8D8", icon: ErrorIcon },
    warning: { color: "#FFEAC1", icon: WarningIcon },
    loading: { color: "#AAAAAA", icon: LoadingIcon },
    success: { color: "#AAAAAA", icon: SuccessIcon },
  };
  const getStatusColor = (status) => {
    return statusMap?.[status]?.color || "#AAAAAA";
  };

  const handleFocus = (event) => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    onBlur(event)
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChangeSelect = (e) => {
    setValue(e);
  };
  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleClick = () => {
    inputRef.current.focus();
  };
  const classes = useStyles({
    getStatusColor,
    status,
    curvedBorder,
    type,
    isFocused,
    responsive,
  });

  return (
    <div className={classes.mainContainer} style={style}>
      <div
        className={classes.containerStyles}
        onClick={handleClick}
        style={borderStyle}
      >
        <div className={classes.inputdiv}>
          {title && (
            <div
              className={classes.title}
              style={{ position: isFocused || !!value ? "static" : "absolute",opacity:isFocused || !!value ? 0 : 1 }}
            >
              <CustomAllTypography
                name={_.startCase(_.toLower(title))}
                variant="caption"
                sx={{ fontSize: "0.75rem" }}
                textcolor={darkspacetheme.pallete.fields.title}
              />
            </div>
          )}
          <textArea
            // rows="2"
            maxlength={maxCount}
            onChange={handleChange}
            label={title}
            value={value}
            placeholder={title ? "" : placeholder}
            ref={inputRef}
            className={classes.textAreaStyles}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="new-user-street-address"
          ></textArea>
        </div>
      </div>

      <div className={classes.textfieldStatusBoxStyles}>
        {status ? (
          <div>
            <img
              src={statusMap?.[status]?.icon || ""}
              alt={`${status}-icon`}
              width="16px"
              height="16px"
              style={{ marginRight: "0.75rem" }}
            />
            <CustomAllTypography
              name={_.startCase(_.toLower(status))}
              variant="caption"
              color="#AAAAAA"
            />
          </div>
        ) : (
          <div></div>
        )}
        <div>
          <CustomAllTypography
            name={`${value?.length||0}/`}
            variant="caption"
            sx={{ fontSize: "0.75rem" }}
            textcolor={darkspacetheme.colorPallete.grey}
          />
         

          <CustomAllTypography
            name={maxCount}
            variant="caption"
            sx={{ fontSize: "0.75rem" }}
            textcolor={darkspacetheme.colorPallete.grey}
          />
        </div>
      </div>
    </div>
  );
};

export default CommonTextArea;
