import React from "react";
import { Outlet } from "react-router-dom";
import CommonProfileBar from "./CommonProfileBar";

const DashboardHome = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <CommonProfileBar />
      <Outlet />
    </div>
  );
};

export default DashboardHome;
