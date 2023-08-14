import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import editicon from "../../../assets/svg/edit.svg";
import RichTextEditor from "../../../components/textfield/RichTextEditor";
import CustomizedTextField from "../../../components/textfield/CustomizedTextField";
import CommonTextInput from "../../../components/textfield/CommonTextInput";

const JobPostingStepFourB = () => {
  return (
    <div style={{ marginTop: "4rem", padding: "0 1rem 0 1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CustomAllTypography name={"Enter Job Title here"} variant={"h2"} />
        <img src={editicon} alt="edit" />
      </div>
      <div style={{ marginTop: "2.19rem" }}>
        <CustomAllTypography name={"Job Description"} variant={"body2"} />
      </div>
      <div>
        <RichTextEditor />
        <div style={{ marginTop: "2.63rem" }}>
          <CommonTextInput 
          title="Hiring Office location"
          />
        </div>
        <div style={{ marginTop: "2.63rem" }}>
          {" "}
          <CommonTextInput
            style={{ margin: "1.5rem 0rem" }}
            type="dropdown"
            placeholder="Your Profession"
          />
        </div>
      </div>
    </div>
  );
};

export default JobPostingStepFourB;
