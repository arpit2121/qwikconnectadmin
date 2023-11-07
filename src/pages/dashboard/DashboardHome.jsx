import React, { useEffect } from "react";
import {useParams } from "react-router-dom";
import CommonProfileBar from "./CommonProfileBar";
import ExistingUser from "./ExistingUser";
import NonExisting from "./NonExisting";
import { useGetAdminInfoQuery } from "../../services/admin";
import { useDispatch, useSelector } from "react-redux";
import { setApiLoadere } from "../../slice/common.slice";
import { useGetActiveJobPostQuery } from "../../services/job";


const DashboardHome = () => {
  const dispatch = useDispatch();
  
  const {id} = useParams();
  console.log("id", id)

  const {
    data:adminData,
    isLoading,
  } = useGetAdminInfoQuery(id);
  // const 
const {data: activeJobPost} = useGetActiveJobPostQuery(id)

console.log("activeJobPost",activeJobPost)


  if(isLoading) {
    dispatch(setApiLoadere(true));
  }
  else{
    dispatch(setApiLoadere(false));
  }

  console.log("adminn data --> ",adminData, activeJobPost,activeJobPost?.length)

  // let split = adminData?.fullName.split(' ')


  return (
    <div style={{ height: "100%", width: "100%" }}>
       <CommonProfileBar application={adminData?.IntervieweeData?.pending} shortlisted={adminData?.IntervieweeData?.shortlisted} userName={adminData?.admin?.fullName}/>
       {/* <Outlet /> */}
       {  activeJobPost?.length === 0 ? <NonExisting/> : <ExistingUser data={activeJobPost}/>}
    </div>
  );
};

export default DashboardHome;
