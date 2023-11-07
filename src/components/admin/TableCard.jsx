import React from "react";
import CustomAllTypography from "../typography/CustomTypograpgy";
import { Body3, Body4 } from "../typography/Fields";
import StatusButton from "../button/StatusButton";
import { useNavigate } from "react-router-dom";
import SystemRecommended from "../icons/SystemRecommended";

const TableCard = ({image, Name, email, id, status, time,system}) => {
    const navigate = useNavigate();
    const handleClick = () =>{
      navigate("/candidatereview")
    }
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingTop: "1.25rem",
        paddingBottom: "0.94rem",
        display: "flex",
        borderBottom: "0.13rem solid #F4F3FE",
        justifyContent: "space-between",
        paddingRight:'1rem',
        alignItems:'center'
      }}
      onClick={handleClick}
      key={id}
    >
      <div style={{display:'flex'}}>
        <div>{image}</div>
        <div
          style={{
            marginLeft: "0.76rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CustomAllTypography name={Name} />
          <Body3 color={"#8A8894"}>{email}</Body3>
        </div>
      </div>
      <div style={{display:'flex',gap:'0.5rem'}}>
        {system?<SystemRecommended/>:''}
      <div style={{display:'flex',flexDirection:'column', alignItems:'flex-end',gap:'0.37rem'}}>   
        <StatusButton name={status}/>
        <Body4 color={'#8A8894'}>{time}</Body4>
      </div>
      </div>
    </div>
  );
};

export default TableCard;
