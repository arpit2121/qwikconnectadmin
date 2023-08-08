import React from "react";
import JobCard from "./JobCard";
import useResponsiveStyles from "../../utils/MediaQuery";

const CardContainerComponent = ({ cards = [1, 2, 3, 4, 5] }) => {
  const responsive = useResponsiveStyles();
  const cardDivStyle = {
    display: "flex",
    gap: "2rem",
    padding: "1rem",
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
    <div id="card_container_div" style={responsive?.isMobile ? cardDivStyleMobile : cardDivStyle}>
      {cards?.map((elem, index) => (
        <div key={index} style={cardStyle}>
          <JobCard />
        </div>
      ))}
    </div>
  );
};

export default CardContainerComponent;
