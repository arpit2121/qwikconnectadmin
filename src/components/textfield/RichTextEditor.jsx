import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  joditContainer: {
    // border: "2px solid #ccc" /* Default border color */,
    transition: "border-color 0.3s ease-in-out",
    // background: "var(--fields-form, #F7F7FD)",
    borderRadius: "18px",
    border: 'none',

    "&:hover": {
      // borderColor: "red",
      border:"1px solid var(--fields-stroke-hover, #E8E6F8)",
      background: "var(--fields-form, #F7F7FD)",
      transition: "border-color 0.3s ease-in-out",
      // "1px solid var(--fields-stroke-hover, #E8E6F8)" /* Border color on hover */,
    },

    "&:focus": {
      outline: "none" /* Remove default outline on focus */,
      background: "var(--fields-form, #F7F7FD)",
      border: "5px solid var(--fields-stroke-focused, #605DEC)",
    },
  },

  joditContent: {
    padding: "10px" /* Add padding to the content area */,
  },
}));

const RichTextEditor = ({content, setContent, handleChange}) => {
  const editor = useRef();
  // const [content, setContent] = useState();
  const classes = useStyles();
  useEffect(()=>{
    console.log(content)
  })
  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => handleChange(newContent)}
        className={classes.joditContainer}
      />
    </div>
  );
};

export default RichTextEditor;
