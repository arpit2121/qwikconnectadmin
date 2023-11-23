// // import React, { useState, useEffect } from "react";
// // import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
// // import VideoComponent from "../components/VideoComponent";
// // import useResponsiveStyles from "../../../utils/MediaQuery";
// // import poly from "../../../assets/polygonpng.png";
// // import polygon2 from "../../../assets/svg/polygon2.svg";
// // import "./keyfeature.css";

// // const KeyFeatures = () => {
// //   const responsive = useResponsiveStyles();
// //   const [showAnimation, setShowAnimation] = useState(true);
// //   const [currentItemIndex, setCurrentItemIndex] = useState(0);

// //   const data = [
// //     {
// //       image: "hii",
// //       item1: "Key Features",
// //       item2: "Revolutionizing Recruitment",
// //       item3:
// //         "Say Goodbye to Scheduling Hassles and Find Your Perfect Candidate Instantly!",
// //     },
// //     {
// //       image: "hello",
// //       item1: "Key Features",
// //       item2: "Accelerate Your Talent Search",
// //       item3:
// //         "Access a Vast Pool of Candidates, Find Your Ideal Match in No Time!",
// //     },
// //     {
// //       image: "namaste",
// //       item1: "Key Features",
// //       item2: "Collaborate and Make Better Decisions",
// //       item3:
// //         "Share Interview Recordings Seamlessly with Your Team of Peers!",
// //     },
// //     {
// //       image: "yess",
// //       item1: "Key Features",
// //       item2: "Exceptional Candidate Experience",
// //       item3: "Elevate Recruitment with Seamless and Positive Interactions!",
// //     },
// //   ];

// //   useEffect(() => {
// //     let interval;

// //     if (showAnimation) {
// //       interval = setInterval(() => {
// //         setCurrentItemIndex((prevIndex) =>
// //           prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
// //         );
// //       }, 800); // Adjust the delay as needed
// //     }

// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, [showAnimation, data.length]);

// //   const handleSectionClick = () => {
// //     setShowAnimation(true);
// //   };

// //   return (
// //     <>
// //       <div
// //         style={{
// //           background: `url(${poly}),linear-gradient(180deg, #605DEC 0%, #A5F 100%)`,
// //           backgroundSize: "cover",
// //           backgroundRepeat: "no-repeat",
// //           padding: responsive.isMobile ? "4rem 2rem" : "6.5rem 5.12rem",
// //           display: responsive.isMobile ? "" : "flex",
// //           alignItems: "center",
// //           alignItems: "center",
// //         }}
// //         id="key-features"
// //         className="key-features"
// //         onClick={handleSectionClick}
// //       >
// //         <div
// //           style={{
// //             display: "flex",
// //             flexDirection: "column",
// //             gap: "1.5rem",
// //             width: responsive.isMobile ? "100%" : "40%",
// //           }}
// //         >
// //           <CustomAllTypography
// //             name={"Introducing"}
// //             variant={"h3"}
// //             textcolor={"#36BF76"}
// //           />
// //           <CustomAllTypography name={"QwikConnect Platform"} variant={"h1"} />
// //           <CustomAllTypography
// //             name={
// //               "Empowering Recruiters: Unlock Your Hiring Potential with Effortless Candidate Discovery."
// //             }
// //             variant={"body1"}
// //           />
// //         </div>
// //         <div style={{ width: responsive.isMobile ? "100%" : "60%" }}>
// //           <VideoComponent />
// //         </div>
// //       </div>
// //       <div
// //         style={{
// //           background: `url(${polygon2}),linear-gradient(180deg, #C0BEFF 0%, #E3C8FF 100%)`,
// //           padding: "6.5rem 5.12rem",
// //           display: responsive.isMobile ? "" : "flex",
// //           alignItems: "center",
// //           backgroundSize: "cover",
// //         }}
// //       >
// //         {data.map((item, index) => (
// //           <div
// //             key={index}
// //             className={`animated-item ${
// //               showAnimation && index <= currentItemIndex
// //                 ? "item-animation"
// //                 : "item-hidden"
// //             }`}
// //             style={{
// //               width: "60%",
// //               display: "flex",
// //               justifyContent: "center",
// //               backgroundImage: `url(${item.image})`,
// //               backgroundSize: "cover",
// //               transition: "opacity 800ms ease-in-out", // Add the transition property
// //               opacity:
// //                 showAnimation && index <= currentItemIndex ? 1 : 0,
// //             }}
// //           >
// //             <div
// //               style={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 gap: "1.5rem",
// //               }}
// //             >
// //               <CustomAllTypography
// //                 name={item.item1}
// //                 variant={"h3"}
// //                 textcolor={"#CE1E25"}
// //               />
// //               <CustomAllTypography name={item.item2} variant={"h1"} />
// //               <CustomAllTypography name={item.item3} variant={"body1"} />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default KeyFeatures;

