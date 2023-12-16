import React, { useEffect, useState } from "react";
import CustomAllTypography from "../typography/CustomTypograpgy";
import SmileIcon from "../icons/SmileIcon";
import useResponsiveStyles from "../../utils/MediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setIntervieweeParamenter, setInterviewewStatus } from "../../slice/intervieweeSlice";

function RatingParameter({setState}) {

  const {parameters, status} = useSelector((state)=>state.interviewee.intervieweeParaAndStatus)

  const data1 = Object.keys(parameters);


  const responsive = useResponsiveStyles();
  const dispatch = useDispatch();
  
  console.log("setState",setState)


  useEffect(() => {
    //passing point -> passing point is something 
    //rating parameter -> minimum parameter to get
    const passProperties = Object.keys(parameters).filter((key) => parameters[key] >= setState?.passingPoint - 1);//here my passingpoint will come
    if (passProperties.length >= setState?.requiredRatingParameter) {//reequired rating paramneter ther minu
      dispatch(setInterviewewStatus('shortlisted'))
    } else {
      dispatch(setInterviewewStatus('rejected'))
    }
  }, [parameters]);


  const handleClick = (innerIndex, outerIndex, item1) => {
    const parameterKey = item1;
    dispatch(setIntervieweeParamenter({parameterKey, innerIndex}));
  }

  return (
    <div
      style={{
        width: "fit-content",
      }}
    >
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
          {
            parameters
            ?
            data1.map((item1, outerIndex) => {
              console.log(item1);
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: responsive.isTablet ? "column" : "row",
                    justifyContent: responsive.isTablet ? "center" : "",
                  }}
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
                      marginLeft: responsive.isTablet ? "" : "auto",
                      gap: "0.75rem",
                    }}
                  >
                    {[0, 1, 2, 3, 4].map((item, innerIndex) => {
                      let smileyColor = "#AAAAAA"; // Default grey color  
                      if (parameters[item1] >= 0) {
                        smileyColor =
                        parameters[item1] === 0
                            ? "#F93232"
                            : parameters[item1] === 1
                            ? "#FFB82E"
                            : "#605DEC";
                      }
                      if (innerIndex > parameters[item1]) {
                        smileyColor = "#AAAAAA"; // Grey color for smileys after the selected index
                      }
                      return (
                        <div
                          onClick={() =>
                            handleClick(innerIndex, outerIndex, item1)
                          }
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
            })
            :
            ""
          }
        </div>
      </div>
    </div>
  );
}

export default RatingParameter;
