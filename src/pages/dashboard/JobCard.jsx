import React from "react";
import { CustomCard } from "../../components/card/CustomCard";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import TrashIcon from "../../components/icons/TrashIcon";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Body3 } from "../../components/typography/Fields";

const useStyles = makeStyles({
  card: {
    "&:hover": {
      // border: "1px solid #605DEC",
      boxShadow:
        " 1px 2px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 8px #605DEC",
      // background:
      //   "radial-gradient(circle, rgba(230,129,255,0.1) 0%, rgba(61,58,206,0.1) 100%)",
    },
  },
});
const JobCard = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <CustomCard
      className={classes.card}
      sx={{
        maxWidth: "23.65rem",
        padding: "1rem",
        borderRadius: "1.25rem",
        border: "1px solid transparent",
        boxShadow: "0px 8px 16px 0px rgba(142, 141, 208, 0.12)"
      }}
      onClick={() => navigate("/jobpostingdetailspage")}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Body3  color="#8A8894">1d ago</Body3>
      </div>
      <div style={{ marginTop: "1.26rem" }}>
        <CustomAllTypography name={"UI/UX Developer / Lead"} variant={"h4"} />
      </div>
      <div style={{ marginTop: "0.75rem" }}>
        <CustomAllTypography name={"Office: Remote"} variant={"body2"} />
      </div>
      <div style={{ marginTop: "0.75rem" }}>
        <CustomAllTypography name={"Exp.: 12 to 16 year"} variant={"body2"} />
      </div>
      <div
        style={{
          marginTop: "1.95rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CustomAllTypography
          name={"24 Applied • 2 Shortlisted • 1 Closed"}
          variant={"body2"}
          color={"#36BF76"}
          textcolor={"#36BF76"}
        />
        <TrashIcon />
      </div>
    </CustomCard>
  );
};

export default JobCard;