// import React, { useState, useEffect } from "react";
// import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
// import VideoComponent from "../components/VideoComponent";
// import useResponsiveStyles from "../../../utils/MediaQuery";
// import poly from "../../../assets/polygonpng.png";
// import polygon2 from "../../../assets/svg/polygon2.svg";
// import "./keyfeature.css";

// const KeyFeatures = () => {
//   const responsive = useResponsiveStyles();
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [currentItemIndex, setCurrentItemIndex] = useState(0);

//   const data = [
//     {
//       image: "hii",
//       item1: "Key Features",
//       item2: "Revolutionizing Recruitment",
//       item3:
//         "Say Goodbye to Scheduling Hassles and Find Your Perfect Candidate Instantly!",
//     },
//     {
//       image: "hello",
//       item1: "Key Features",
//       item2: "Accelerate Your Talent Search",
//       item3:
//         "Access a Vast Pool of Candidates, Find Your Ideal Match in No Time!",
//     },
//     {
//       image: "namaste",
//       item1: "Key Features",
//       item2: "Collaborate and Make Better Decisions",
//       item3:
//         "Share Interview Recordings Seamlessly with Your Team of Peers!",
//     },
//     {
//       image: "yess",
//       item1: "Key Features",
//       item2: "Exceptional Candidate Experience",
//       item3: "Elevate Recruitment with Seamless and Positive Interactions!",
//     },
//   ];

//   useEffect(() => {
//     let interval;

//     if (showAnimation) {
//       interval = setInterval(() => {
//         setCurrentItemIndex((prevIndex) =>
//           prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
//         );
//       }, 800); // Adjust the delay as needed
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [showAnimation, data.length]);

//   const handleSectionClick = () => {
//     setShowAnimation(true);
//   };

//   return (
//     <>
//       <div
//         style={{
//           background: `url(${poly}),linear-gradient(180deg, #605DEC 0%, #A5F 100%)`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           padding: responsive.isMobile ? "4rem 2rem" : "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           alignItems: "center",
//         }}
//         id="key-features"
//         className="key-features"
//         onClick={handleSectionClick}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1.5rem",
//             width: responsive.isMobile ? "100%" : "40%",
//           }}
//         >
//           <CustomAllTypography
//             name={"Introducing"}
//             variant={"h3"}
//             textcolor={"#36BF76"}
//           />
//           <CustomAllTypography name={"QwikConnect Platform"} variant={"h1"} />
//           <CustomAllTypography
//             name={
//               "Empowering Recruiters: Unlock Your Hiring Potential with Effortless Candidate Discovery."
//             }
//             variant={"body1"}
//           />
//         </div>
//         <div style={{ width: responsive.isMobile ? "100%" : "60%" }}>
//           <VideoComponent />
//         </div>
//       </div>
//       <div
//         style={{
//           background: `url(${polygon2}),linear-gradient(180deg, #C0BEFF 0%, #E3C8FF 100%)`,
//           padding: "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className={`animated-item ${
//               showAnimation && index === currentItemIndex
//                 ? "item-animation"
//                 : "item-hidden"
//             }`}
//             style={{
//               width: "60%",
//               display: "flex",
//               justifyContent: "center",
//               backgroundImage: `url(${item.image})`,
//               backgroundSize: "cover",
//               transition: "opacity 800ms ease-in-out", // Add the transition property
//               opacity:
//                 showAnimation && index === currentItemIndex ? 1 : 0,
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "1.5rem",
//               }}
//             >
//               <CustomAllTypography
//                 name={item.item1}
//                 variant={"h3"}
//                 textcolor={"#CE1E25"}
//               />
//               <CustomAllTypography name={item.item2} variant={"h1"} />
//               <CustomAllTypography name={item.item3} variant={"body1"} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default KeyFeatures;
// import React from "react";
// import poylgon1 from "../../../assets/svg/ploygon1.svg";
// import VideoComponent from "../components/VideoComponent";
// import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
// import useResponsiveStyles from "../../../utils/MediaQuery";
// import polygon2 from "../../../assets/svg/polygon2.svg";
// import poly from "../../../assets/polygonpng.png";
// import RatingSection from "../../dashboard/jobposting/RatingSection";
// import QuestionCard from "../../../components/admin/QuestionCard";
// import './keyfeature.css';

