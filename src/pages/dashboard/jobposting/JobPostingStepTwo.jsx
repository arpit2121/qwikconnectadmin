import React, { useRef, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import { CustomCard } from "../../../components/card/CustomCard";
import useResponsiveStyles from "../../../utils/MediaQuery";
import EditIcon from "../../../components/icons/EditIcon";
import DeleteIcon from "../../../components/icons/DeleteIcon";
import InfoIcon from "../../../components/icons/InfoIcon";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import { Body3 } from "../../../components/typography/Fields";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import AddIcon from "../../../components/icons/AddIcon";
import DbIcon from "../../../components/icons/DbIcon";
import QuestionCard from "../../../components/admin/QuestionCard";
import Notification from "../../../components/notification/Notification";
import CustomTooltip from "../../../components/tooltip/CustomTooltip";
import RatingParameter from "../../../components/admin/RatingParameter";
import { current } from "@reduxjs/toolkit";
import SaveIcon from "../../../components/icons/InfoIcon";
import { useDispatch, useSelector } from "react-redux";
import { setParameter, setQuestions, setMinimumPassingParameter, setDisplayQuestions, updateQuestion } from "../../../slice/job.slice";
import { useAddNewQuestionMutation } from "../../../services/job";
import FormData from "form-data";

const JobPostingStepTwo = ({adminid, jobpostid}) => {
  const responsive = useResponsiveStyles();
  const dispatch = useDispatch();

  // const { ratingParameters } = useSelector(
  //   (state) => state.job.question_setup
  // );

  const [addNewQuestion] = useAddNewQuestionMutation();


  const { questionsArray,passingPoint,display_questions, ratingParameters } = useSelector((state) => state.job.question_setup);

  // Step 1: Create an array of options
  const options = ratingParameters.map((item, index) => index + 1);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState("Parameter");
  const admin_id = useSelector((state)=> state.auth.adminId)


  console.log("questionsArrayminimum_passing_parameter,display_questions", questionsArray,display_questions);

  const questions_option = questionsArray.map((value, index) => index + 1);

  const handleSave = (index) => {
    // Perform the save action, e.g., update the data in your state or API
    // After saving, clear the editing state
    console.log("saved called");
    const updateRatingParmeters = [...ratingParameters];
    updateRatingParmeters[editingIndex] = editedData;
    dispatch(setParameter(updateRatingParmeters));
    setEditingIndex(null);
  };

  //save reference for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleAddQuestion = async () => {
    const { video_key, ...jsonData } = questionsArray[questionsArray.length - 1];
    console.log(jsonData, video_key)
    const formData = new FormData();
    try {
      formData.append('file', video_key);
      formData.append('json_data', JSON.stringify(jsonData));
      // ...
    } catch (error) {
      console.error("Error creating FormData:", error);
    }



    await addNewQuestion({formData:formData, adminId: admin_id, jobPostId:jobpostid}).then((response) => {
      console.log("response data", response); 
      if (response.data) {
       console.log("hello")
      }
    });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleInputChange = (name, value, index) => {
    console.log("porinitng value", name, value, index);
    dispatch(updateQuestion({ name, value, index }));
  };

  const minimumPassingParameter = (name, value, index) => {
    dispatch(setMinimumPassingParameter(value));
  }

  const setDisplayQuestion = (name, value, index) => {
    dispatch(setDisplayQuestions(value));
  }


  const onDelete = (indexToDelete) => {
    console.log("delete", indexToDelete);
    const newData = ratingParameters.filter(
      (item, index) => index !== indexToDelete
    );
    // setRatingParameter(newData);
    dispatch(setParameter(newData));
  };

  const deleteQuestion = (deleteIndexQuestion) => {
    // const deletedQuestion = questionsArray.filter((item, index) => index!=deleteIndexQuestion)
    // dispatch() --> dipsatch the particular question object
    const updatedQuestions = [...questionsArray];
    updatedQuestions.splice(deleteIndexQuestion, 1);
    dispatch(setQuestions(updatedQuestions));
  };

  //handeol sorting
  const handelSort = () => {
    console.log("hii");
    //duplicate item
    let _questions = [...questionsArray];
    console.log("_questions", _questions);

    //remove and save the dragged item content
    const dragItemContent = _questions.splice(dragItem / current, 1)[0];
    console.log("dragItemContent", dragItemContent);

    //switch the position
    _questions.splice(dragOverItem.current, 0, dragItemContent);

    //reset the position of ref
    dragItem.current = null;
    dragOverItem.current = null;
    //update the actual array
    dispatch(setQuestions(_questions));
  };

  return (
    <div
      style={{
        backgroundColor: "",
        // height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "2rem",
        }}
      >
        <div style={{ backgroundColor: "" }}>
          <div>
            <CustomAllTypography variant={"h1"} name={"Rating Parameter"} />
            <div style={{ paddingTop: "0.5rem" }}>
              <CustomAllTypography
                variant={"body2"}
                name={
                  "Effortlessly set up or modify your own candidate rating parameters per job post."
                }
              />
            </div>
          </div>
          <div
            style={{
              paddingTop: "1.5rem",
              paddingBottom: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "",
              // width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: responsive.isMobile ? "" : "center",
                // width: "100%",
                // backgroundColor: "red",
              }}
            >
              <CustomAllTypography
                name={"Minimum passing per Parameter"}
                variant={responsive.isMobile ? "body2" : "h6"}
              />
              <CustomTooltip
                icon={<InfoIcon />}
                message={
                  "Select any choice of parameter for clearing the interview. Remeber default Minimum Passing Grade per parameter will be always 3 out of 5"
                }
              />
            </div>
            <div>
              {/* <CustomAllTypography variant={"body3"} name={"dropdown121"} /> */}
              <CommonTextInput
                style={{ margin: "1.5rem 0rem" }}
                borderStyle={{ borderRadius: "0.25rem" }}
                type="dropdown"
                placeholder="All"
                options={options}
                value={passingPoint}
                handleDropChange={minimumPassingParameter}
                index={""}
                nameCom={""}
              />
            </div>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <CustomCard
              sx={{
                boxShadow: "0px 8px 16px 0px rgba(142, 141, 208, 0.12)",
                borderRadius: "1.25rem",
              }}
            >
              <div style={{}}>
                {ratingParameters.map((data, index) => (
                  <div style={{ padding: "1rem" }} key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ width: "80%" }}>
                        {editingIndex === index ? (
                          // Render the input field for editing
                          <input
                            type="text"
                            value={editedData}
                            onChange={(e) => setEditedData(e.target.value)}
                          />
                        ) : (
                          // Render the data when not editing
                          <CustomAllTypography name={data} variant={"body2"} />
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "2.92rem",
                        }}
                      >
                        {editingIndex === index ? (
                          // Show the "Save" icon when editing
                          <div onClick={() => handleSave(index)}>
                            <SaveIcon />
                          </div>
                        ) : (
                          // Show the "Edit" icon when not editing
                          <div onClick={() => handleEdit(index, data)}>
                            <EditIcon />
                          </div>
                        )}
                        <div onClick={() => onDelete(index)}>
                          <DeleteIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CustomCard>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "30px",
              paddingBottom: "30px",
              alignItems: "center",
            }}
          >
            <CustomTooltip
              icon={<Body3>Sample Ratings</Body3>}
              message={<RatingParameter />}
            />
            <CustomInputButton
              variant="outlined"
              size="medium"
              startIcon={<AddIcon />}
              onClick={() => {
                dispatch(setParameter([...ratingParameters, editedData]));
              }}
            >
              Add Parameter
            </CustomInputButton>
          </div>
        </div>
        <div style={{ backgroundColor: "", paddingTop: "30px" }}>
          <div style={{ backgroundColor: "" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CustomAllTypography name={"Add Questions"} variant={"h2"} />
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DbIcon />
                <CustomAllTypography
                  name={questionsArray.length-1}
                  variant={"h3"}
                />
                <div>
                  <Body3>Questions</Body3>
                  <Body3>Added</Body3>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <CustomAllTypography
                  name={"Display Questions"}
                  variant={"body1"}
                />
                <CustomTooltip
                  icon={<InfoIcon />}
                  message={
                    "Customize your candidate's experience by selecting questions. Each candidate will pe presented with reandom questions from your question bank."
                  }
                />
              </div>
              <div>
                <CommonTextInput
                  style={{ margin: "1.5rem 0rem" }}
                  borderStyle={{ borderRadius: "0.25rem" }}
                  type="dropdown"
                  placeholder="1"
                  options={questions_option}
                  value={display_questions}
                  handleDropChange={setDisplayQuestion}
                  index={""}
                  nameCom={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {questionsArray.map((questions, index) => {
        return (
          <div
            style={{
              paddingTop: "3rem",
              display: responsive.isMobile ? "" : "flex",
              width: "100%",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div
              style={{
                paddingLeft: responsive.isMobile ? "1rem" : "",
              }}
            >
              <CustomAllTypography
                name={`Q${index + 1}`}
                // name={`Q${[questions.questionNo]:index + 1}`}
                variant={"h4"}
                textcolor={"#C9C8D3"}
              />
            </div>
            <div style={{ width: "100%" }}>
              <div
                key={index}
                style={{
                  paddingLeft: responsive.isMobile ? "1rem" : "",
                  paddingRight: responsive.isMobile ? "1rem" : "",
                  paddingTop: responsive.isMobile ? "1rem" : "",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "3rem",
                }}
                draggable
                onDragStart={(e) => (dragItem.current = index)}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handelSort}
              >
                <QuestionCard
                  index={index}
                  questions={questions}
                  deleteQuestion={deleteQuestion}
                  handleChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        );
      })}
      <div
        style={{
          padding: responsive.isMobile ? "1rem" : "0 0 0 4rem",
          marginTop: responsive.isMobile ? "" : "2.5rem",
        }}
      >
        <div style={{ width: "100%", backgroundColor: "" }}>
          {/* <Notification/> */}
          <Notification />
        </div>
      </div>
      <div
        style={{
          paddingLeft: responsive.isMobile ? "1rem" : "4rem",
          marginTop: "2rem",
        }}
      >
        <div style={{ width: responsive.isMobile ? "95%" : "" }}>
          <CustomInputButton
            size="medium"
            variant="outlined"
            startIcon={""}
            width="100%"
            onClick={handleAddQuestion}
          >
            Add Questions
          </CustomInputButton>
        </div>
      </div>
    </div>
  );
};

export default JobPostingStepTwo;
