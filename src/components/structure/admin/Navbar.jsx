import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CustomAllTypography from "../../typography/CustomTypograpgy";
import { CustomInputButton } from "../../button/CustomButoon";
import StasTopbar from "../../../pages/dashboard/StatsTopBar";
import Logo from "../../icons/Logo";

const Navbar = ({
  showStatsBar = false,
  showTitle = true,
  title = "Dashboard",
}) => {
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  const [isOp, setIsOp] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);
  const titleMap = {
    "/dashboard/home/existinguser": {
      title: "Dashboard",
      button: {
        title: "New Job",
        src: "/jobposting/basicDaetails",
      },
    },
    "/dashboard/myJobPost": {
      title: "Job Posting",
      button: { title: "New Job", src: "/jobposting/basicDaetails" },
    },
    "/dashboard/changepass": { title: "Change Password", button: null },
    "/dashboard/myprofile": { title: "My Profile", button: null },
    "/dashboard/myPlans": { title: "Plan & Billings ", button: null },
    "/jobposting/basicDaetails": {
      title: "Job Posting ",
      button: {
        title: "Preview",
        src: "",
      },
    },
    // /dashboard/home/existinguser
  };

  const onIconClick = () => {
    navigate("/dashboard/home/existinguser");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: responsive.isMobile ? "1rem" : "1.5rem 2.5rem",
        boxShadow: responsive.isMobile
          ? ""
          : "0 2px 3px -1px rgba(0, 0, 0, 0.5)",
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        zIndex: 20,
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
        <Logo onClick={onIconClick} />

        <div style={{ width: responsive.isMobile?'': "55%" }}>
          {showTitle && (
            <CustomAllTypography
              name={titleMap[pathname]?.title}
              variant={"h3"}
            />
          )}
        </div>
        <div
          style={{ minWidth: "25%", display: "flex", justifyContent: "flex-end" }}
        >
          {!showStatsBar
            ? titleMap[pathname]?.button && !responsive.isMobile && (
                <CustomInputButton
                  variant="outlined"
                  size="small"
                  responsive
                  component={Link}
                  to={titleMap[pathname]?.button?.src}
                  endIcon={<ArrowForwardIcon />}
                >
                  {titleMap[pathname]?.button?.title}
                </CustomInputButton>
              )
            : !responsive.isMobile && <StasTopbar />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
