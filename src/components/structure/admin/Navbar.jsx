import { Button } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CustomAllTypography from "../../typography/CustomTypograpgy";
import { CustomInputButton } from "../../button/CustomButoon";
import StasTopbar from "../../../pages/dashboard/StatsTopBar";

const Navbar = ({ job, onClick, showStatsBar = false }) => {
  const responsive = useResponsiveStyles();
  const navigate=useNavigate()
  const [isOp, setIsOp] = useState(false);

const onIconClick=()=>{
navigate('/dashboard/home/existinguser')
}
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ width: "10%", display: "flex", alignItems: "center" }} onClick={onIconClick}>
        <img src={logo} alt="logo" width={"50%"}></img>
      </div>
      <div style={{ width: "55%" }}>
        <CustomAllTypography name={job ? job : "Dashboard"} variant={"h3"} />
      </div>
      <div
        style={{ width: "25%", display: "flex", justifyContent: "flex-end" }}
      >
        {job ? (
          ""
        ) : !showStatsBar ? (
          <CustomInputButton
            variant="outlined"
            size="small"
            responsive
            component={Link}
            to="/jobposting/basicDaetails"
            endIcon={<ArrowForwardIcon />}
          >
            Verify
          </CustomInputButton>
        ) : (
          <StasTopbar />
        )}
      </div>
    </div>
  );
};

export default Navbar;
