import React, { useEffect, useMemo, useState } from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CustomDropzone from "../../../components/dropzone/CustomDropzone";
import { useDispatch, useSelector } from "react-redux";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import { setBrandingColor } from "../../../slice/job.slice";

const JobPostingStepThree = () => {
  const responsive = useResponsiveStyles();

  const [uploadedFiles, setUploadedFiles] = useState(null);

  const branding = useSelector((state) => state.job.branding);

  const dispatch = useDispatch();

  const subscribed = false;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setBrandingColor({name, value}))
  };

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
          <CustomDropzone
            acceptedTypes={["image/*"]}
            name={"Upload csv file"}
            setUploadedFiles={setUploadedFiles}
            dispatch={dispatch}
          />
        </div>
        <div
          style={{
            marginTop: "2.69rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomAllTypography
            name={"Primary Brand Colour"}
            variant={"body1"}
          />
          <div style={{ width: "120px" }}>
            <CommonTextInput
              value={branding.colors.primary_brand_colour}
              title=""
              placeholder="color"
              name={"primary_brand_colour"}
              handleInputChange={handleInputChange}
              disabled = {subscribed}
            />
          </div>
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
          <div style={{ width: "120px" }}>
            <CommonTextInput
              value={branding.colors.secondary_brand_colour}
              title=""
              placeholder="color"
              name={"secondary_brand_colour"}
              handleInputChange={handleInputChange}
              disabled = {subscribed}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingStepThree;
