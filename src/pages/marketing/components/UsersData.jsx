import React from "react";
import counter from '../../../assets/marketing/counter.png'

const UsersData = () => {
  const textStyle = {
    position: "absolute",
    top: "50%", // Adjust the vertical position as needed
    left: "50%", // Adjust the horizontal position as needed
    transform: "translate(-50%, -50%)", // Center the text
    color: "white", // Adjust text color
    fontSize: "48px", // Adjust text size
    fontWeight: "bold", // Adjust text weight
    textAlign: "center", // Adjust text alignment
  };
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <img src={counter} width={'100%'} height={'auto'}/>
      <div style={textStyle}>
        <p>Qwikconnect</p>
      </div>
    </div>
  );
};

export default UsersData;
