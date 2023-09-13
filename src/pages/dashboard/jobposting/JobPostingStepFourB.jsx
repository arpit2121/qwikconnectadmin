import React, { useState } from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import editicon from "../../../assets/svg/edit.svg";
import RichTextEditor from "../../../components/textfield/RichTextEditor";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import { TextField } from "@mui/material";
import { useEffect } from "react";

const JobPostingStepFourB = () => {
  // const [state, setState] = useState({
  //   jobTitle: "Enter Job Title here",
  // });
  // const [jobTitle, setJobTitle] = useState("Enter Job Title here");
  const [isEditing, setIsEditing] = useState(false);
  const [isNameFocused, setIsNamedFocused] = React.useState(false);

  const [jobDetails, setJobDetails] = useState({
    job_title: "Enter Job Title here",
    job_description: "",
    hiring_loc: "",
    your_profession: "",
  });

  console.log(jobDetails)

  const handleInputChange = (event) => {
    console.log("hii");
    const { name, value } = event.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleChange = (newContent) => {
    setJobDetails({
      ...jobDetails,
      jobDescription: newContent,
    });
  };

  const handleEditClick = () => {
    // Implement your edit action here
    console.log("Edit clicked");
    setIsNamedFocused(true);
  };

  
  const handleSaveClick = () => {
    setIsEditing(false); // Exit edit mode
    // You can save the modified jobTitle here
  };

  useEffect(()=>{
    console.log(jobDetails)
  },[jobDetails])


  return (
    <div style={{ marginTop: "4rem", padding: "0 1rem 0 1rem" }}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          transition: "opacity 1s ease",
        }}
      >
        {!isNameFocused ? (
          <CustomAllTypography
            name={jobDetails.job_title}
            variant={"h2"}
            // value={jobDetails.job_title}
            // onClick={handleEditClick}
            // onChange={(e) => setJobTitle(e.target.value)}
            sx={{}}
          />
        ) : (
          <TextField
            variant="standard"
            autoFocus
            inputProps={{
              style: {
                fontSize: "3rem",
                border: "none", // Set border to "none" to remove the border
                outline: "none",
                padding: "2px",
                fontWeight: 700,
                lineHeight: "120%",
                // width: `${jobTitle.length * 30}px`
                // width: `${jobTitle.length -1}`
                // minWidth: 50
              },
            }}
            value={jobDetails.job_title}
            name="job_title"
            onChange={(event) => handleInputChange(event)}
            onBlur={(event) => setIsNamedFocused(false)}
          />
        )}
        <img
          src={editicon}
          alt="edit"
          style={{ cursor: "pointer" }}
          onClick={handleEditClick}
        />
      </div>
      <div style={{ marginTop: "2.19rem" }}>
        <CustomAllTypography name={"Job Description"} variant={"body2"} />
      </div>
      <div>
        <RichTextEditor content={jobDetails.job_description} setContent={setJobDetails.job_description} handleChange={handleChange}/>
        <div style={{ marginTop: "2.63rem" }}>
          <CommonTextInput
            value={jobDetails.hiring_loc}
            title="Enter Hiring location"
            placeholder="FirstName LastName"
            searchInput={false}
            setValue={setJobDetails.hiring_loc}
            name="hiring_loc"
            handleInputChange={handleInputChange}
          />
        </div>
        <div style={{ marginTop: "2.63rem" }}>
          {" "}
          {/* <CommonTextInput
            style={{ margin: "1.5rem 0rem" }}
            type="dropdown"
            placeholder="Your Profession"
            value={jobDetails.your_profession}
            setValue={setJobDetails.your_profession}
          /> */}
          <CommonTextInput
            style={{ margin: "1.5rem 0rem" }}
            type="dropdown"
            placeholder="Your Profession"
            value={jobDetails.your_profession}
            setValue={setJobDetails.your_profession}
            handleInputChange={handleInputChange}
            name="your_profession"
          />
        </div>
      </div>
    </div>
  );
};

export default JobPostingStepFourB;
