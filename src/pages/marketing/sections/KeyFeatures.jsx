import React from "react";
import poylgon1 from "../../../assets/svg/ploygon1.svg";
import VideoComponent from "../components/VideoComponent";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import polygon2 from "../../../assets/svg/polygon2.svg";
import poly from '../../../assets/polygonpng.png'

const KeyFeatures = () => {
  const responsive = useResponsiveStyles();
  return (
    <>
      <div
        style={{
          background: `url(${poly}),linear-gradient(180deg, #605DEC 0%, #A5F 100%)`,
          backgroundSize: "cover", // Adjust as needed
          backgroundRepeat: 'no-repeat',
          padding: "6.5rem 5.12rem",
          display: responsive.isMobile ? "" : "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <CustomAllTypography
            name={"Introducing"}
            variant={"h3"}
            textcolor={"#36BF76"}
          />
          <CustomAllTypography name={"QwikConnect Platform"} variant={"h1"} />
          <CustomAllTypography
            name={
              "Empowering Recruiters: Unlock Your Hiring Potential with Effortless Candidate Discovery."
            }
            variant={"body1"}
          />
        </div>
        {/* <div style={{}}> */}
          {/* <VideoComponent /> */}
        {/* </div> */}
      </div>
      <div
        style={{
          background: `url(${polygon2}),linear-gradient(180deg, #C0BEFF 0%, #E3C8FF 100%)`,
          padding: "6.5rem 5.12rem",
          display: responsive.isMobile ? "" : "flex",
          alignItems: "center",
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <CustomAllTypography
            name={"Key Features"}
            variant={"h3"}
            textcolor={"#CE1E25"}
          />
          <CustomAllTypography
            name={"Revolutionizing Recruitment"}
            variant={"h1"}
          />
          <CustomAllTypography
            name={
              "Say Goodbye to Scheduling Hassles and Find Your Perfect Candidate Instantly!"
            }
            variant={"body1"}
          />
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
