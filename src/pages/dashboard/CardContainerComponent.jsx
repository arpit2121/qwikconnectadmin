import React from "react";
import JobCard from "./JobCard";
import useResponsiveStyles from "../../utils/MediaQuery";

const CardContainerComponent = ({ data,style={} }) => {
  const responsive = useResponsiveStyles();


  const cardDivStyle = {
    display: "flex",
    gap: "2rem",
    // padding: responsive.isMobile?''
    flexWrap: "wrap",
  };


  const cardDivStyleMobile = {
    display: "flex",
    gap: "2rem",
    minWidth: "100%",
    overflowX: "scroll",
    padding: "1rem 0.1rem",
  };

  
  const cardStyle = { minWidth: responsive.isMobile ? "90%" : "31%" };
  return (
    <div style={{marginTop:'2rem',...style}}>
      <div id="card_container_div" style={responsive?.isMobile ? cardDivStyleMobile : cardDivStyle}>
      {
        data
        ?
        data?.map((elem, index) => (
          <div key={index} style={cardStyle}>
            <JobCard data={elem}/>
          </div>
        ))
        :
        ""
      }
    </div>
    </div>
  );
};

export default CardContainerComponent;
