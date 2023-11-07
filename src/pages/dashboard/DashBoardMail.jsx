import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useResponsiveStyles from "../../utils/MediaQuery";
import CardContainerComponent from "./CardContainerComponent";
import CommonProfileBar from "./CommonProfileBar";
import NonExisting from "./NonExisting";
import { useGetAdminInfoQuery } from "../../services/admin";


const DashBoardMail = () => {
  const responsive = useResponsiveStyles();

  const {id} = useParams();

  console.log("id -->",id)
  const {
    data:adminData,
    isLoading,
  } = useGetAdminInfoQuery("651137f89cbfd5858dc871a5");

  console.log("damiong",adminData)
  return (
    <div
    // 0 2rem 0 2rem
      style={{
        padding: !responsive.isMobile
          ? ""
          : "0 0 3.94rem 0 3.94rem",
      }}
    >
      <CommonProfileBar  title={'Overview'} showProfile={false} rejected={adminData?.rejected} application={adminData?.application} shortlisted={adminData?.shortlisted}/>
      { true ? <NonExisting/> : <CardContainerComponent style={{padding:responsive.isMobile?'1rem':'3.87rem',marginTop:0}} />}
    </div>
  );
};

export default DashBoardMail;
