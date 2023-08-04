import React, { useState } from "react";
import InboxIcon from "../../icons/InboxIcon";
import HomeIcon from "../../icons/HomeIcon";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import SettingsIcon from "../../icons/SettingsIcon";
import SearchIcon from "../../icons/SearchIcon";

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
  iconDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    width: "2.375rem",
    height: "2.375rem",

  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "30%",
  },
  dot: {
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "50%",
    background: "#3D3ACE",
    marginTop: "0.25rem",
    opacity: 0,
    transition: "opacity 800ms",
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
  const gradient =
    "radial-gradient(circle, rgba(230,129,255,1) 0%, rgba(61,58,206,1) 100%)";
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.container2}>
        <div className={classes.iconContainer}>
          <div
            onClick={() => {
              setActiveTab(1);
              navigate("/dashboard/home/existinguser");
            }}
            style={{ background: activeTab === 1 ? gradient : "none" }}
            className={classes.iconDiv}
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
        <div className={classes.iconContainer}>
          <div
            onClick={() => {
              setActiveTab(2);
              navigate("/dashboard/home/existinguser");
            }}
            style={{ background: activeTab === 2 ? gradient : "none" }}
            className={classes.iconDiv}
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
      </div>
      <div className={classes.container2}>
        <div className={classes.iconContainer}>
          <div
            onClick={() => {
              setActiveTab(3);
              navigate("/dashboard/home/existinguser");
            }}
            style={{ background: activeTab === 3 ? gradient : "none" }}
            className={classes.iconDiv}
          >
            <SettingsIcon color={activeTab == 3 ? "white" : "#25282B"} />
          </div>{" "}
          {
            <div
              style={{ opacity: activeTab == 3 ? 1 : 0 }}
              className={classes.dot}
            ></div>
          }
        </div>
        <div className={classes.iconDiv}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
