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
  useGetJobInfoQuery,
  useLazyGetJobInfoQuery,
} from "../../../services/job";
import { useLazyGetAllIntervieweeQuery } from "../../../services/interviewee";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import Modal from "../../../components/modal/Modal";

const data = [
  {
    no: "01",
    profileimage: (
      <UsersComponent image={user1} style={{ width: "2rem", height: "2rem" }} />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "02",
    profileimage: (
      <UsersComponent image={user1} style={{ width: "2rem", height: "2rem" }} />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Pending",
    time: "30m ago",
  },
  {
    no: "03",
    profileimage: (
      <UsersComponent image={user1} style={{ width: "2rem", height: "2rem" }} />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Shortlisted",
    time: "30m ago",
  },
  {
    no: "04",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "05",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "06",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "07",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "08",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "09",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "10",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "11",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "12",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "13",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "14",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "15",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "16",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "17",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "18",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "19",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "20",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
  {
    no: "21",
    profileimage: (
      <UsersComponent
        image={user1}
        style={{ width: "2rem", height: "2rem", padding: "0" }}
      />
    ),
    name: "Danish Shah",
    email: "Danish.shah@xmail.com",
    status: "Rejected",
    time: "30m ago",
  },
];



const JobPostingDetailsPage = () => {
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  const { jobPostId } = useParams();
  const adminId = useSelector((state) => state.auth.adminId);

  console.log(" jobPostId ---> ", jobPostId);
  // const {data: jobData} = useGetJobInfoQuery(jobPostId)

  const [getJobInfo, { data: jobInfo }] = useLazyGetJobInfoQuery();

  const [getAllInterviewee, { data: intervieweeData }] =
    useLazyGetAllIntervieweeQuery();

  useEffect(() => {
    console.log("jobPostIdjobPostId", adminId, jobPostId);
    getJobInfo({ adminId: adminId, jobPostId: jobPostId }); // the second arg is preferCacheValue
    getAllInterviewee({ adminId: adminId, jobPostId: jobPostId });
  }, []);


  // useEffect(() => {
  //   (async () => {
  //     if (jobPostId) {
  //       await getAllInterviewee({ adminId: adminId, jobPostId: jobPostId });
  //     }
  //   })();
  // }, [jobPostId]);

  console.log("intervieweeData", intervieweeData?.length);

  const handleClick1 = (intervieweeId) => {
    // console.log("hello",intervieweeId)
    navigate(`/candidatereview/${intervieweeId}`, {
      state: {
        passingPoint: jobInfo.passingPoint,
      },
    });
  };

  var convertedJobDesc = jobInfo?.jobDescription?.replace(/<[^>]+>/g, "");
  console.log("job-->", intervieweeData);

  const randomColor = generateRandomColor();
  console.log("hdhdh", randomColor);

  const [randColor, setRandColor] = useState();


  useEffect(()=>{
    setRandColor(randomColor)
  },[])

  const randcolor1 = useMemo(() => generateRandomColor(), [])
  

  //pagination data

  const [activePage, setActivePage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(10);
  const numOfTotalPages = Math.ceil(intervieweeData ? intervieweeData?.length / limitPerPage : 0);

  const indexOfLastData = activePage * limitPerPage;
  const indexOfFirstData = indexOfLastData - limitPerPage;

  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  console.log("d", numOfTotalPages);

  const visibleData = intervieweeData ? intervieweeData?.slice(indexOfFirstData, indexOfLastData) : [];


  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handelDeactiveClick = () =>{
      console.log("hello")
      setOpen(true)
    }

    const handelEditClick = () =>{
      console.log("hello")
      setOpen(true)
    }

    const handelPreviewClick = () =>{
      console.log("hello")
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
                  <StatusButton name="Activated" />
                  <CustomAllTypography
                    name={jobInfo?.jobTitle}
                    // name={"UI/UX Developer / Lead"}
                    variant={"h3"}
                  />
                  <CustomAllTypography
                    name={`Office: ${jobInfo?.hiringLocation}`}
                    // name={"Office: Remote"}
                    variant={"body2"}
                  />
                  <CustomAllTypography
                    name={`Exp.: ${jobInfo?.requiredExperience}`}
                    variant={"body2"}
                  />
                  <Body3 color={"#8A8894"}>{"1d Ago"}</Body3>
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
                    application={jobInfo?.application.length}
                    shortlisted={jobInfo?.shortlisted.length}
                    rejected={jobInfo?.rejected.length}
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
                    // "${}Allegis Group, Inc. is an international talent management firm headquartered in Hanover, Maryland, United States. As of 2018, it had US$13.4 billion in revenue, and 19,000 employees. It ranks fourth in the world. More"
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
                      // onClick={() => navigate("/jobposting/basicDaetails")}
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
                        time={"1d ago"}
                        status={
                          users.status === "Shortlisted" ? "Shortlisted" : users.status === "Pending" ? "Pending" : "Rejected"
                        }
                        system={false}
                        id={users._id}
                      />
                    );
                  })
                )
              ) : (
                <CustomizedTables data={visibleData} hadleClick={handleClick1}/>
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
