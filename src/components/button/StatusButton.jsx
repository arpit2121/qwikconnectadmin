import { makeStyles } from "@mui/styles";
import React from "react";
import useResponsiveStyles from "../../utils/MediaQuery";

const useStyles = makeStyles({
  rejected: {
    display: "flex",
    // width: "5.8125rem",
    padding: "0.5rem 1rem",
    alignItems: "flex-start",
    gap: "0.625rem",
    backgroundColor:'#FFCBCB',
    border:'none',
    color:'#212121',
    borderRadius:' 0.25rem'
  },
  success: {
    width: "10em",
    height: "5ex",
    backgroundImage: "linear-gradient(135deg, #f34079 40%, #fc894d)",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",borderRadius:' 0.25rem'
  },
  activated:{
    display: "flex",
    width: "5.8125rem",
    padding: "0.5rem 1rem",
    alignItems: "flex-start",
    gap: "0.625rem",
    backgroundColor:'#D6FFE9',
    border:'none',
    color:'#212121',
    borderRadius:' 0.25rem'
  },
  pending: {
    // width: "5.8125rem",
    padding: "0.5rem 1rem",
    alignItems: "flex-start",
    gap: "0.625rem",
    backgroundColor:'#FFF9C5',
    border:'none',
    color:'#212121',
    borderRadius:' 0.25rem',
    textAlign:'center'
  },
  shortlisted: {
    display: "flex",
    width: "5.8125rem",
    padding: "0.5rem 1rem",
    alignItems: "flex-start",
    gap: "0.625rem",
    backgroundColor:'#EDDBFF',
    border:'none',
    color:'#212121',
    borderRadius:' 0.25rem'
  }
});




const StatusButton = ({name}) => {
    const responsive = useResponsiveStyles();
  const classes = useStyles();
  return <button className={name==="Rejected"?classes.rejected:name=="Activated"?classes.activated:name==="Pending"?classes.pending:name==="Shortlisted"?classes.shortlisted:''} disabled style={{padding:responsive.isMobile?'0.25':'0.5rem 1rem'}}>{name}</button>;
};

export default StatusButton;