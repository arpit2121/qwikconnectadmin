import React, { useState } from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import Review from "../../../components/structure/admin/Review";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CommonTextArea from "../../../components/textfield/CommonTextArea";

const CommentSection = () => {
    const [comment,setComment]=useState()
  const responsive = useResponsiveStyles();
  return (
    <div style={{ padding: responsive.isMobile ? "2rem 1rem" : "0rem" }}>
      <div>
        <CustomAllTypography name={"Comments"} variant={"body2"} />
      </div>
      <div style={{ marginTop: "0.75rem" }}>
        {/* <CustomizedTextField /> */}
        <CommonTextArea
          placeholder="Write here"
          searchInput={false}
          setValue={(value)=>setComment(value)}
          value={comment}
        //   type1={"email"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          marginTop: "2.44rem",
        }}
      >
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default CommentSection;
