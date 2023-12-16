import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useResponsiveStyles from "../../utils/MediaQuery";
import CardContainerComponent from "./CardContainerComponent";
import CommonProfileBar from "./CommonProfileBar";
import NonExisting from "./NonExisting";
import { useGetAdminInfoQuery } from "../../services/admin";
import { useDispatch, useSelector } from "react-redux";
import { setApiLoadere } from "../../slice/common.slice";
import { useGetAllJobPostQuery } from "../../services/job";


const DashBoardMail = () => {
  const responsive = useResponsiveStyles();
  const dispatch = useDispatch();

  // const {id} = useParams();
  const adminId = useSelector((state)=>state.auth.adminId)
  // console.log("id -->",id)
  const {
    data:adminData,
    isLoading,
  } = useGetAdminInfoQuery(adminId);



  const { data: allJobPost } = useGetAllJobPostQuery(adminId);

  if (isLoading) {
    dispatch(setApiLoadere(true));
  } else {
    dispatch(setApiLoadere(false));
  }

  console.log("damiong",adminData)
  console.log("console.log(allJobPost);",allJobPost);

  // useEffect(()=>{
  //  useGetAdminInfoQuery(adminId)
  //  console.log(adminData)
  // })


  return (
    <div
    // 0 2rem 0 2rem
      style={{
        padding: !responsive.isMobile
          ? ""
          : "0 0 3.94rem 0 3.94rem",
      }}
    >
      <CommonProfileBar  title={'Overview'} showProfile={false} rejected={adminData?.IntervieweeData?.rejected} application={adminData?.IntervieweeData?.pending + adminData?.IntervieweeData?.rejected + adminData?.IntervieweeData?.shortlisted} shortlisted={adminData?.IntervieweeData?.shortlisted}/>
      { allJobPost?.length === 0 ? <NonExisting/> : <CardContainerComponent style={{padding:responsive.isMobile?'1rem':'3.87rem',marginTop:0}} data={allJobPost}/>}
    </div>
  );
};

export default DashBoardMail;
