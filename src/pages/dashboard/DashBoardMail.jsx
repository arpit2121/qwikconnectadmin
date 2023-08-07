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
import CommonProfileBar from "./CommonProfileBar";

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
      <CommonProfileBar  title={'Overview'} showProfile={false} />
      <div style={{ marginTop: "4rem" }}>
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default DashBoardMail;
