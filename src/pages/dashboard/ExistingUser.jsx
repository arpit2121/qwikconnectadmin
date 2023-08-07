import React from "react";
import { FiInbox } from "react-icons/fi";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useResponsiveStyles from "../../utils/MediaQuery";
import { CustomCard } from "../../components/card/CustomCard";
import CustomButton, {
  CustomInputButton,
} from "../../components/button/CustomButoon";
import InboxIcon from "../../components/icons/InboxIcon";
import TrashIcon from "../../components/icons/TrashIcon";
import JobCard from "./JobCard";

const ExistingUser = () => {
  const responsvie = useResponsiveStyles();

  const cardDivStyle={display:'flex',gap:'2rem',padding:'1rem',flexWrap:'wrap'}
  const cardDivStyleMobile={display:'flex',gap:'2rem',minWidth:'100%' ,overflowX:'scroll',padding:'1rem'}
  const cardStyle={minWidth:responsvie.isMobile?'90%':'31%'}
  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          display: !responsvie.isMobile ? "flex" : "",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <InboxIcon />
          <CustomAllTypography name={"Recent Job Postings"} variant={"h4"} />
        </div>
        <div>
          {/* <CustomInputButton variant='text' size='small' responsive component={Link} to="/jobposting/basicDaetails" endIcon={<ArrowForwardIcon />}/> */}
          <CustomInputButton
            variant="text"
            size="small"
            responsvie
            endIcon={<ArrowForwardIcon />}
          >
            View All
          </CustomInputButton>
        </div>
      </div>
      <div style={responsvie?.isMobile?cardDivStyleMobile:cardDivStyle}>

  
     <div style={cardStyle}>
      <JobCard/>
      </div> 
     <div style={cardStyle}>
      <JobCard/>
      </div> 
     <div style={cardStyle}>
      <JobCard/>
      </div> 
     <div style={cardStyle}>
      <JobCard/>
      </div> 
     <div style={cardStyle}>
      <JobCard/>
      </div> 
  
    
      </div>
    </div>
  );
};

export default ExistingUser;