// const KeyFeatures = () => {
//   const responsive = useResponsiveStyles();
//   const data = [
//     {
//       image: "hii",
//       item1: "Key Features",
//       item2: "Revolutionizing Recruitment",
//       item3: "Say Goodbye to Scheduling Hassles and Find Your Perfect Candidate Instantly!"
//     },
//     {
//       image: "hello",
//       item1: "Key Features",
//       item2: "Accelerate Your Talent Search",
//       item3: "Access a Vast Pool of Candidates, Find Your Ideal Match in No Time!"
//     },
//     {
//       image: "namaste",
//       item1: "Key Features",
//       item2: "Collaborate and Make Better Decisions",
//       item3: "Share Interview Recordings Seamlessly with Your Team of Peers!"
//     },
//     {
//       image: "yess",
//       item1: "Key Features",
//       item2: "Exceptional Candidate Experience",
//       item3: "Elevate Recruitment with Seamless and Positive Interactions!"
//     }
//   ]
//   return (
//     <>
//       <div
//         style={{
//           background: `url(${poly}),linear-gradient(180deg, #605DEC 0%, #A5F 100%)`,
//           backgroundSize: "cover", // Adjust as needed
//           backgroundRepeat: "no-repeat",
//           padding: responsive.isMobile ? "4rem 2rem" : "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           // height: '100vh',
//           alignItems: "center",
//         }}
//         id="key-features"
//         className="key-features"
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1.5rem",
//             width: responsive.isMobile ? "100%" : "40%",
//           }}
//         >
//           <CustomAllTypography
//             name={"Introducing"}
//             variant={"h3"}
//             textcolor={"#36BF76"}
//           />
//           <CustomAllTypography name={"QwikConnect Platform"} variant={"h1"} />
//           <CustomAllTypography
//             name={
//               "Empowering Recruiters: Unlock Your Hiring Potential with Effortless Candidate Discovery."
//             }
//             variant={"body1"}
//           />
//         </div>
//         <div style={{ width: responsive.isMobile ? "100%" : "60%" }}>
//           <VideoComponent />
//         </div>
//       </div>
//       <div
//         style={{
//           background: `url(${polygon2}),linear-gradient(180deg, #C0BEFF 0%, #E3C8FF 100%)`,
//           padding: "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         {/* <div
//           style={{
//             width: "60%",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           hii
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1.5rem",
//           }}
//         >
//           <CustomAllTypography
//             name={"Key Features"}
//             variant={"h3"}
//             textcolor={"#CE1E25"}
//           />
//           <CustomAllTypography
//             name={"Revolutionizing Recruitment"}
//             variant={"h1"}
//           />
//           <CustomAllTypography
//             name={
//               "Say Goodbye to Scheduling Hassles and Find Your Perfect Candidate Instantly!"
//             }
//             variant={"body1"}
//           />
//         </div> */}
//           {data.map((item, index) => (
//         <div
//           key={index}
//           className={`animated-item ${index > 0 ? 'item-animation' : ''}`}
//           style={{
//             width: "60%",
//             display: "flex",
//             justifyContent: "center",
//             backgroundImage: `url(${item.image})`, // Set the image dynamically
//             backgroundSize: "cover",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "1.5rem",
//             }}
//           >
//             <CustomAllTypography
//               name={item.item1}
//               variant={"h3"}
//               textcolor={"#CE1E25"}
//             />
//             <CustomAllTypography
//               name={item.item2}
//               variant={"h1"}
//             />
//             <CustomAllTypography
//               name={item.item3}
//               variant={"body1"}
//             />
//           </div>
//         </div>
//       ))}
//       </div>
//     </>
//   );
// };

// export default KeyFeatures;

// import React, { useState, useEffect } from "react";
// import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
// import VideoComponent from "../components/VideoComponent";
// import useResponsiveStyles from "../../../utils/MediaQuery";
// import poly from "../../../assets/polygonpng.png";
// import polygon2 from "../../../assets/svg/polygon2.svg";
// import "./keyfeature.css";

