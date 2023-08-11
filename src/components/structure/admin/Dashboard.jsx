import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CustomContainer from "../CustomContainer";
import Navbar from "../admin/Navbar";
import Sidebar from "../admin/Sidebar";

const Dashboard = () => {
  const responsive = useResponsiveStyles();
  const {pathname}=useLocation()
  const navigate = useNavigate();
  console.log(pathname)
  useEffect(() => {
    if (pathname == "/dashboard/home" || "/dashboard") {
      navigate("/dashboard/home/existinguser");
    }
  }, []);
  return (
    <CustomContainer>
      <div
        style={{
          height: "100%",
          width: "100vw",
          display: "flex",
          flexDirection: responsive.isMobile ? "column" : "row",
          maxHeight: "862px",
        }}
      >
        <div
          style={{ height: "100%", width: "100%", position: "sticky", top: 0 }}
        >
    
            <Navbar  showStatsBar={false}/>
          <div style={{ height: "90%", display: "flex" }}>
            {!responsive.isMobile && (
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
            )}
            <div style={{ backgroundColor: "", width: "100%" }}>
              <Outlet />
            </div>
          </div>
        </div>

        {responsive.isMobile && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0rem 1rem",
              marginBottom: "1rem",
              position:'sticky',
              bottom:'0px'
            }}
          >
            <Sidebar />
          </div>
        )}
      </div>
    </CustomContainer>
  );
};

export default Dashboard;
