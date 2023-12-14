// import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import TestimonialCard from "../components/TestimonialCard";
import useResponsiveStyles from "../../../utils/MediaQuery";
import vector1 from '../../../assets/marketing/Vector3.svg'

const data = [1, 2, 3];

// eslint-disable-next-line react/prop-types
const TestiMonials = ({ style }) => {
  const responsive = useResponsiveStyles();

  const cardContainerStyle = {
    display: "grid",
    gridTemplateColumns: responsive.isMobile ? "1fr" : "repeat(auto-fill, minmax(360px, 1fr))",
    gap: "2rem",
    justifyContent: 'center',
    padding: "2rem", // Add padding for better spacing
    alignItem:'center'
  };


  const cardDivStyleMobile = {
    display: "flex",
    gap: "2rem",
    minWidth: "100%",
    overflowX: "scroll",
    padding: "1rem 0.1rem",
  };
  const cardStyle = { minWidth: "100%" };

  return (
    <div
      style={{
        // background: `url(image1.jpg), url(image2.jpg), #FFF`,
        backgroundSize: "cover, cover",
        backgroundPosition: "top left, bottom right",
        position:"relative",
        overflow: 'hidden'
      }}
      className="testimonials-container"
      id="testimonials"
    >
      <div
        style={{
          marginTop: "6.5rem",
          display: "flex",
          justifyContent: "center",
          position: 'relative'
          
        }}
      >
        <CustomAllTypography name={"Testimonial"} variant={"h1"} />
      </div>
      <div style={{ marginTop: "2rem", ...style }}>
        <div
          id="card_container_div"
          style={responsive.isMobile ? cardDivStyleMobile : cardContainerStyle}
        >
          {data?.map((elem, index) => (
            <div key={index} style={cardStyle}>
              <TestimonialCard data={elem} />
            </div>
          ))}
        </div>
        <div style={{ position: "absolute",zIndex:'-1', right: '-5%' , top: '5%' }}>
            <img
              src={vector1}
              alt="vector1"
              width={responsive.isMobile ? "50%" : "100%"}
            />
          </div>

          <div style={{ position: "absolute",zIndex:'-1', left: '-5%' , bottom: '-5%' }}>
            <img
              src={vector1}
              alt="vector1"
              width={responsive.isMobile ? "50%" : "100%"}
            />
          </div>
      </div>

    </div>
  );
};

export default TestiMonials;
