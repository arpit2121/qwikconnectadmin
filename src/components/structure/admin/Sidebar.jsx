import React, { useState } from "react";
import InboxIcon from "../../icons/InboxIcon";
import HomeIcon from "../../icons/HomeIcon";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import SettingsIcon from "../../icons/SettingsIcon";
import SearchIcon from "../../icons/SearchIcon";
import SettingMenu from "./SettingMenu";
import UsersComponent from "../../admin/UsersComponent";
import user1 from "../../../assets/svg/user1.svg";
import useResponsiveStyles from "../../../utils/MediaQuery";

const useStyles = makeStyles({
  main: {
    height: "70%",
    width: "80%",
    backgroundColor: "#ECF3FF",
    borderTopRightRadius: "4rem",
    borderTopLeftRadius: "4rem",
    borderBottomLeftRadius: "4rem",
    borderBottomRightRadius: "4rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  main2: {
    width: "100%",
    height: "max-content",
    backgroundColor: "#ECF3FF",
    borderTopRightRadius: "4rem",
    borderTopLeftRadius: "4rem",
    borderBottomLeftRadius: "4rem",
    borderBottomRightRadius: "4rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.3rem 1.6rem",
  },
  iconDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    width: "2.375rem",
    height: "2.375rem",
  },
  iconDivActive: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    width: "2.375rem",
    height: "2.375rem",
    boxShadow:
      " 1px 2px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 8px rgba(230, 129, 255, 0.5)",
    background:
      "radial-gradient(circle, rgba(230,129,255,1) 0%, rgba(61,58,206,1) 100%)",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "30%",
  },
  dot: {
    width: (props) => (props?.responsive.isMobile ? "0.2rem" : "0.5rem"),
    height: (props) => (props?.responsive.isMobile ? "0.2rem" : "0.5rem"),
    borderRadius: "50%",
    background: "#3D3ACE",
    marginTop: "0.25rem",
    opacity: 0,
    transition: "opacity 1500ms",
  },
  container2: {
    minHeight: "35%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [openSettings, setOpenSettings] = useState(false);
  const responsive = useResponsiveStyles();
  const classes = useStyles({ responsive });

  const direction = { flexDirection: responsive.isMobile ? "row" : "column" };
  return (
    <div className={responsive.isMobile ? classes.main2 : classes.main}>
      <div className={classes.container2} style={direction}>
        <div className={classes.iconContainer}>
          <div
            onClick={() => {
              setActiveTab(1);
              navigate("/dashboard/home/existinguser");
            }}
            className={
              activeTab === 1 ? classes.iconDivActive : classes.iconDiv
            }
          >
            <HomeIcon
              color={activeTab == 1 ? "white" : "#25282B"}
              onClick={() => navigate("/dashboard/home/existinguser")}
            />
          </div>
          {
            <div
              style={{ opacity: activeTab == 1 ? 1 : 0 }}
              className={classes.dot}
            ></div>
          }
        </div>
        {!responsive.isMobile && (
          <div className={classes.iconContainer}>
            <div
              onClick={() => {
                setActiveTab(2);
                navigate("/dashboard/myJobPost");
              }}
              className={
                activeTab === 2 ? classes.iconDivActive : classes.iconDiv
              }
            >
              <InboxIcon color={activeTab == 2 ? "white" : "#25282B"} />
            </div>
            {
              <div
                style={{ opacity: activeTab == 2 ? 1 : 0 }}
                className={classes.dot}
              ></div>
            }
          </div>
        )}
      </div>
      {responsive.isMobile && (
        <div className={classes.iconContainer}>
          <div
            onClick={() => {
              setActiveTab(2);
              navigate("/dashboard/myJobPost");
            }}
            className={
              activeTab === 2 ? classes.iconDivActive : classes.iconDiv
            }
          >
            <InboxIcon color={activeTab == 2 ? "white" : "#25282B"} />
          </div>
          {
            <div
              style={{ opacity: activeTab == 2 ? 1 : 0 }}
              className={classes.dot}
            ></div>
          }
        </div>
      )}
      <div className={classes.container2} style={direction}>
        {!responsive.isMobile && (
          <div className={classes.iconContainer}>
            <div
              onClick={(e) => {
                // setOpenSettings(e.target);
                setActiveTab(3);
              }}
              className={
                activeTab === 3 ? classes.iconDivActive : classes.iconDiv
              }
            >
              <SettingsIcon color={activeTab == 3 ? "white" : "#25282B"} />
            </div>
            {/* <SettingMenu open={openSettings} setOpen={setOpenSettings} /> */}
            <div
              style={{ opacity: activeTab == 3 ? 1 : 0 }}
              className={classes.dot}
            ></div>
          </div>
        )}
        <div className={classes.iconDiv}>
          <div
            onClick={(e) => {
              setOpenSettings(e.target);
              setActiveTab(4);
            }}
            className={classes.iconDiv}
            style={{ background: activeTab == 4 ? "#E5E0FF" : "none" }}
          >
            <UsersComponent style={{ height: "2.3rem" }} image={user1}/>
          </div>
          <SettingMenu open={openSettings} setOpen={setOpenSettings} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