// const KeyFeatures = () => {
//   const responsive = useResponsiveStyles();
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [currentItemIndex, setCurrentItemIndex] = useState(0);

//   const data = [
//     {
//       image: "hii",
//       item1: "Key Features",
//       item2: "Revolutionizing Recruitment",
//       item3:
//         "Say Goodbye to Scheduling Hassles and Find Your Perfect Candidate Instantly!",
//     },
//     {
//       image: "hello",
//       item1: "Key Features",
//       item2: "Accelerate Your Talent Search",
//       item3:
//         "Access a Vast Pool of Candidates, Find Your Ideal Match in No Time!",
//     },
//     {
//       image: "namaste",
//       item1: "Key Features",
//       item2: "Collaborate and Make Better Decisions",
//       item3:
//         "Share Interview Recordings Seamlessly with Your Team of Peers!",
//     },
//     {
//       image: "yess",
//       item1: "Key Features",
//       item2: "Exceptional Candidate Experience",
//       item3: "Elevate Recruitment with Seamless and Positive Interactions!",
//     },
//   ];

//   useEffect(() => {
//     if (showAnimation && currentItemIndex < data.length - 1) {
//       const timeout = setTimeout(() => {
//         setCurrentItemIndex((prevIndex) => prevIndex + 1);
//       }, 800); // Adjust the delay as needed

//       return () => clearTimeout(timeout);
//     }
//   }, [showAnimation, currentItemIndex, data.length]);

//   const handleSectionClick = () => {
//     setShowAnimation(true);
//   };

//   return (
//     <>
//       <div
//         style={{
//           background: `url(${poly}),linear-gradient(180deg, #605DEC 0%, #A5F 100%)`,
//           backgroundSize: "cover", // Adjust as needed
//           backgroundRepeat: "no-repeat",
//           padding: responsive.isMobile ? "4rem 2rem" : "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           alignItems: "center",
//         }}
//         id="key-features"
//         className="key-features"
//         onClick={handleSectionClick}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1.5rem",
//             width: responsive.isMobile ? "100%" : "40%",
//           }}
//         >
//           <CustomAllTypography
//             name={"Introducing"}
//             variant={"h3"}
//             textcolor={"#36BF76"}
//           />
//           <CustomAllTypography name={"QwikConnect Platform"} variant={"h1"} />
//           <CustomAllTypography
//             name={
//               "Empowering Recruiters: Unlock Your Hiring Potential with Effortless Candidate Discovery."
//             }
//             variant={"body1"}
//           />
//         </div>
//         <div style={{ width: responsive.isMobile ? "100%" : "60%" }}>
//           <VideoComponent />
//         </div>
//       </div>
//       <div
//         style={{
//           background: `url(${polygon2}),linear-gradient(180deg, #C0BEFF 0%, #E3C8FF 100%)`,
//           padding: "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className={`animated-item ${
//               showAnimation && index <= currentItemIndex ? "item-animation" : ""
//             }`}
//             style={{
//               width: "60%",
//               display: "flex",
//               justifyContent: "center",
//               backgroundImage: `url(${item.image})`, // Set the image dynamically
//               backgroundSize: "cover",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "1.5rem",
//               }}
//             >
//               <CustomAllTypography
//                 name={item.item1}
//                 variant={"h3"}
//                 textcolor={"#CE1E25"}
//               />
//               <CustomAllTypography name={item.item2} variant={"h1"} />
//               <CustomAllTypography name={item.item3} variant={"body1"} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default KeyFeatures;

// import React, { useState, useEffect } from "react";
// import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
// import VideoComponent from "../components/VideoComponent";
// import useResponsiveStyles from "../../../utils/MediaQuery";
// import poly from "../../../assets/polygonpng.png";
// import polygon2 from "../../../assets/svg/polygon2.svg";
// import "./keyfeature.css";

// const KeyFeatures = () => {
//   const responsive = useResponsiveStyles();
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [currentItemIndex, setCurrentItemIndex] = useState(0);

