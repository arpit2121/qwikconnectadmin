import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CustomDropzone from "../../../components/dropzone/CustomDropzone";


const JobPostingStepThree = () => {
  const responsive = useResponsiveStyles();
  return (
    <div style={{ padding: responsive.isMobile ? "0 1rem" : "" }}>
      <div style={{ backgroundColor: "", marginTop: "4rem" }}>
        <CustomAllTypography name={"Branding"} variant={"h2"} />
        <div style={{ marginTop: "0.75rem" }}>
          <CustomAllTypography
            name={"This Feature will be Active only for the paid users"}
            variant={"body2"}
          />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <CustomDropzone />
        </div>
        <div
          style={{
            marginTop: "2.69rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CustomAllTypography
            name={"Primary Brand Colour"}
            variant={"body1"}
          />
          <CustomAllTypography name={"color"} variant={"body1"} />
        </div>
        <div
          style={{
            marginTop: "1.69rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CustomAllTypography
            name={"Secondary Brand Colour"}
            variant={"body1"}
          />
          <CustomAllTypography name={"color"} variant={"body1"}/>
        </div>
      </div>
    </div>
  );
};

export default JobPostingStepThree;
