{
  /* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#25282B" strokeWidth="2" strokeLinecap="round" strokelinejoin="round"/>
  <path d="M9 22V12H15V22" stroke="#25282B" strokeWidth="2" strokeLinecap="round" strokelinejoin="round"/>
  </svg> */
}
import React from "react";

const InboxIcon = ({
  onClick = () => {},
  height = 24,
  width = 24,
  className,
  color = "#25282B",
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 12H16L14 15H10L8 12H2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokelinejoin="round"
      />
      <path
        d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11V5.11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokelinejoin="round"
      />
    </svg>
  );
};
export default InboxIcon;
