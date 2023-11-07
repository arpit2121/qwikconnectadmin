import React, { useState } from "react";
import { CustomCard } from "../card/CustomCard";
import QuestionCardLines from "../icons/QuestionCardLines";
import CustomAllTypography from "../typography/CustomTypograpgy";
import EditIcon from "../icons/EditIcon";
import useResponsiveStyles from "../../utils/MediaQuery";
import QuestionCardIconHorizontal from "../icons/QuestionCardIconHorizontal";
import Checkbox from "../selectedcontrols/CheckBox";
import CommonTextInput from "../textfield/CommonTextInput";
import CustomDropzone from "../dropzone/CustomDropzone";
import { TextField } from "@mui/material";
import DeleteIcon from "../icons/DeleteIcon";
import TrashIcon from "../icons/TrashIcon";


function QuestionCard({ index, questions,handleChange, deleteQuestion }) {
  const responsive = useResponsiveStyles();
  const [isEditing, setIsEditing] = useState(false);

  const onEdit = () => {
    console.log("Edit Called");
  };

  const handleChange1 = (name, value, index) => {
    // const {name, value} = event.target;
    console.log("hii", name, value, index)
    handleChange(name, value, index)
  }
  
  const deleteQuestion1 = (index) => {
    console.log("index to be deleted", index)
    deleteQuestion(index)
  }

  return (
    <CustomCard
      key={index}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
        flexDirection: responsive.isMobile ? "column-reverse" : "",
        strokeWidth: "1px",
        stroke: "#F4F3FE",
        filter: "drop-shadow(0px 8px 16px rgba(142, 141, 208, 0.12))",
        borderRadius: "1rem",
        boxShadow: "0px 8px 16px 0px rgba(142, 141, 208, 0.12)",
      }}
    >
      <div style={{ cursor: "move" }}>
        {responsive.isMobile ? (
          <QuestionCardIconHorizontal />
        ) : (
          <QuestionCardLines />
        )}
      </div>
      <CustomDropzone style={{ width: "10.5rem", height: "10.625rem" }} acceptedTypes={['video/*']}/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.50rem",
          width: responsive.isMobile ? "100%" : "80%",
          justifyContent: "center",
        }}
      >
        <div
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          key={index}
        >
         {
          !isEditing 
          ? 
          <CustomAllTypography
          name={questions.questionTitle}
          // name="Question Title here"
          variant="h3"
          textcolor="#C9C8D3"
        />
        :
        <TextField
        variant="standard"
        autoFocus
        inputProps={{
          style: {
            fontSize: "1.2rem",
            border: "none", // Set border to "none" to remove the border
            outline: "none",
            padding: "0",
            // fontWeight: 700,
            // lineHeight: "120%",
          },
        }}
        value={questions.questionTitle}
        // value={job_title}
        name="questionTitle"
        onChange={(event) => handleChange1(event.target.name,event.target.value, index)}
        onBlur={(event) => setIsEditing(false)}
        />
         }
          <div onClick={() => setIsEditing(true)}>
            { !isEditing ? <EditIcon /> : ""}
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.652rem" }}>
          <Checkbox isMandatory={questions.isMandatory} index={index}/>
          <div>Mandatory</div>
        </div>
        <div
          style={{ display: responsive.isMobile ? "" : "flex", gap: "2.56rem" }}
        >
          <div
            style={{
              display: responsive.isMobile ? "flex" : "",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Retakes:</div>
            <CommonTextInput
              style={{
                margin: "1.5rem 0rem",
                width: responsive.isMobile ? "9.6435rem" : "",
              }}
              borderStyle={{ borderRadius: "0.25rem" }}
              type="dropdown"
              placeholder="1 time"
              options={[1, 2, 3, 4, 5]}
              value={questions.retakes}
              handleDropChange={handleChange1}
              index={index}
              nameCom={"retakes"}
            />
          </div>
          <div
            style={{
              display: responsive.isMobile ? "flex" : "",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Thinking Time:</div>
            <CommonTextInput
              style={{
                margin: "1.5rem 0rem",
                width: responsive.isMobile ? "9.6435rem" : "",
              }}
              borderStyle={{ borderRadius: "0.25rem" }}
              type="dropdown"
              placeholder="30 Sec"
              options={["5s", "10s", "15s", "20s", "25s"]}
              value={questions.thinkingTime}
              handleDropChange={handleChange1}
              index={index}
              nameCom={"thinkingTime"}
            />
          </div>
          <div
            style={{
              display: responsive.isMobile ? "flex" : "",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Time to Answer:</div>
            <CommonTextInput
              style={{
                margin: "1.5rem 0rem",
                width: responsive.isMobile ? "9.6435rem" : "",
              }}
              borderStyle={{ borderRadius: "0.25rem" }}
              type="dropdown"
              placeholder="30 Sec"
              options={["30s", "1m", "2m", "5m", "10m"]}
              value={questions.timeToAnswer}
              handleDropChange={handleChange1}
              index={index}
              nameCom={"timeToAnswer"}
            />
          </div>
        </div>
      </div>
      {responsive.isMobile ? (
        ""
      ) : (
        <div style={{ flex: "1", alignSelf: "end", marginBottom: "1rem" }} onClick={()=>deleteQuestion1(index)}>
          <TrashIcon />
        </div>
      )}
    </CustomCard>
  );
}

export default QuestionCard;
