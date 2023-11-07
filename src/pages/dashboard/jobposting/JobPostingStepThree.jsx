import React, { useEffect, useState } from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CustomDropzone from "../../../components/dropzone/CustomDropzone";


const JobPostingStepThree = () => {
  const responsive = useResponsiveStyles();

  const [uploadedFiles, setUploadedFiles] = useState();




  console.log("uploadedFiles",uploadedFiles)
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
          <CustomDropzone acceptedTypes={['image/*']} name={"Upload csv file"} setUploadedFiles={setUploadedFiles}/>
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
          <CustomAllTypography name={"#202020"} variant={"body1"} sx={{background:'var(--fields-form, #F7F7FD)', padding:'1rem 1.25rem', borderRadius:'1.125rem',border: '1px solid var(--fields-stroke-hover, #E8E6F8)'}}/>
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
          <CustomAllTypography name={"#505DEC"} variant={"body1"} sx={{background:'var(--fields-form, #F7F7FD)', padding:'1rem 1.25rem', borderRadius:'1.125rem',border: '1px solid var(--fields-stroke-hover, #E8E6F8)'}}/>
        </div>
      </div>
    </div>
  );
};

export default JobPostingStepThree;
