import React from "react";
import { CustomCard } from "../../components/card/CustomCard";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import TrashIcon from "../../components/icons/TrashIcon";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Body3 } from "../../components/typography/Fields";
import { formatTimeDifference } from "../../utils/utilsFunctions";

const useStyles = makeStyles({
  card: {
    "&:hover": {
      background: "linear-gradient(180deg, rgba(96, 93, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #FFF",
      "& .trash-icon": {
        visibility: "visible",
        // backgroundColor:'red'
      },
    },
    "& .trash-icon": {
      position:'relative',
      // backgroundColor: "blue", // Apply a different background color when not hovered
      visibility: "hidden", // You can also control the default display here if needed
    },
  },
  // trashIcon: {
  //   display: "none",
  //   position: "absolute",
  //   top: "0.5rem",
  //   right: "0.5rem",
  //   cursor: "pointer",
  //   zIndex: 1,
  //   "&:hover": {
  //     display: "block",
  //   }
  // },
});
const JobCard = ({data}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () =>{
    //  navigate("/jobpostingdetailspage")
     navigate(`/jobpostingdetailspage/${data._id}`)
  }
  const hadelDeleteClick = () => {
    console.log("delete an job post and all related data to this job post with cron job");
  }

  return (
    <CustomCard
      className={classes.card}
      sx={{
        maxWidth: "23.65rem",
        padding: "1rem",
        borderRadius: "1.25rem",
        border: "1px solid transparent",
        boxShadow: "0px 8px 16px 0px rgba(142, 141, 208, 0.12)",
        
      }}
      onClick={handleClick}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Body3  color="#8A8894">
          {formatTimeDifference(data.publishAt)+" ago"}
        </Body3>
      </div>
      <div style={{ marginTop: "1.26rem" }}>
        <CustomAllTypography name={data.jobTitle} variant={"h4"} />
      </div>
      <div style={{ marginTop: "0.75rem" }}>
        <CustomAllTypography name={data.hiringLocation} variant={"body2"} />
      </div>
      <div style={{ marginTop: "0.75rem" }}>
        <CustomAllTypography name={`Exp.: ${data.requiredExperience}`} variant={"body2"} />
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
          name={`${data?.rejected+data?.pending+data?.shortlisted} Applied • ${data?.shortlisted} Shortlisted • ${data?.rejected + data?.shortlisted} Closed`}
          variant={"body2"}
          color={"#36BF76"}
          textcolor={"#36BF76"}
        />
         <TrashIcon className={"trash-icon"} hadelDeleteClick={hadelDeleteClick}/> 
      </div>
    </CustomCard>
  );
};

export default JobCard;