//   const data = [
//     {
//       image: "hii",
//       item1: "Key Features",
//       item2: "Revolutionizing Recruitment",
//       item3:
//         "Say Goodbye to Scheduling Hassles and Find Your Perfect Candidate Instantly!",
//     },
//     {
//       image: "hello",
//       item1: "Key Features",
//       item2: "Accelerate Your Talent Search",
//       item3:
//         "Access a Vast Pool of Candidates, Find Your Ideal Match in No Time!",
//     },
//     {
//       image: "namaste",
//       item1: "Key Features",
//       item2: "Collaborate and Make Better Decisions",
//       item3:
//         "Share Interview Recordings Seamlessly with Your Team of Peers!",
//     },
//     {
//       image: "yess",
//       item1: "Key Features",
//       item2: "Exceptional Candidate Experience",
//       item3: "Elevate Recruitment with Seamless and Positive Interactions!",
//     },
//   ];

//   useEffect(() => {
//     let interval;

//     if (showAnimation) {
//       interval = setInterval(() => {
//         setCurrentItemIndex((prevIndex) =>
//           prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
//         );
//       }, 800); // Adjust the delay as needed
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [showAnimation, data.length]);

//   const handleSectionClick = () => {
//     setShowAnimation(true);
//   };

//   return (
//     <>
//       <div
//         style={{
//           background: `url(${poly}),linear-gradient(180deg, #605DEC 0%, #A5F 100%)`,
//           backgroundSize: "cover", // Adjust as needed
//           backgroundRepeat: "no-repeat",
//           padding: responsive.isMobile ? "4rem 2rem" : "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           alignItems: "center",
//         }}
//         id="key-features"
//         className="key-features"
//         onClick={handleSectionClick}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1.5rem",
//             width: responsive.isMobile ? "100%" : "40%",
//           }}
//         >
//           <CustomAllTypography
//             name={"Introducing"}
//             variant={"h3"}
//             textcolor={"#36BF76"}
//           />
//           <CustomAllTypography name={"QwikConnect Platform"} variant={"h1"} />
//           <CustomAllTypography
//             name={
//               "Empowering Recruiters: Unlock Your Hiring Potential with Effortless Candidate Discovery."
//             }
//             variant={"body1"}
//           />
//         </div>
//         <div style={{ width: responsive.isMobile ? "100%" : "60%" }}>
//           <VideoComponent />
//         </div>
//       </div>
//       <div
//         style={{
//           background: `url(${polygon2}),linear-gradient(180deg, #C0BEFF 0%, #E3C8FF 100%)`,
//           padding: "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className={`animated-item ${
//               showAnimation && index <= currentItemIndex ? "item-animation" : ""
//             }`}
//             style={{
//               width: "60%",
//               display: "flex",
//               justifyContent: "center",
//               backgroundImage: `url(${item.image})`, // Set the image dynamically
//               backgroundSize: "cover",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "1.5rem",
//               }}
//             >
//               <CustomAllTypography
//                 name={item.item1}
//                 variant={"h3"}
//                 textcolor={"#CE1E25"}
//               />
//               <CustomAllTypography name={item.item2} variant={"h1"} />
//               <CustomAllTypography name={item.item3} variant={"body1"} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default KeyFeatures;

// import React, { useState, useEffect } from "react";
// import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
// import VideoComponent from "../components/VideoComponent";
// import useResponsiveStyles from "../../../utils/MediaQuery";
// import poly from "../../../assets/polygonpng.png";
// import polygon2 from "../../../assets/svg/polygon2.svg";
// import "./keyfeature.css";

// const KeyFeatures = () => {
//   const responsive = useResponsiveStyles();
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [currentItemIndex, setCurrentItemIndex] = useState(0);

//   const data = [
//     {
//       image: "hii",
//       item1: "Key Features",
//       item2: "Revolutionizing Recruitment",
//       item3:
//         "Say Goodbye to Scheduling Hassles and Find Your Perfect Candidate Instantly!",
//     },
//     {
//       image: "hello",
//       item1: "Key Features",
//       item2: "Accelerate Your Talent Search",
//       item3:
//         "Access a Vast Pool of Candidates, Find Your Ideal Match in No Time!",
//     },
//     {
//       image: "namaste",
//       item1: "Key Features",
//       item2: "Collaborate and Make Better Decisions",
//       item3:
//         "Share Interview Recordings Seamlessly with Your Team of Peers!",
//     },
//     {
//       image: "yess",
//       item1: "Key Features",
//       item2: "Exceptional Candidate Experience",
//       item3: "Elevate Recruitment with Seamless and Positive Interactions!",
//     },
//   ];

//   useEffect(() => {
//     let interval;

