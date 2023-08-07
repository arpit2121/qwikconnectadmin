import React from "react";
import useResponsiveStyles from "../../utils/MediaQuery";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import UserPlusIcon from "../../components/icons/UserplusIcon";
import UserIcon from "../../components/icons/UserIcon";
import RejectedIcon from "../../components/icons/RejectedIcon";
import { darkspacetheme } from "../../theme/theme";

const StatsTopBar = ({ application = 23, shortlisted = 2, rejected = 3 }) => {
  const responsive = useResponsiveStyles();
  const size = responsive.isMobile ? 24 : 32;
  const iconMap = [
    {
      icon: (
        <UserIcon
          height={size}
          width={size}
          style={{ marginRight: "0.9rem" }}
        />
      ),
      count: application,
      title: "Application",
    },
    {
      icon: (
        <UserPlusIcon
          height={size}
          width={size}
          style={{ marginRight: "0.9rem" }}
        />
      ),
      count: shortlisted,
      title: "Shortlisted",
    },
    {
      icon: (
        <RejectedIcon
          height={size}
          width={size}
          style={{ marginRight: "0.9rem" }}
        />
      ),
      count: rejected,
      title: "Rejected",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        gap: !responsive.isMobile ? "2rem" : "0.5rem",
        justifyContent: "space-between",
        alignItems: "center",
        padding: responsive.isMobile ? "1rem 1.5rem" : '0rem',
        background:responsive.isMobile?darkspacetheme.colorPallete.aliceBlue:'none',
        borderRadius:responsive.isMobile ? "1.25rem" : '0rem',

      }}
    >
      {iconMap?.map((elem, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: !responsive.isMobile ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>{elem?.icon}</div>
            <CustomAllTypography
              sx={{
                fontSize: responsive.isMobile
                  ? "1.5rem !important"
                  : "2rem !important",
                marginRight: responsive.isMobile ? 0 : "0.94rem",
              }}
              name={elem?.count}
              variant={responsive.isMobile ? "h4" : "h1"}
            />
          </div>
          <CustomAllTypography name={elem?.title} variant={"body1"} />
        </div>
      ))}
    </div>
  );
};

export default StatsTopBar;
