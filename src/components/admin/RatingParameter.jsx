import React, { useState } from "react";
import { CustomCard } from "../card/CustomCard";
import CustomAllTypography from "../typography/CustomTypograpgy";
import SmileIcon from "../icons/SmileIcon";

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
  

  const handleClick = (innerIndex, outerIndex) => {
    setSelectedSmileyIndex(innerIndex);
    setSelectedOuterIndex(outerIndex);
    
    const parameterKey = data[outerIndex];
    console.log(parameterKey)
    setState(prevState => ({
      ...prevState,
      [parameterKey]: innerIndex+1
    }));

  };
  console.log(state); 
  

  return (
    <div>
      <CustomCard
        style={{
          padding: "1.56rem 2rem 2.25rem 1.62rem",
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
            {data.map((item, outerIndex) => {
              return (
                <div
                  style={{ display: "flex", alignItems: "center" }}
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
                      marginLeft: "auto",
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
      </CustomCard>
    </div>
  );
}

export default RatingParameter;




// import React, { useState } from "react";
// import { CustomCard } from "../card/CustomCard";
// import CustomAllTypography from "../typography/CustomTypograpgy";
// import SmileIcon from "../icons/SmileIcon";

// function RatingParameter() {
//   const data = [
//     "Concentration",
//     "Flexible",
//     "Competency",
//     "Skills",
//     "Aptitude",
//   ];

//   const [selectedSmileyIndexes, setSelectedSmileyIndexes] = useState(
//     Array(data.length).fill(-1)
//   );

//   const handleClick = (outerIndex, innerIndex) => {
//     const newSelectedSmileyIndexes = [...selectedSmileyIndexes];
//     newSelectedSmileyIndexes[outerIndex] = innerIndex;
//     setSelectedSmileyIndexes(newSelectedSmileyIndexes);
//   };

//   return (
//     <div>
//       <CustomCard
//         style={{
//           padding: "1.56rem 2rem 2.25rem 1.62rem",
//           width: "fit-content",
//         }}
//       >
//         <CustomAllTypography name="Rating Parameters" variant={"h6"} />
//         <div style={{ marginTop: "1.06rem" }}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "0.5rem",
//               justifyContent: "center",
//             }}
//           >
//             {data.map((item, outerIndex) => {
//               return (
//                 <div
//                   style={{ display: "flex", alignItems: "center" }}
//                   key={outerIndex}
//                 >
//                   <div
//                     style={{
//                       width: "fit-content",
//                       padding: "0.2rem 0.5rem",
//                     }}
//                   >
//                     {item}
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       padding: "0.2rem",
//                       marginLeft: "auto",
//                       gap: "0.75rem",
//                     }}
//                   >
//                     {[0, 1, 2, 3, 4].map((_, innerIndex) => {
//                       let smileyColor = "#AAAAAA"; // Default grey color

//                       if (selectedSmileyIndexes[outerIndex] >= 0) {
//                         smileyColor =
//                           selectedSmileyIndexes[outerIndex] === innerIndex
//                             ? "#F93232"
//                             : "#AAAAAA";
//                       }

//                       return (
//                         <div
//                           onClick={() => handleClick(outerIndex, innerIndex)}
//                           style={{ display: "flex" }}
//                           key={innerIndex}
//                         >
//                           <SmileIcon color={smileyColor} />
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </CustomCard>
//     </div>
//   );
// }

// export default RatingParameter;



