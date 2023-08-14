import React, { useState } from "react";
import { CustomCard } from "../card/CustomCard";
import CustomAllTypography from "../typography/CustomTypograpgy";
import SmileIcon from "../icons/SmileIcon";
import useResponsiveStyles from "../../utils/MediaQuery";

function RatingParameter() {
  const data = [
    "Concentration",
    "Flexible",
    "Competency",
    "Skills",
    "Aptitude",
  ];
  const [state,setState] = useState({
    Concentration:0,
    Flexible:0,
    Competency:0,
    Skills:0,
    Aptitude:0,
  })

  const [selectedSmileyIndex, setSelectedSmileyIndex] = useState(-1);
  const [selectedOuterIndex, setSelectedOuterIndex] = useState(-1);
  
const responsive=useResponsiveStyles()
  const handleClick = (innerIndex, outerIndex) => {
    setSelectedSmileyIndex(innerIndex);
    setSelectedOuterIndex(outerIndex);
    
    const parameterKey = data[outerIndex];
    setState(prevState => ({
      ...prevState,
      [parameterKey]: innerIndex+1
    }));

  };


  return (
    <div  style={{
      width: "fit-content",
    }}>
     
        <CustomAllTypography name="Rating Parameters" variant={"h6"} />
        <div style={{ marginTop: "1.06rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              justifyContent: "center",
            }}
          >
            {data.map((item, outerIndex) => {
              return (
                <div
                  style={{ display: "flex", alignItems: "center",flexDirection: responsive.isTablet?'column':"row",justifyContent:responsive.isTablet?'center':"" }}
                  key={outerIndex}
                >
                  <div
                    style={{
                      width: "fit-content",
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    {item}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0.2rem",
                      marginLeft: responsive.isTablet?'':"auto",
                      gap: "0.75rem",
                    }}
                  >
                    {[0, 1, 2, 3, 4].map((item, innerIndex) => {
                      let smileyColor = "#AAAAAA"; // Default grey color

                      if (selectedSmileyIndex >= 0) {
                        smileyColor =
                          selectedSmileyIndex === 0
                            ? "#F93232"
                            : selectedSmileyIndex === 1
                            ? "#FFB82E"
                            : "#605DEC";
                      }

                      if (innerIndex > selectedSmileyIndex) {
                        smileyColor = "#AAAAAA"; // Grey color for smileys after the selected index
                      }

                      return (
                        <div
                          onClick={() => handleClick(innerIndex,outerIndex)}
                          style={{ display: "flex" }}
                          key={innerIndex}
                        >
                          <SmileIcon color={selectedOuterIndex===outerIndex?smileyColor:"#AAAAAA"} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
}

export default RatingParameter;


