import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import {
  CustomInputButton,
} from "../../components/button/CustomButoon";
import InboxIcon from "../../components/icons/InboxIcon";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../utils/MediaQuery";
import CardContainerComponent from "./CardContainerComponent";

const ExistingUser = () => {
  const responsvie = useResponsiveStyles();
  return (
    <div style={{ padding: "2rem" }}>
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
          sx={{padding:0}}
            variant="text"
            size="small"
            responsvie
            endIcon={<ArrowForwardIcon />}
          >
            View All
          </CustomInputButton>
        </div>
      </div>
      <CardContainerComponent />
    </div>
  );
};

export default ExistingUser;