//     if (showAnimation && currentItemIndex < data.length) {
//       interval = setInterval(() => {
//         setCurrentItemIndex((prevIndex) =>
//           prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
//         );
//       }, 800); // Adjust the delay as needed
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [showAnimation, currentItemIndex, data.length]);

//   const handleSectionClick = () => {
//     setShowAnimation(true);
//   };

//   return (
//     <>
//       <div
//         style={{
//           background: `url(${poly}),linear-gradient(180deg, #605DEC 0%, #A5F 100%)`,
//           backgroundSize: "cover", // Adjust as needed
//           backgroundRepeat: "no-repeat",
//           padding: responsive.isMobile ? "4rem 2rem" : "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           alignItems: "center",
//         }}
//         id="key-features"
//         className="key-features"
//         onClick={handleSectionClick}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1.5rem",
//             width: responsive.isMobile ? "100%" : "40%",
//           }}
//         >
//           <CustomAllTypography
//             name={"Introducing"}
//             variant={"h3"}
//             textcolor={"#36BF76"}
//           />
//           <CustomAllTypography name={"QwikConnect Platform"} variant={"h1"} />
//           <CustomAllTypography
//             name={
//               "Empowering Recruiters: Unlock Your Hiring Potential with Effortless Candidate Discovery."
//             }
//             variant={"body1"}
//           />
//         </div>
//         <div style={{ width: responsive.isMobile ? "100%" : "60%" }}>
//           <VideoComponent />
//         </div>
//       </div>
//       <div
//         style={{
//           background: `url(${polygon2}),linear-gradient(180deg, #C0BEFF 0%, #E3C8FF 100%)`,
//           padding: "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         {data.slice(0, currentItemIndex).map((item, index) => (
//           <div
//             key={index}
//             className={`animated-item`}
//             style={{
//               width: "60%",
//               display: "flex",
//               justifyContent: "center",
//               backgroundImage: `url(${item.image})`, // Set the image dynamically
//               backgroundSize: "cover",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "1.5rem",
//               }}
//             >
//               <CustomAllTypography
//                 name={item.item1}
//                 variant={"h3"}
//                 textcolor={"#CE1E25"}
//               />
//               <CustomAllTypography name={item.item2} variant={"h1"} />
//               <CustomAllTypography name={item.item3} variant={"body1"} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default KeyFeatures;

// import React, { useState, useEffect } from "react";
// import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
// import VideoComponent from "../components/VideoComponent";
// import useResponsiveStyles from "../../../utils/MediaQuery";
// import poly from "../../../assets/polygonpng.png";
// import polygon2 from "../../../assets/svg/polygon2.svg";
// import "./keyfeature.css";

// const KeyFeatures = () => {
//   const responsive = useResponsiveStyles();
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [currentItemIndex, setCurrentItemIndex] = useState(0);

//   const data = [
//     {
//       image: "hii",
//       item1: "Key Features",
//       item2: "Revolutionizing Recruitment",
//       item3:
//         "Say Goodbye to Scheduling Hassles and Find Your Perfect Candidate Instantly!",
//     },
//     {
//       image: "hello",
//       item1: "Key Features",
//       item2: "Accelerate Your Talent Search",
//       item3:
//         "Access a Vast Pool of Candidates, Find Your Ideal Match in No Time!",
//     },
//     {
//       image: "namaste",
//       item1: "Key Features",
//       item2: "Collaborate and Make Better Decisions",
//       item3:
//         "Share Interview Recordings Seamlessly with Your Team of Peers!",
//     },
//     {
//       image: "yess",
//       item1: "Key Features",
//       item2: "Exceptional Candidate Experience",
//       item3: "Elevate Recruitment with Seamless and Positive Interactions!",
//     },
//   ];

//   useEffect(() => {
//     let interval;

//     if (showAnimation && currentItemIndex < data.length) {
//       interval = setInterval(() => {
//         setCurrentItemIndex((prevIndex) =>
//           prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
//         );
//       }, 800); // Adjust the delay as needed
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [showAnimation, currentItemIndex, data.length]);

//   const handleSectionClick = () => {
//     setShowAnimation(true);
//   };

