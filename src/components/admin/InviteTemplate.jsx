import React, { useState } from "react";
import CustomAllTypography from "../typography/CustomTypograpgy";
import CustomContainer from "../structure/CustomContainer";
import Navbar from "../structure/admin/Navbar";
import LinkBar from "../../pages/dashboard/jobposting/LinkBar";
import CommonTextInput from "../textfield/CommonTextInput";
import RichTextEditor from "../textfield/RichTextEditor";
import useResponsiveStyles from "../../utils/MediaQuery";
import { CustomInputButton } from "../button/CustomButoon";
import RightArrowIcon from "../icons/RightArrowIcon";
import { useNavigate } from "react-router-dom";

const InviteTemplate = () => {
  const responsive = useResponsiveStyles();
  const navigat = useNavigate();
  const [subject, setSubject] = useState(
    "Your Interview Scheduled: Take the Next Step Now!"
  );
  const [content, setContent] = useState(
    "<p>Dear [User], </p><p><br></p><p>Congratulations! You have been selected for the next phase of our hiring process. We are thrilled to invite you to complete your video interview. This is your chance to shine and showcase your skills!</p><p><br></p><p> To begin the interview, simply click on the unique URL provided below:</p><p><br></p><p>[Insert Unique URL Here]</p><p><br></p><p>Please ensure you have a stable internet connection and a quiet environment before you start. The interview will provide us with valuable insights about your abilities and fit for the position. </p><p><br></p><p>Don't miss this opportunity to make a lasting impression. We can't wait to see your video interview! </p><p><br></p><p>Best regards, [Company Name] Team</p>"
  );

  const handleChange = (content) => {
    console.log(content);
    setContent(content);
  };

  const handleNext = () =>{
    navigat('/jobposting/PublicLink')
  }

  return (
    <CustomContainer>
      <div
        style={{
          height: "100%",
          width: "100vw",
        }}
      >
        <Navbar showTitle={false} />
        <div
          style={{
            paddingLeft:
              responsive.isMobile || responsive.isTablet ? "1rem" : "17rem",
            paddingRight:
              responsive.isMobile || responsive.isTablet ? "1rem" : "17rem",
              paddingBottom:'5rem'
          }}

        >
          <div style={{ marginTop: "1.66rem" }}>
            <LinkBar
              linkArray={[
                { title: "Home", path: "/dashboard/home" },
                { title: "My Job Post", path: "/jobposting/basicDaetails" },
              ]}
              showSteps={false}
            />
          </div>
          <div
            style={{
              marginTop: "1.88rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.88rem",
            }}
          >
            <CustomAllTypography name={"Invitation Template"} variant={"h2"} />
            <CommonTextInput
              value={subject}
              setValue={setSubject}
              setvalue={setSubject}
              title="Subject"
              placeholder="Type your name"
              searchInput={false}
            />
            <RichTextEditor
              content={content}
              setContent={setContent}
              handleChange={handleChange}
            />
          </div>
          <div style={{display:'flex',justifyContent:'flex-end',paddingTop:'3rem'}}>
          <CustomInputButton size="medium" endIcon={<RightArrowIcon />} onClick={handleNext}>
              Save & Close
          </CustomInputButton>
        </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default InviteTemplate;
