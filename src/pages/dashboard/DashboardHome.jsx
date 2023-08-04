import React from "react";
import users from "../../assets/svg/user.svg";
import userPlus from "../../assets/svg/userPlus.svg";
import user1 from "../../assets/svg/user1.svg";
import UsersComponent from "../../components/admin/UsersComponent";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../utils/MediaQuery";
import NonExisting from "./NonExisting";
import ExistingUser from "./ExistingUser";
import { Outlet } from "react-router-dom";
import UserIcon from "../../components/icons/UserIcon";
import UserPlusIcon from "../../components/icons/UserplusIcon";
import StatsTopBar from "./StatsTopBar";

const DashboardHome = () => {
  const responsive = useResponsiveStyles();
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          padding: "50px",
          display: !responsive.isMobile ? "flex" : "",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: !responsive.isMobile ? "flex" : "",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <UsersComponent image={user1} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: responsive.isMobile ? "center" : "flex-start",
              marginTop: responsive.isMobile ? 5 : 0,
            }}
          >
            <CustomAllTypography
              name={"Good Morning, Vaibhav"}
              variant={"h3"}
            />
            <CustomAllTypography
              name={"Ready to hunt your next candidate? "}
              variant={"body2"}
            />
          </div>
        </div>
        <StatsTopBar />
      </div>
      {/* <NonExisting/> */}
      {/* <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}> */}
      {/* <ExistingUser/> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};

export default DashboardHome;