//   return (
//     <>
//       <div
//         style={{
//           background: `url(${poly}),linear-gradient(180deg, #605DEC 0%, #A5F 100%)`,
//           backgroundSize: "cover", // Adjust as needed
//           backgroundRepeat: "no-repeat",
//           padding: responsive.isMobile ? "4rem 2rem" : "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           alignItems: "center",
//         }}
//         id="key-features"
//         className="key-features"
//         onClick={handleSectionClick}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1.5rem",
//             width: responsive.isMobile ? "100%" : "40%",
//           }}
//         >
//           <CustomAllTypography
//             name={"Introducing"}
//             variant={"h3"}
//             textcolor={"#36BF76"}
//           />
//           <CustomAllTypography name={"QwikConnect Platform"} variant={"h1"} />
//           <CustomAllTypography
//             name={
//               "Empowering Recruiters: Unlock Your Hiring Potential with Effortless Candidate Discovery."
//             }
//             variant={"body1"}
//           />
//         </div>
//         <div style={{ width: responsive.isMobile ? "100%" : "60%" }}>
//           <VideoComponent />
//         </div>
//       </div>
//       <div
//         style={{
//           background: `url(${polygon2}),linear-gradient(180deg, #C0BEFF 0%, #E3C8FF 100%)`,
//           padding: "6.5rem 5.12rem",
//           display: responsive.isMobile ? "" : "flex",
//           alignItems: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className={`animated-item ${
//               showAnimation && index === currentItemIndex
//                 ? "item-animation"
//                 : "item-hidden"
//             }`}
//             style={{
//               width: "60%",
//               display: "flex",
//               justifyContent: "center",
//               backgroundImage: `url(${item.image})`, // Set the image dynamically
//               backgroundSize: "cover",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "1.5rem",
//               }}
//             >
//               <CustomAllTypography
//                 name={item.item1}
//                 variant={"h3"}
//                 textcolor={"#CE1E25"}
//               />
//               <CustomAllTypography name={item.item2} variant={"h1"} />
//               <CustomAllTypography name={item.item3} variant={"body1"} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default KeyFeatures;

//---it's done -----
import { useState, useEffect } from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import poly from "../../../assets/polygonpng.png";
import polygon2 from "../../../assets/svg/polygon2.svg";
import "./keyfeature.css";
import VideoCall from '../../../assets/marketing/VideoKey.png'
import VideoImg from '../../../assets/marketing/VideoCall.png'
import RatingPara from '../../../assets/marketing/RatingPara.png'
import ReviewRating from '../../../assets/marketing/ReviewRating.png'
import QuestionCardImage from '../../../assets/marketing/QuestionCardImage.png'

