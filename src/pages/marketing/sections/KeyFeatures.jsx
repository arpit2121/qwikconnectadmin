import React, { useState, useEffect } from "react";
import useResponsiveStyles from "../../../utils/MediaQuery";
import poly from "../../../assets/polygonpng.png";
import polygon2 from "../../../assets/svg/polygon2.svg";
import "./keyfeature.css";
import VideoCall from '../../../assets/marketing/VideoKey.png';
import VideoImg from '../../../assets/marketing/VideoCall.png';
import RatingPara from '../../../assets/marketing/RatingPara.png';
import ReviewRating from '../../../assets/marketing/ReviewRating.png';
import QuestionCardImage from '../../../assets/marketing/QuestionCardImage.png';
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";




const KeyFeatures = () => {
  const responsive = useResponsiveStyles();
  const [showAnimation, setShowAnimation] = useState(true);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);


  const data = [
    {
      image: RatingPara,
      item1: "Key Features",
      item2: "Revolutionizing Recruitment",
      item3:
        "Say Goodbye to Scheduling Hassles and Find Your Perfect Candidate Instantly!",
    },
    {
      image: QuestionCardImage,
      item1: "Key Features",
      item2: "Accelerate Your Talent Search",
      item3:
        "Access a Vast Pool of Candidates, Find Your Ideal Match in No Time!",
    },
    {
      image: ReviewRating,
      item1: "Key Features",
      item2: "Collaborate and Make Better Decisions",
      item3: "Share Interview Recordings Seamlessly with Your Team of Peers!",
    },
    {
      image: VideoImg,
      item1: "Key Features",
      item2: "Exceptional Candidate Experience",
      item3: "Elevate Recruitment with Seamless and Positive Interactions!",
    },
  ];

  useEffect(() => {
    let interval;
    if (showAnimation) {
      interval = setInterval(() => {
        setCurrentItemIndex((prevIndex) =>
          prevIndex < data.length - 1 ? prevIndex + 1 : 0
        );
        // if (currentItemIndex === data.length - 1) {
        //   setShowAnimation(false);
        // }
      }, 2000); // Adjust the delay as needed
    }

    return () => {
      clearInterval(interval);
    };
  }, [showAnimation, data.length, currentItemIndex]);

  const handleSectionClick = () => {
    setCurrentItemIndex(1);
    // setShowAnimation(true);
  };

  return (
    <>
      <div
        style={{
          background: `url(${poly}),linear-gradient(180deg, #605DEC 0%, #A5F 100%)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: responsive.isMobile ? "4rem 2rem" : "6.5rem 5.12rem",
          display: "flex",
          alignItems: "center",
          flexDirection: responsive.isMobile ? "column" : "row",
          gap: '20px'
        }}
        className="keyfatures-container"
        name="keyfeatures"
      >
        <div
          style={{
            display: 'grid',
            gridColumn: '2',
            gap: "1rem",
            width: responsive.isMobile ? "100%" : "40%",
          }}
        >
          <CustomAllTypography variant="h3"textcolor = "#36BF76" name = {'Introducing'}>    
          </CustomAllTypography>
          <CustomAllTypography variant="h1" textcolor = "white" name= "QwikConnect Platform">
          </CustomAllTypography>
          <CustomAllTypography variant="body1" textcolor = "white" name= "Empowering Recruiters: Unlock Your Hiring Potential with Effortless Candidate Discovery" >
           
          </CustomAllTypography>
        </div>
        <div style={{ width: responsive.isMobile ? "100%" : "60%", marginLeft: 'auto' }}>
          <img src={VideoCall} width={'100%'} style={{ marginLeft: responsive.isMobile ? "0%" : "10%" }} alt="video-call" />
        </div>
      </div>

      <div
        style={{
          background: `url(${polygon2}),linear-gradient(180deg, #C0BEFF 0%, #E3C8FF 100%)`,
          padding: "1rem 0",
          alignItems: "center",
          backgroundSize: "cover",
        }}
        onClick={handleSectionClick}
      >
        {showAnimation === false && (
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: '20px',
              minHeight: responsive.isMobile ? '400px' : '600px',
              flexDirection: responsive.isMobile ? 'column' : 'row',
              opacity: 1,
              transition: "opacity 2s ease-in-out",
            }}
          >
            <div style={{ width: responsive.isMobile ? '100%' : '100%', display: "flex", justifyContent: "center", alignItems: 'center' }}>
              <img src={data[currentItemIndex].image} alt="item" style={{ maxWidth: '100%', height: 'auto', maxHeight: responsive.isMobile ? '400px' : "75vh" }} />
            </div>
            <div style={{ width: responsive.isMobile ? '90%' : '100%', display: "flex", flexDirection: "column", gap: "1.5rem", margin: 'auto' }}>
            <div style={{ width: '100%', maxWidth: '400px',display: "flex", flexDirection: "column", gap: "1rem", }}>
                <CustomAllTypography variant="h2" textcolor= "#CE1E25"  name={'Key Features'}>
                  
                </CustomAllTypography>
                <CustomAllTypography variant="h1" 
                name= {data[currentItemIndex].item2}
                ></CustomAllTypography>
                <CustomAllTypography variant="body1"
                name={data[currentItemIndex].item3}
                ></CustomAllTypography>
              </div>
            </div>
          </div>
        )}
        {showAnimation === true && (
          <div
            className={`animated-item ${
              showAnimation ? "item-animation" : "item-hidden"
            }`}
            style={{
              width: "100%",
              gap: '20px',
              display: "flex",
              minHeight: responsive.isMobile ? '400px' : '600px',
              flexDirection: responsive.isMobile ? 'column' : 'row',
              opacity: showAnimation ? 1 : 0,
              visibility: showAnimation ? "visible" : "hidden",
              transition: "opacity 2s ease-in-out",
            }}
          >
            <div style={{ width: responsive.isMobile ? '100%' : '100%', display: "flex", justifyContent: "center", alignItems: 'center' }}>
              <img src={data[currentItemIndex].image} alt="item" style={{ maxWidth: '100%', height: 'auto', maxHeight: responsive.isMobile ? '400px' : "75vh" }} />
            </div>
            <div style={{ width: responsive.isMobile ? '90%' : '100%',  margin: 'auto' }}>
            <div style={{ width: '100%', maxWidth: '400px',display: "flex", flexDirection: "column", gap: "1rem", }}>
                <CustomAllTypography variant="h2"textcolor= "#CE1E25" name={'Key Features'}  sx={{
                  opacity: showAnimation ? 1 : 0,
                  visibility: showAnimation ? "visible" : "hidden",
                  transition: "opacity 2s ease-in-out",
                }}>
                  
                </CustomAllTypography>
                <CustomAllTypography variant="h1" sx={{
                  opacity: showAnimation ? 1 : 0,
                  visibility: showAnimation ? "visible" : "hidden",
                  transition: "opacity 2s ease-in-out",
                }}
                name= {data[currentItemIndex].item2}
                ></CustomAllTypography>
                <CustomAllTypography variant="body1" sx={{
                  opacity: showAnimation ? 1 : 0,
                  visibility: showAnimation ? "visible" : "hidden",
                  transition: "opacity 2s ease-in-out",
                }}
                name={data[currentItemIndex].item3}
                ></CustomAllTypography>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default KeyFeatures;
