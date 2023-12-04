import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { CustomInputButton } from "../../components/button/CustomButoon";
import InboxIcon from "../../components/icons/InboxIcon";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../utils/MediaQuery";
import CardContainerComponent from "./CardContainerComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedJobPostingPage } from "../../slice/common.slice";

const ExistingUser = ({data}) => {
  const responsvie = useResponsiveStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div style={{ padding: responsvie.isMobile ? "1rem" : "3.87rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <InboxIcon />
          <CustomAllTypography name={"Recent Job Postings"} variant={"h4"} />
        </div>
        <div>
          <CustomInputButton
            sx={{ borderRadius: 0 }}
            variant="text"
            size="medium"
            responsvie
            endIcon={<ArrowForwardIcon />}
            onClick={() => {
              navigate("/dashboard/myJobPost");
              dispatch(setSelectedJobPostingPage(2));
            }}
          >
            View All
          </CustomInputButton>
        </div>
      </div>
      {data ? <CardContainerComponent data={data}/> : ''}
    </div>
  );
};

export default ExistingUser;
