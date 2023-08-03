import React from "react";
import CustomContainer from "../CustomContainer";
import Navbar from "../admin/Navbar";
import Sidebar from "../admin/Sidebar";
import useResponsiveStyles from "../../../utils/MediaQuery";
import DashboardHome from "../../../pages/dashboard/DashboardHome";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const responsive = useResponsiveStyles();
  return (
    <CustomContainer>
      <div
        style={{
          height: "100%",
          width: "100vw",
          display: "flex",
          maxHeight: "862px",
          backgroundColor: "",
          // position:'fixed',//changes-1,
          // top:0
        }}
      >
        <div style={{ height: "100%", width: "100%", position:'sticky',
              top:0 }}>
          <div
            style={{
              height: "10%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 1rem 0 1rem",
              boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.5)",
              position:'sticky',
              top:0,
              backgroundColor:'#fff'
            }}
          >
            <Navbar />
          </div>
          <div style={{ height: "90%", display: "flex" }}>
            {!responsive.isMobile ? (
              <div
                style={{
                  height: "90%",
                  width: "8%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Sidebar />
              </div>
            ) : (
              ""
            )}
            <div style={{ backgroundColor: "", width: "100%" }}>
              {/* <DashboardHome /> */}
              <Outlet/>
            </div>
          </div>
        </div>
        </div>
    </CustomContainer>
  );
};

export default Dashboard;
