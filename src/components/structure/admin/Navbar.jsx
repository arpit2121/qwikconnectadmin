import { Button } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CustomAllTypography from "../../typography/CustomTypograpgy";
import { CustomInputButton } from "../../button/CustomButoon";
import StasTopbar from "../../../pages/dashboard/StatsTopBar";
import Logo from "../../icons/Logo";

const Navbar = ({ job, onClick, showStatsBar = false }) => {
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  const [isOp, setIsOp] = useState(false);

  const onIconClick = () => {
    console.log('icon')
    navigate("/dashboard/home/existinguser");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: responsive.isMobile?"1rem": "1.5rem 2.5rem",
        boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.5)",
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        zIndex:20
      }}
    >
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
       
         <Logo onClick={onIconClick}/>
     
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
    </div>
  );
};

export default Navbar;
