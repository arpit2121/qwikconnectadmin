import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommonProfileBar from "./CommonProfileBar";
import ExistingUser from "./ExistingUser";
import NonExisting from "./NonExisting";
import { useGetAdminInfoQuery } from "../../services/admin";
import { useDispatch, useSelector } from "react-redux";
import { setApiLoadere } from "../../slice/common.slice";
import { useGetActiveJobPostQuery } from "../../services/job";

const DashboardHome = () => {
  const dispatch = useDispatch();

  const adminId = useSelector((state) => state.auth.adminId);

  const { data: adminData, isLoading } = useGetAdminInfoQuery(adminId);

  const { data: activeJobPost } = useGetActiveJobPostQuery(adminId);

  if (isLoading) {
    dispatch(setApiLoadere(true));
  } else {
    dispatch(setApiLoadere(false));
  }


  return (
    <div style={{ height: "100%", width: "100%" }}>
      <CommonProfileBar
        application={adminData?.IntervieweeData?.pending}
        shortlisted={adminData?.IntervieweeData?.shortlisted}
        userName={adminData?.admin?.fullName}
      />
      {/* <Outlet /> */}
      {activeJobPost?.length === 0 ? (
        <NonExisting />
      ) : (
        <ExistingUser data={activeJobPost} />
      )}
    </div>
  );
};

export default DashboardHome;
