import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import CommonProfileBar from "./CommonProfileBar";
import ExistingUser from "./ExistingUser";
import NonExisting from "./NonExisting";
import { useGetAdminInfoQuery } from "../../services/admin";


const DashboardHome = () => {
  const {pathname}=useLocation()

  const {id} = useParams();

  console.log("id -->",id)
  const {
    data:adminData,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetAdminInfoQuery(id);



  console.log("adminn data --> ",adminData)

  return (
    <div style={{ height: "100%", width: "100%" }}>
       <CommonProfileBar />
       {/* <Outlet /> */}
       {true ? <ExistingUser/>  : <NonExisting/>}
    </div>
  );
};

export default DashboardHome;
