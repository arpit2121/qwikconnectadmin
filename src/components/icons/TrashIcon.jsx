import React from "react";

const TrashIcon = ({
  hadelDeleteClick,
  height = 24,
  width = 24,
  className,
  color = "#DCDCDC",
}) => {
  return (
    <svg
    onClick={()=>hadelDeleteClick()}
    className={className}
    width={width}
    height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.40625 6H5.40625H21.4062"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokelinejoin="round"
      />
      <path
        d="M8.40625 6V4C8.40625 3.46957 8.61696 2.96086 8.99204 2.58579C9.36711 2.21071 9.87582 2 10.4062 2H14.4062C14.9367 2 15.4454 2.21071 15.8205 2.58579C16.1955 2.96086 16.4062 3.46957 16.4062 4V6M19.4062 6V20C19.4062 20.5304 19.1955 21.0391 18.8205 21.4142C18.4454 21.7893 17.9367 22 17.4062 22H7.40625C6.87582 22 6.36711 21.7893 5.99204 21.4142C5.61696 21.0391 5.40625 20.5304 5.40625 20V6H19.4062Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokelinejoin="round"
      />
      <path
        d="M10.4062 11V17"
        stroke="#DCDCDC"
        strokeWidth="2"
        strokeLinecap="round"
        strokelinejoin="round"
      />
      <path
        d="M14.4062 11V17"
        stroke="#DCDCDC"
        strokeWidth="2"
        strokeLinecap="round"
        strokelinejoin="round"
      />
    </svg>
  );
};
export default TrashIcon;
