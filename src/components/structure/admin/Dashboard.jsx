import React, { useState } from "react";
import CustomContainer from "../CustomContainer";
import Navbar from "../admin/Navbar";
import Sidebar from "../admin/Sidebar";
import useResponsiveStyles from "../../../utils/MediaQuery";
import { Outlet } from "react-router-dom";
import styled, {keyframes} from "styled-components";

// transform: translateX(-100%);
const slideInFromRight = keyframes`
  0% {
    transform: translateX(900%);
  }
  100% {
    transform: translateX(0);
  }
`;

// Create a styled component using the defined keyframes animation
const AnimatedSidebar = styled.div`
  position: absolute;
  top: 100px;
  right: -20px;
  animation: ${slideInFromRight} 1.5s ease-in-out;
`;

// left: -50px

const SidebarWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateX(-100%);
  animation: ${(props) => (props.visible ? slideInFromLeft : 'none')} 0.5s ease-in-out;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const SidebarContent = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
  width: 300px;
`;

const Dashboard = () => {
  const responsive = useResponsiveStyles();
  const [sidebar, setSideBar] = useState(false);
  const handleClick = () => {
    // console.log("hii2");
    setSideBar(!sidebar)
  };
  return (
    <CustomContainer>
      <div
        style={{
          height: "100%",
          width: "100vw",
          display: "flex",
          maxHeight: "862px",
        }}
      >
        <div
          style={{ height: "100%", width: "100%", position: "sticky", top: 0 }}
        >
          <div
            style={{
              height: "10%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 1rem 0 1rem",
              boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.5)",
              position: "sticky",
              top: 0,
              backgroundColor: "#fff",
            }}
          >
            <Navbar onClick={handleClick} />
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
            ) : 
            (

              // sidebar ? <div sx={{}}><Sidebar/></div> : ""
            <div style={{ position: 'fixed', width: "50px",top: 50 }}>
            {sidebar ? 
            <div style={{ position: 'relative' }}>
            {sidebar ? <AnimatedSidebar><Sidebar /></AnimatedSidebar> : null}
            </div>
            : (
            ""
            )
      }
    </div>

            )}
            <div style={{ backgroundColor: "", width: "100%" }}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default Dashboard;







{/* <>
      {visible && <Backdrop onClick={onClose} />}
      <SidebarWrapper visible={visible}>
        <SidebarContent>
          {/* Sidebar content and functionality here */}
    //       <button onClick={onClose}>Close Sidebar</button>
    //     </SidebarContent>
    //   </SidebarWrapper>
    // </> */}