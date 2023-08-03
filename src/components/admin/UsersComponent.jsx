import React from "react";

const UsersComponent = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#E5E0FF",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70px",
        width: "70px",
      }}
    >
      <img src={props.image} alt="user1" height={"70%"} width={'70%'}></img>
    </div>
  );
};

export default UsersComponent;
