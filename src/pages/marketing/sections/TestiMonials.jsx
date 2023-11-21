import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import TestimonialCard from "../components/TestimonialCard";
import useResponsiveStyles from "../../../utils/MediaQuery";
import vector1 from '../../../assets/marketing/Vector3.svg'


const data = [1, 2, 3, 4, 5, 6];

const TestiMonials = ({ style={} }) => {
  const responsive = useResponsiveStyles();

  const cardDivStyle = {
    display: "flex",
    gap: "2rem",
    // padding: responsive.isMobile?''
    flexWrap: "wrap",
    justifyContent:'center',
    // backgroundColor:'red'
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
      id="testimonials"
      className="testimonials"
    >
      <div
        style={{
          marginTop: "6.5rem",
          display: "flex",
          justifyContent: "center",
          // backgroundColor:'green'
        }}
      >
        <CustomAllTypography name={"Testimonial"} variant={"h1"} />
      </div>
      <div style={{ marginTop: "2rem", ...style, }}>
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
      {/* <div style={{ position: "absolute", left: "-5rem", bottom: "-115rem",backgroundColor:'red',zIndex:'-1' }}>
            <img
              src={vector1}
              alt="vector1"
              width={responsive.isMobile ? "50%" : "100%"}
            />
          </div> */}
    </div>
  );
};

export default TestiMonials;