const KeyFeatures = () => {
  const responsive = useResponsiveStyles();
  const [showAnimation, setShowAnimation] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const data = [
    {
      image: RatingPara,
      item1: "Key Features",
      item2: "Revolutionizing Recruitment",
      item3:
        "Say Goodbye to Scheduling Hassles and Find Your Perfect Candidate Instantly!",
    },
    {
      image: QuestionCardImage,
      item1: "Key Features",
      item2: "Accelerate Your Talent Search",
      item3:
        "Access a Vast Pool of Candidates, Find Your Ideal Match in No Time!",
    },
    {
      image: ReviewRating,
      item1: "Key Features",
      item2: "Collaborate and Make Better Decisions",
      item3: "Share Interview Recordings Seamlessly with Your Team of Peers!",
    },
    {
      image: VideoImg,
      item1: "Key Features",
      item2: "Exceptional Candidate Experience",
      item3: "Elevate Recruitment with Seamless and Positive Interactions!",
    },
  ];

  useEffect(() => {
    let interval;
    console.log("show", showAnimation);
    if (showAnimation) {
      interval = setInterval(() => {
        setCurrentItemIndex((prevIndex) =>
          prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
        );
        if (currentItemIndex === data.length - 1) {
          // Animation completed on all indexes, reset showAnimation to false
          setShowAnimation(false);
        }
      }, 800); // Adjust the delay as needed
    }

    return () => {
      clearInterval(interval);
    };
  }, [showAnimation, data.length, currentItemIndex]);

  const handleSectionClick = () => {
    setCurrentItemIndex(1);
    setShowAnimation(true);
  };

  return (
    <>
      <div
        style={{
          background: `url(${poly}),linear-gradient(180deg, #605DEC 0%, #A5F 100%)`,
          backgroundSize: "cover", // Adjust as needed
          backgroundRepeat: "no-repeat",
          padding: responsive.isMobile ? "4rem 2rem" : "6.5rem 5.12rem",
          display: "flex",
          alignItems: "center",
          flexDirection:  responsive.isMobile ? "column" :'row',
          gap: '10px'
        }}
        id="key-features"
        className="key-features"
        // onClick={handleSectionClick}
      >
        <div
          style={{
            display: 'grid',
            gridColumn: '2',
            gap: "1rem",
            width: responsive.isMobile ? "100%" : "40%",
          }}
        >
          <CustomAllTypography
            name={"Introducing"}
            variant={"h3"}
            textcolor={"#36BF76"}
          />
          <CustomAllTypography name={"QwikConnect Platform"} variant={"h1"} textcolor = {"white"}/>
          <CustomAllTypography
            name={
              "Empowering Recruiters: Unlock Your Hiring Potential with Effortless Candidate Discovery."
            }
            variant={"body1"}
            textcolor = {"white"}
          />
        </div>
        <div style={{ width: responsive.isMobile ? "100%" : "60%",  marginLeft: 'auto'}}>
          <img src={VideoCall} width={'100%'} style={{ marginLeft: responsive.isMobile ? "0%" : "10%"}}></img>
        </div>
      </div>

      <div
        style={{
          background: `url(${polygon2}),linear-gradient(180deg, #C0BEFF 0%, #E3C8FF 100%)`,
          padding: "1rem 0",
          // display: responsive.isMobile ? "" : "flex",
          alignItems: "center",
          backgroundSize: "cover",
          
        }}
        onClick={handleSectionClick}
      >
        {
                 showAnimation ===false &&<div style={{
                  width: "100%",
                  display: "flex",
                  gap: '20px',
                  minHeight: responsive.isMobile? '400px' : '600px',
                  flexDirection: responsive.isMobile? 'column' : 'row',
                  transition: "opacity 1s ease-in-out, transform 4s ease-in-out",
                }}>
                  <div style={{width: responsive.isMobile? '100%' : '100%', display: "flex", justifyContent: "center", alignItems: 'center' }}>
                  <img src={data[currentItemIndex].image} alt="item" style={{ maxWidth: '100%', height: 'auto' , maxHeight: responsive.isMobile? '400px' :""}} />
                  </div>
                  <div style={{width: responsive.isMobile? '90%' : '100%', display: "flex", flexDirection: "column", gap: "1.5rem", margin: 'auto' , }}>
                    <CustomAllTypography
                      name={data[currentItemIndex].item1}
                      variant={"h3"}
                      textcolor={"#CE1E25"}
                    />
                    <CustomAllTypography
                      name={data[currentItemIndex].item2}
                      variant={"h1"}
                    />
                    <CustomAllTypography
                      name={data[currentItemIndex].item3}
                      variant={"body1"}
                    />
                  </div>
                </div>
                
        }
       {showAnimation=== true&& <div
          className={`animated-item ${
            showAnimation ? "item-animation" : "item-hidden"
          }`}
          style={{
            width: "100%",
            gap: '20px',
            display: "flex",
            minHeight: responsive.isMobile? '400px' : '600px',
            flexDirection: responsive.isMobile? 'column' : 'row',
            transition: "opacity 1s ease-in-out, transform 4s ease-in-out",
            opacity: showAnimation ? 1 : 0,
            visibility: showAnimation ? "visible" : "hidden",
            transform: `translateY(${showAnimation ? 0 : 20}px)`, // Adjust the translateY value
          }}
        >
              <div style={{ width: responsive.isMobile? '100%' : '100%', display: "flex", justifyContent: "center", alignItems: 'center' }}>
              <img src={data[currentItemIndex].image} alt="item" style={{ maxWidth: '100%', height: 'auto' , maxHeight: responsive.isMobile? '400px' :""}} />
                  </div>
                  <div style={{width: responsive.isMobile? '90%' : '100%', display: "flex", flexDirection: "column", gap: "1.5rem", margin: 'auto' ,}}>
                    <CustomAllTypography
                      name={data[currentItemIndex].item1}
                      variant={"h3"}
                      textcolor={"#CE1E25"}
                    />
                    <CustomAllTypography
                      name={data[currentItemIndex].item2}
                      variant={"h1"}
                    />
                    <CustomAllTypography
                      name={data[currentItemIndex].item3}
                      variant={"body1"}
                    />
                  </div>
        </div>}
      </div>
    </>
  );
};

export default KeyFeatures;
