import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CommonProfileBar from "./CommonProfileBar";


const DashboardHome = () => {
  const {pathname}=useLocation()
  console.log(pathname)
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname == "/dashboard/home" || "/dashboard") {
      navigate("/dashboard/home/existinguser");
    }
  }, []);
  return (
    <div style={{ height: "100%", width: "100%" }}>
       <CommonProfileBar />
      <Outlet />
    </div>
  );
};

export default DashboardHome;
