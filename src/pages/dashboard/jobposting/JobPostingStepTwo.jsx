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
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import CustomTooltip from "../../../components/tooltip/CustomTooltip";
import RatingParameter from "../../../components/admin/RatingParameter";
import { current } from "@reduxjs/toolkit";

const JobPostingStepTwo = () => {
  const responsive = useResponsiveStyles();
  const [ratingParameter, setRatingParameter] = useState([
    "Concentration",
    "Flexible",
    "Competency",
    "Skills",
    "Aptitude",
  ]);

  // const []

  // const [parameterOption, setParameterOption] = useState([]);
  // const [questionOption, setSelectQuestionOption] = useState([]);

  const [questionSections, setQuestionSections] = React.useState([1]);

  const [questions, setQuestions] = useState([
    {
      question_title: "",
      questionVideo: "",
      isMandatory: "",
      retakes: "",
      thinking_time: "",
      time_to_answer: "",
    },
  ]);

  //save reference for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);


  const handleAddQuestion = () => {
    const newQuestionNumber = questionSections.length + 1;
    setQuestionSections([...questionSections, newQuestionNumber]);
  };

  const onEdit = () => {
    // console.log("edit")
  };

  const onDelete = (indexToDelete) => {
    console.log("delete", indexToDelete);
    const newData = ratingParameter.filter(
      (item, index) => index !== indexToDelete
    );
    setRatingParameter(newData);
  };

  // useEffect(()=>{
  //   console.log("ratingParameter.length, questionSections.length",ratingParameter.length, questionSections.length)
  //   // setParameterOption(Array.from({ length:  parameterOption.length}, (_, index) => index + 1));
  //   // setSelectQuestionOption(Array.from({ length:  questionSections.length}, (_, index) => index + 1));
  //   console.log("arameterOption",parameterOption,",questionOption",questionOption)
  // },[ratingParameter,questionSections,parameterOption,questionOption])

  //handel drag on start drag function

  //handle drag start
  const onDragStart = (e, index) => {
    console.log("Drag started", index);
  };

  //handle drag enter
  const onDragEnter = (e, index) => {
    console.log("Drag Enter", index);
  };

  //handle drag hover
  const onDragEnd = (e) => {
    console.log("Drag End", e);
  };

  //handeol sorting
  const handelSort = () => {
    console.log("hii")
    //duplicate item
    let _questions = [...questionSections];
    console.log("_questions",_questions)
    
    //remove and save the dragged item content
    const dragItemContent = _questions.splice(dragItem/current,1)[0]
    console.log("dragItemContent",dragItemContent)

    //switch the position
    _questions.splice(dragOverItem.current, 0, dragItemContent)

    //reset the position of ref
    dragItem.current = null
    dragOverItem.current = null

    //update the actual array
    setQuestionSections(_questions)
  }

  console.log("questionSections",questionSections)
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
                {ratingParameter.map((data, index) => {
                  return (
                    <div style={{ padding: "1rem" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ width: "80%" }}>
                          <CustomAllTypography name={data} variant={"body2"} />
                        </div>
                        <div
                          style={{
                            // width: "20%",
                            display: "flex",
                            // justifyContent: "space-between",
                            gap: responsive.isMobile ? "2.3rem" : "2.92rem",
                          }}
                        >
                          <div onClick={() => onEdit(index)}>
                            <EditIcon />
                          </div>
                          <div onClick={() => onDelete(index)}>
                            <DeleteIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
            {/* <Body3>Sample Ratings</Body3> */}
            <CustomTooltip
              icon={<Body3>Sample Ratings</Body3>}
              message={<RatingParameter />}
            />
            <CustomInputButton
              variant="outlined"
              size="medium"
              startIcon={<AddIcon />}
              onClick={() => {
                setRatingParameter([...ratingParameter, "Parameter"]);
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
                <CustomAllTypography name={"10"} variant={"h3"} />
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
                  placeholder="None"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {questionSections.map((questionNumber, index) => {
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
                name={`Q${index+1}`}
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
                  // backgroundColor:'red'
                }}
                draggable
                // onDragStart={(e) => onDragStart(e, index)}
                // onDragEnter={(e) => onDragEnter(e, index)}
                onDragStart={(e)=> dragItem.current=index}
                onDragEnter={(e)=>dragOverItem.current=index}
                onDragEnd={handelSort}
              >
                <QuestionCard index={index}/>
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
