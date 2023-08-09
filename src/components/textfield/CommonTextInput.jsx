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
import CountryList from "country-list-with-dial-code-and-flag";
import { darkspacetheme } from "../../theme/theme";

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
    padding: (props) => (props?.type == "dropdown" ? "0rem" : "0rem 1.25rem"),
    height: "3.5rem",
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
  countryCode: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem",
  },
  title: {
    position: "absolute",
    left: "1.25rem",
  },
});

const CommonTextInput = ({
  style = {},
  width,
  extraText,
  options = [
    "Software Engineer",
    "Doctor",
    "Teacher",
    "Designer",
    "Accountant",
    "Writer",
    "Chef",
    "Electrician",
    "Mechanic",
    "Artist",
    "Photographer",
    "Lawyer",
    "Marketing Manager",
    "Sales Representative",
    "Nurse",
    "Architect",
    "Police Officer",
    "Pilot",
    "Financial Analyst",
    "Data Scientist",
    "Other",
  ],
  type,
  startIcon,
  endIcon,
  placeholder = "Write here",
  title,
  value = "",
  setValue = () => {},
  searchInput,
  status,
  curvedBorder = true,
  onClick = () => {},
  type1,
}) => {
  const inputRef = React.createRef();
  const [isFocused, setIsFocused] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

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
  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
  };
  const allCountryList = CountryList.getAll();
  const handleClick = () => {
    inputRef.current.focus();
  };
  const classes = useStyles({
    getStatusColor,
    status,
    curvedBorder,
    type,
    isFocused,
  });

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
          <div style={{ width: "max-content", marginRight: "0.62rem" }}>
            <CustomSelect
              IconComponent={() => null}
              inputProps={{ sx: { padding: "0 !important", color: "#9D99AC" } }}
              sx={{ padding: 0, height: "max-content" }}
              renderValue={(selected) => selected}
              value={countryCode}
              onChange={handleCountryChange}
              className={classes.countryList}
              onClick={(e) => e.stopPropagation()}
              native={false}
            >
              {allCountryList?.map((elem, index) => (
                <MenuItem key={index} value={elem?.dialCode}>
                  <div className={classes.countryCode}>
                    <span>{elem?.flag}</span>
                    <CustomAllTypography
                      name={elem?.dial_code}
                      variant="body3"
                      color="#9D99AC"
                    />
                  </div>
                </MenuItem>
              ))}
            </CustomSelect>
          </div>
        )}
        {searchInput && <SearchIcon className={classes.searchIcon} />}
        <div className={classes.inputdiv}>
          {title && (
            <div
              className={classes.title}
              style={{ position: isFocused ? "static" : "absolute" }}
            >
              <CustomAllTypography
                name={_.startCase(_.toLower(title))}
                variant="caption"
                sx={{ fontSize: "0.75rem" }}
                textcolor={darkspacetheme.pallete.fields.title}
              />
            </div>
          )}

          {type != "dropdown" ? (
            <input
              onChange={handleChange}
              type={type1 ? type1 : "text"}
              label={title}
              // value={value}
              placeholder={title ? "" : placeholder}
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
                      sx={{ fontSize: "0.875rem", fontWeight: 400 }}
                      name={placeholder}
                      variant="body3"
                      textcolor="#9D99AC"
                    />
                  );
                }

                return selected?.join(", ");
              }}
              onChange={handleChangeSelect}
              sx={{ background: "none", border: "none" }}
            >
              {options?.map((menuItem, index) => (
                <MenuItem key={index} value={MenuItem}>
                  {menuItem}
                </MenuItem>
              ))}
            </CustomSelect>
          )}
        </div>
        {endIcon && (
          <div
            className={classes.iconStyles}
            style={{ marginLeft: "0.62rem" }}
            onClick={onClick}
          >
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
