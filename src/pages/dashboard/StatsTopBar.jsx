import React from "react";
import useResponsiveStyles from "../../utils/MediaQuery";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import UserPlusIcon from "../../components/icons/UserplusIcon";
import UserIcon from "../../components/icons/UserIcon";

const StatsTopBar = ({ application = 23, shortlisted = 2, rejected = 3 }) => {
  const responsive = useResponsiveStyles();
  const iconMap = [
    {
      icon: <UserIcon style={{ marginRight: "0.9rem" }} />,
      count: application,
      title: "Application",
    },
    {
      icon: <UserPlusIcon style={{ marginRight: "0.9rem" }} />,
      count: shortlisted,
      title: "Shortlisted",
    },
    {
      icon: <UserPlusIcon style={{ marginRight: "0.9rem" }} />,
      count: rejected,
      title: "Rejected",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: !responsive.isMobile ? "row" : "column",
        gap: !responsive.isMobile ? "2rem" : "0.5rem",
        justifyContent: "space-between",
        alignItems: !responsive.isMobile ? "center" : "flex-start",
        paddingTop: !responsive.isMobile ? "" : "2rem",
      }}
    >
      {iconMap?.map((elem, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: !responsive.isMobile ? "space-around" : "center",
          }}
        >
          <div>{elem?.icon}</div>
          <CustomAllTypography
            sx={{ marginRight: "0.94rem" }}
            name={elem?.count}
            variant={"h4"}
          />
          <CustomAllTypography name={elem?.title} variant={"body1"} />
        </div>
      ))}
    </div>
  );
};

export default StatsTopBar;
