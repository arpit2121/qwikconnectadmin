import React from "react";
import { Outlet } from "react-router-dom";
import CommonProfileBar from "./CommonProfileBar";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import StatsTopBar from "./StatsTopBar";
import useResponsiveStyles from "../../utils/MediaQuery";

const DashboardHome = () => {
  const responsive=useResponsiveStyles()
  return (
    <div style={{ height: "100%", width: "100%" }}>
       <CommonProfileBar />
      
      <Outlet />
    </div>
  );
};

export default DashboardHome;
