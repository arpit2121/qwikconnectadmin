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
    Concentration:-1,
    Flexible:-1,
    Competency:-1,
    Skills:-1,
    Aptitude:-1,
  })
  console.log("parameter state ==>",  state);

  const [selectedSmileyIndex, setSelectedSmileyIndex] = useState(-1);
  const [selectedOuterIndex, setSelectedOuterIndex] = useState(-1);
  
const responsive=useResponsiveStyles()
  const handleClick = (innerIndex, outerIndex,item1) => {
    console.log("1",innerIndex,"2",outerIndex)
    console.log("selected parameter ==>" , item1)
    setSelectedSmileyIndex(innerIndex);
    setSelectedOuterIndex(outerIndex);
    
    const parameterKey = item1;
    setState(prevState => ({
      ...prevState,
      [parameterKey] : innerIndex
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
            {data.map((item1, outerIndex) => {
              console.log(item1)
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
                    {item1}
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
                      console.log("item",item)
                      console.log("data object", state[item1])
                      let smileyColor = "#AAAAAA"; // Default grey color

                      if (state[item1] >= 0) {
                        smileyColor =
                        state[item1] === 0
                            ? "#F93232"
                            : state[item1] === 1
                            ? "#FFB82E"
                            : "#605DEC";
                      }

                      if (innerIndex > state[item1]) {
                        smileyColor = "#AAAAAA"; // Grey color for smileys after the selected index
                      }

                      return (
                        <div
                          onClick={() => handleClick(innerIndex,outerIndex,item1  )}
                          style={{ display: "flex" }}
                          key={innerIndex}
                        >
                          <SmileIcon color={smileyColor} />
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


