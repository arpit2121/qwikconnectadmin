import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import TestimonialCard from "../components/TestimonialCard";
import useResponsiveStyles from "../../../utils/MediaQuery";

const data = [1, 2, 3, 4, 5, 6];

const TestiMonials = ({ style={} }) => {
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
    // padding: "1rem 0.1rem",
  };

  const cardStyle = { minWidth: responsive.isMobile ? "90%" : "31%" };
  return (
    <div
      style={{
        background: `url(image1.jpg), url(image2.jpg), #FFF`,
        backgroundSize: "cover, cover",
        backgroundPosition: "top left, bottom right",
        // display: "flex",
        //   justifyContent: "center",
        //   flexDirection:'column'
      }}
    >
      <div
        style={{
          marginTop: "6.5rem",
          display: "flex",
          justifyContent: "center",
        //   padding: '4rem'
        }}
      >
        <CustomAllTypography name={"Testimonial"} variant={"h1"} />
      </div>
      <div style={{ marginTop: "2rem", ...style }}>
        <div
          id="card_container_div"
          style={responsive?.isMobile ? cardDivStyleMobile : cardDivStyle}
        >
          {data?.map((elem, index) => (
            <div key={index} style={cardStyle}>
              <TestimonialCard data={elem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestiMonials;
