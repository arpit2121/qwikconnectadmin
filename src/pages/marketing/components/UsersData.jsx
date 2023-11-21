import React from "react";
import rounded from "../../../assets/qwik/Rectangle 242.png";
import Rounded from "./Rounded";
import vector from '../../../assets/qwik/Vector.png'
import vector1 from '../../../assets/qwik/Vector-1.png'
import useResponsiveStyles from "../../../utils/MediaQuery";

const UsersData = () => {
    const responsive = useResponsiveStyles();
  return (
    <div style={{ marginTop: "3rem", display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <div style={{ position: 'relative', top: '-50%', left: '30px' }}>
        <img src={vector1} alt="" />
      </div>
      <div style={{
        flexShrink: 0,
        borderRadius: "7.25rem",
        background: "linear-gradient(180deg, #4787F3 0%, #3D3ACE 100%)",
        padding: responsive.isMobile ? "0.5rem" : "2.3rem 0",
        display: "flex",
        flexDirection: "column",
        gap: responsive.isMobile ? "0.5rem" : "0.5rem",
        alignItems: "center",
        zIndex: '1',
        width: '80%', // Adjust the width as needed
      }}>
        
      </div>
      <div style={{ position: 'relative', top: '-50%', left: '-30px' }}>
        <img src={vector} alt="" />
      </div>
    </div>
  );
};

export default UsersData;
