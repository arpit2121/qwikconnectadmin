import React, { useState,useEffect } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import editicon from "../../../assets/svg/edit.svg";
import RichTextEditor from "../../../components/textfield/RichTextEditor";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import { setBasicDetails } from "../../../slice/job.slice";
import { useGetProfessionsQuery, useLazyGetProfessionsQuery } from "../../../services/admin";


const JobPostingStepFourB = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [isNameFocused, setIsNamedFocused] = React.useState(false);

const {
  jobTitle,
  jobDescription,
  hiringLocation,
  profession,
  requiredExperience
} = useSelector((state)=>state.job.basic_details)

const dispatch = useDispatch();

const exp = ["<1yrs", "1-2yrs", "2-3yrs", "3-4yrs", ">5yrs"]



console.log("jobTitle,jobDescription,hiringLocation,profession,requiredExperience", jobTitle,
jobDescription,
hiringLocation,
profession,
requiredExperience)

useEffect(()=>{
},[jobDescription])


const { data } = useGetProfessionsQuery();

const allProfessions = data
?.map((categoryData) => categoryData.professions)
.reduce((acc, professions) => acc.concat(professions), []);

console.log("professionData",allProfessions)

  // console.log(jobDetails)

  const handleInputChange = (event) => {
    // console.log("hii");
    const { name, value } = event.target;
    // setJobDetails((prevDetails) => ({
    //   ...prevDetails,
    //   [name]: value,
    // }));
    dispatch(setBasicDetails({name, value}))
  };

  

  const handleChange = (newContent) => {
    // setJobDetails({
    //   ...jobDetails,
    //   jobDescription: newContent,
    // });
    // job_description: newContent
    let name = "jobDescription";
    let value = newContent;
    dispatch(setBasicDetails({name, value}))
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

  // useEffect(()=>{
  //   console.log(jobDetails)
  // },[jobDetails])


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
            name={jobTitle}
            // name={jobDetails.job_title}
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
                fontSize: "2.5rem",
                border: "none", // Set border to "none" to remove the border
                outline: "none",
                padding: "0",
                fontWeight: 700,
                lineHeight: "120%",
                // width: `${jobTitle.length * 30}px`
                // width: `${jobTitle.length -1}`
                // minWidth: 50
              },
            }}
            // value={jobDetails.job_title}
            value={jobTitle}
            name="jobTitle"
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
        <RichTextEditor
        //  content={jobDetails.job_description} 
        //  setContent={setJobDetails.job_description} 
         content={jobDescription} 
         setContent={jobDescription} 
         handleChange={handleChange}/>
        <div style={{ marginTop: "2.63rem" }}>
          <CommonTextInput
            // value={jobDetails.hiring_loc}
            value={hiringLocation}
            title="Enter Hiring location"
            placeholder="FirstName LastName"
            searchInput={false}
            setValue={hiringLocation}
            // setValue={setJobDetails.hiring_loc}
            name="hiringLocation"
            handleInputChange={handleInputChange}
          />
        </div>
        <div style={{ marginTop: "2.63rem" }}>
        <CommonTextInput
                style={{ margin: "1.5rem 0rem" }}
                type="dropdown"
                placeholder="Your Experience"
                value={requiredExperience}
                setValue={requiredExperience}
                handleInputChange={handleInputChange}
                name="requiredExperience"
                options={exp}
          />
        </div>
        <div style={{ marginTop: "2.63rem" }}>
          <CommonTextInput
            style={{ margin: "1.5rem 0rem" }}
            type="dropdown"
            placeholder="Your Profession"
            value={profession}
            setValue={profession}
            handleInputChange={handleInputChange}
            name="profession"
            options={allProfessions}
          />
        </div>
      </div>
    </div>
  );
};

export default JobPostingStepFourB;
