import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import VideoImage from "../../../assets/videoImage.png";


const VideoComponent = () => {
  return (
    <div
      style={{
        boxShadow: "0px 16px 24px 0px rgba(142, 141, 208, 0.12)",
        background: "#fff",
        borderRadius: "1.25rem",
        padding: "1.5rem",
        // maxWidth: "43.5rem", // Set a maximum width
        // width: "100%", // Take full width of the container
        boxSizing: "border-box", // Ensure padding and border are included in the width
      }}
    >
      <div>
        <CustomAllTypography
          name={"Q1. Explain what continuous integration is?"}
          variant={"body2"}
        />
      </div>
      <div
        style={{
          borderRadius: "1rem",
          background: `url(${VideoImage}), lightgray -29.64px -48.602px / 101.875% 136.248% no-repeat`,
          paddingBottom: "56.25%", // Maintain aspect ratio for responsive height
          position: "relative",
        }}
      >
        
      </div>
    </div>
  );
};

export default VideoComponent;
