import React, { useState } from "react";
import ErrorIcon from "../../assets/cancel.svg";
import WarningIcon from "../../assets/cancel.svg";
import SuccessIcon from "../../assets/cancel.svg";
import LoadingIcon from "../../assets/cancel.svg";
import CustomAllTypography from "../typography/CustomTypograpgy";
import { makeStyles } from "@mui/styles";
import { MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material";

import _ from "lodash";
import SearchIcon from "../icons/SearchIcon";

const CustomSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  height: "3.5rem",
  borderRadius: "1rem",
  fontSize: "16px",
  padding:'16px',
  "&:focus": {
    border: 'none',
  },
}));
const useStyles = makeStyles({
  mainContainer: {
    width: (props) => (props?.width ? props?.width : "100%"),
    display: "flex",
    flexDirection: "column",
    pointerEvents: (props) => (props?.disabled ? "none" : "auto"),
  },
  searchIcon: {
    marginRight: "0.62rem",
  },
  containerStyles: {
    padding: (props) => (props?.type == "dropdown" ? "0rem" : "0.5rem 1.25rem"),
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    outline: "none",
    backgroundColor: (props) =>
      props?.status ? props?.getStatusColor(props?.status) : "#F7F7FD",
    "&:hover": {
      border: "1px solid #E8E6F8",
    },
    "&:focus-within": {
      border: "1px solid #605DEC",
    },
    border: (props) =>
      `1px solid ${props?.status ? props?.getStatusColor(props?.status) : "#F7F7FD"}`,
    borderRadius: (props) => (props?.curvedBorder ? "1.125rem" : "unset"),
  },
  iconStyles: {
    color: "#212121",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textBoxStyles: {
    height: "1.5rem",
    width: "100%",
    border: "none",
    outline: "none",
    color: (props) => (props?.disabled ? "#F7F7FD" : "#212121"),
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
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
  },
});

const CommonTextInput = ({
  style = {},
  width,
  extraText,
  options = [ "Software Engineer", "Doctor", "Teacher", "Designer", "Accountant", "Writer", "Chef", "Electrician", "Mechanic", "Artist", "Photographer", "Lawyer", "Marketing Manager", "Sales Representative", "Nurse", "Architect", "Police Officer", "Pilot", "Financial Analyst", "Data Scientist", "Other", ],
  type,
  startIcon,
  endIcon ,
  placeholder = "Write here",
  title,
  value = "",
  setValue = () => {},
  searchInput,
  status,
  curvedBorder = true,
  onClick = () =>{},
  type1,
}) => {
  const inputRef = React.createRef();

  const [isFocused, setIsFocused] = useState(false);

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
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChangeSelect = (e) => {
    setValue(e);
  };

  const handleClick = () => {
    inputRef.current.focus();
  };
  const classes = useStyles({ getStatusColor, status, curvedBorder, type });

  return (
    <div className={classes.mainContainer} style={style}>
      <div className={classes.containerStyles} onClick={handleClick}>
        {startIcon && (
          <div
            className={classes.iconStyles}
            style={{ marginRight: "0.62rem" }}
          >
            {startIcon}
          </div>
        )}
        {extraText && (
          <CustomAllTypography
            sx={{ marginRight: "0.62rem" }}
            name={extraText}
            variant="body2"
            color="#9D99AC"
          />
        )}
        {searchInput && <SearchIcon className={classes.searchIcon} />}
        <div className={classes.inputdiv}>
          {title && (
            <CustomAllTypography
              name={_.startCase(_.toLower(title))}
              variant="caption"
              color="#AAAAAA"
            />
          )}
          {type != "dropdown" ? (
            <input
              onChange={handleChange}
              type= {type1 ? type1 : "text" }
              label={title}
              value={value}
              placeholder={placeholder}
              ref={inputRef}
              className={classes.textBoxStyles}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="true"
            />
          ) : (

            <CustomSelect
              value={value}
              displayEmpty
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <CustomAllTypography
                      name={placeholder}
                      variant="body1"
                      color="#AAAAAA"
                    />
                  );
                }

                return selected?.join(", ");
              }}
              onChange={handleChangeSelect}
              sx={{ background: "none",border:'none' }}
            >
              {options.map((menuItem, index) => (
                <MenuItem key={index} value={MenuItem}>
                  {menuItem}
                </MenuItem>
              ))}
            </CustomSelect>
          )}
        </div>
        {endIcon && (
          <div className={classes.iconStyles} style={{ marginLeft: "0.62rem" }} onClick={onClick}>
            {endIcon}
          </div>
        )}
      </div>
      {status && (
        <div className={classes.textfieldStatusBoxStyles}>
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
      )}
    </div>
  );
};

export default CommonTextInput;
