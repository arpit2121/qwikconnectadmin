import React, { useEffect, useState } from "react";
import CustomContainer from "../../../components/structure/CustomContainer";
import useResponsiveStyles from "../../../utils/MediaQuery";
import Navbar from "../../../components/structure/admin/Navbar";
import { Box } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import { CustomCard } from "../../../components/card/CustomCard";
import CustomIcons from "../../../components/admin/Pagination";
import CustomizedTables from "../../../components/admin/Table";
import StatsTopBar from "../StatsTopBar";
import UsersComponent from "../../../components/admin/UsersComponent";
import user1 from "../../../assets/svg/user1.svg";
import AwardIcon from "../../../components/icons/AwardIcon";
import { Body3 } from "../../../components/typography/Fields";
import StatusButton from "../../../components/button/StatusButton";
import { useNavigate, useParams } from "react-router-dom";
import TableCard from "../../../components/admin/TableCard";
import SystemRecommended from "../../../components/icons/SystemRecommended";
import { generateRandomColor } from "../../../utils/RandomPastel";
import {
  useLazyGetJobInfoQuery,
} from "../../../services/job";
import { useLazyGetAllIntervieweeQuery } from "../../../services/interviewee";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import Modal from "../../../components/modal/Modal";
import { setStats } from "../../../slice/common.slice";
import { formatTimeDifference } from "../../../utils/utilsFunctions";


  const JobPostingDetailsPage = () => {
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  const { jobPostId } = useParams();
  const adminId = useSelector((state) => state.auth.adminId);
  const [open, setOpen] = React.useState(false);

  const [getJobInfo, { data: jobInfo }] = useLazyGetJobInfoQuery();

  const [getAllInterviewee, { data: intervieweeData }] =
    useLazyGetAllIntervieweeQuery();

  useEffect(() => {
    console.log("jobPostIdjobPostId", adminId, jobPostId);
    getJobInfo({ adminId: adminId, jobPostId: jobPostId }); // the second arg is preferCacheValue
    getAllInterviewee({ adminId: adminId, jobPostId: jobPostId });
  }, []);


  const handleClick1 = (intervieweeId) => {
    navigate(`/candidatereview/${intervieweeId}`, {
      state: {
        passingPoint: jobInfo?.passingPoint,
        stats: jobInfo?.stats,
        jobPostId: jobPostId,
        requiredRatingParameter: jobInfo?.requiredRatingParameter,
      },
    });
  };

  var convertedJobDesc = jobInfo?.jobDescription?.replace(/<[^>]+>/g, "");
  
  

  const randcolor1 = useMemo(() => generateRandomColor(), [])
  
  const [activePage, setActivePage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(10);
  const numOfTotalPages = Math.ceil(intervieweeData ? intervieweeData?.length / limitPerPage : 0);

  const indexOfLastData = activePage * limitPerPage;
  const indexOfFirstData = indexOfLastData - limitPerPage;
  // const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  const visibleData = intervieweeData ? intervieweeData?.slice(indexOfFirstData, indexOfLastData) : [];



    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handelDeactiveClick = () =>{
      setOpen(true)
    }

    const handelEditClick = () =>{
      setOpen(true)
    }

    const handelPreviewClick = () =>{
      setOpen(true)
    }

  return (
    <CustomContainer>
      <div style={{ height: "100%", width: "100vw", maxHeight: "862px" }}>
        {responsive.isMobile ? (
          <Box
            sx={{
              width: "100%",
              height: "10%",
              backgroundColor: "",
              display: "flex",
              position: "sticky",
              backgroundColor: "#fff",
              position: "sticky",
              top: 0,
              boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.5)",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: "1",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              <AiOutlineArrowLeft style={{ fontSize: "30px" }} />
            </div>
            <div style={{ paddingRight: "1.25rem" }}>
              <CustomInputButton
                size="small"
                variant="outlined"
                onClick={handelPreviewClick}
              >
                Preview
              </CustomInputButton>
            </div>
          </Box>
        ) : (
          <Navbar />
        )}
        <div style={{ backgroundColor: "" }}>
          {/* "#F8F8F9" */}
          <CustomCard
            sx={{
              backgroundColor: `${randcolor1}`,
              boxShadow: "0px 4px 4px 0px rgba(142, 141, 208, 0.16)",
              borderRadius: "1.25rem",
              padding: responsive.isMobile
                ? "0 1rem 1rem 1rem"
                : "0 4.8rem 2rem 4.8rem",
            }}
          >
            <div>
              <div
                style={{
                  display: responsive.isMobile ? "" : "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    marginTop: "2.38rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <StatusButton name={jobInfo?.status==="ACTIVE"?"Activated":"Deactived"} />
                  <CustomAllTypography
                    name={jobInfo?.jobTitle}
                    variant={"h3"}
                  />
                  <CustomAllTypography
                    name={`Office: ${jobInfo?.hiringLocation}`}
                    variant={"body2"}
                  />
                  <CustomAllTypography
                    name={`Exp.: ${jobInfo?.requiredExperience}`}
                    variant={"body2"}
                  />
                  <Body3 color={"#8A8894"}>{formatTimeDifference(jobInfo?.publishAt)+" ago"}</Body3>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "1.5rem",
                  }}
                >
                  <StatsTopBar
                    application={jobInfo?.stats.pending+jobInfo?.stats.shortlisted+jobInfo?.stats.rejected}
                    shortlisted={jobInfo?.stats.shortlisted}
                    rejected={jobInfo?.stats.rejected}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: "1.5rem",
                  width: responsive.isMobile ? "100%" : "50%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                <CustomAllTypography
                  name={"COMPANY PROFILE:"}
                  variant={"body2"}
                />
                <CustomAllTypography
                  name={
                    `${convertedJobDesc}`
                  }
                  variant={"body2"}
                />
                <div
                  style={{
                    display: responsive.isMobile ? "flex" : "flex",
                    marginTop: "2.5rem",
                    gap: "2rem",
                    flexDirection: responsive.isMobile ? "column" : "",
                  }}
                >
                  <CustomInputButton
                    size="small"
                    variant="outlined"
                    width={responsive.isMobile ? "100%" : ""}
                    // onClick={() => navigate("/jobposting/basicDaetails")}
                    onClick={handelEditClick}
                  >
                    Edit
                  </CustomInputButton>
                  {responsive.isMobile ? (
                    ""
                  ) : (
                    <CustomInputButton
                      size="small"
                      variant="outlined"
                    onClick={handelPreviewClick}
                    >
                      Preview
                    </CustomInputButton>
                  )}
                  <CustomInputButton
                    size="small"
                    variant="outlined"
                    width={responsive.isMobile ? "100%" : ""}
                    sx={{ borderColor: "#F93232", color: "#F93232" }}
                    onClick={handelDeactiveClick}
                  >
                    Deactive
                  </CustomInputButton>
                </div>
              </div>
            </div>
          </CustomCard>
          <div
            style={{
              marginTop: "3.37rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: responsive.isMobile
                ? "0 1rem 0 1rem"
                : "0 4.8rem 0 4.8rem",
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <AwardIcon />
              <CustomAllTypography name={"Review Candidates"} variant={"h4"} />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "2.5rem",
                }}
              >
                <span>System Recommend candidate are highlighted in</span>
                <span style={{ marginLeft: "0.5rem" }}>
                  <SystemRecommended />
                </span>
              </span>
            </div>
            <div>
              {responsive.isMobile ? (
                visibleData?.length === 0 ? (
                  <TableCard
                    Name={
                      <CustomAllTypography
                        name={"No Data To Display"}
                        variant={"h3"}
                        sx={{ alignSelf: "center" }}
                      />
                    }
                  ></TableCard>
                ) : (
                  visibleData?.map((users) => {
                    return (
                      <TableCard
                        image={
                          <UsersComponent
                            image={user1}
                            style={{ width: "2rem", height: "2rem" }}
                          />
                        }
                        Name={users.fullName}
                        email={users.email}
                        time={formatTimeDifference(users.registration_date)+" ago"}
                        status={
                          users.status === "shortlisted" ? "Shortlisted" : users.status === "pending" ? "Pending" : "Rejected"
                        }
                        system={false}
                        id={users._id}
                        handleClick={handleClick1}
                      />
                    );
                  })
                )
              ) : (
                <CustomizedTables data={visibleData} handleClick={handleClick1}/>
              )}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2.5rem",
                marginBottom: "7rem",
              }}
            >
              <CustomIcons setActivePage={setActivePage} activePage={activePage} pageCount={numOfTotalPages}/>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
    </CustomContainer>
  );
};

export default JobPostingDetailsPage;
