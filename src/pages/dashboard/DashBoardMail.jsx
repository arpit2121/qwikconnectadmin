import React from "react";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import CustomCardComponent, {
  CustomCard,
} from "../../components/card/CustomCard";
import useResponsiveStyles from "../../utils/MediaQuery";
import { useNavigate } from "react-router-dom";
import user from "../../assets/svg/user.svg";
import userplus from "../../assets/svg/userPlus.svg";
import rejected from "../../assets/svg/rejected.svg";
import JobCard from "./JobCard";
import StatsTopBar from "./StatsTopBar";

const DashBoardMail = () => {
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: !responsive.isMobile
          ? "0 2rem 0 2rem"
          : "0 0 3.94rem 0 3.94rem",
      }}
    >
      <div
        style={{
          marginTop: "4.06rem",
          display: responsive.isMobile ? "" : "flex",
          justifyContent: "space-between",
          padding: '0px 50px',
        }}
      >
        <CustomAllTypography name={"Overiview"} variant={"h3"} />

        <StatsTopBar />
      </div>
      <div style={{ marginTop: "4rem" }}>
        <JobCard />
      </div>
    </div>
  );
};

export default DashBoardMail;
