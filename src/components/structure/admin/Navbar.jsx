import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CustomAllTypography from "../../typography/CustomTypograpgy";
import { CustomInputButton } from "../../button/CustomButoon";
import StasTopbar from "../../../pages/dashboard/StatsTopBar";
import Logo from "../../icons/Logo";
import Loader from "../../loader/Loader";
import { useAddNewJobMutation } from "../../../services/job";
import { useSelector } from "react-redux";
import QwikConnectLogo from "../../icons/QwikConnectLogo";

const Navbar = ({
  showStatsBar = false,
  showTitle = true,
  title = "Dashboard",
}) => {
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  const [isOp, setIsOp] = useState(false);
  const { pathname } = useLocation();
  const [addNewJob, {data,isLoading}] = useAddNewJobMutation();
  const {jobpost_id, intervieweeId} = useParams();
  const adminId = useSelector((state)=>state.auth.adminId)
  console.log(adminId)
  
  console.log("pathName -> . ",pathname);

  const titleMap = {
    [`/dashboard/home`]: {
      title: "Dashboard",
      button: {
        title: "New Job",
        src: "/jobposting/basicDaetails",
      },
    },
    [`/dashboard/myJobPost`]: {
      title: "Job Posting",
      button: { title: "New Job", src: "/jobposting/basicDaetails" },
    },
    [`/dashboard/changepass`]: { title: "Change Password", button: null },
    [`/dashboard/myprofile`]: { title: "My Profile", button: null },
    [`/dashboard/myPlans`]: { title: "Plan & Billings ", button: null },
    [`/jobposting/${jobpost_id}/publish-link`]: {
      title: "Job Posting",
      button: {
        title: "Preview",
        src: "",
      },
    },
    [`/jobposting/${jobpost_id}/question-setup`]: {
      title: "Job Posting",
      button: {
        title: "Preview",
        src: "",
      },
    },
    [`/jobposting/${jobpost_id}/branding`]: {
      title: "Job Posting",
      button: {
        title: "Preview",
        src: "",
      },
    },
    [`/jobposting/${jobpost_id}/basic-details`]: {
      title: "Job Posting",
      // button: {
      //   title: "Preview",
      //   src: "",
      // },
    },
    // /dashboard/home/existinguser
  };

  const onIconClick = () => {
    navigate(`/dashboard/home`);
  };

  const handelClick = async () => {
    console.log("hello i'm here",pathname)
    if(pathname===`/dashboard/home` || 'dashboard/myJobPost'){
      await addNewJob(adminId).then((response) => {
        console.log("response data", response.data);
        if (response.data) {
          navigate(`/jobposting/${response.data._id}/basicDaetails`);
        }
      });
    }
  }

  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: responsive.isMobile ? "1rem" : "1.5rem 2.5rem",
        boxShadow: responsive.isMobile
          ? ""
          : "0px 4px 4px 0px rgba(142, 141, 208, 0.16)",
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

        <div style={{ width: responsive.isMobile?'': "60%" }}>
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
                  // to={titleMap[pathname]?.button?.src}
                  endIcon={<ArrowForwardIcon />
                }
                onClick={handelClick}
                >
                  {titleMap[pathname]?.button?.title}
                </CustomInputButton>
              )
            : !responsive.isMobile && <StasTopbar />}
        </div>
      </div>
    </div>
    <Loader/>
    </>
  );
};

export default Navbar;
