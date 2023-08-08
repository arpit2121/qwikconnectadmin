import React from "react";

const APIIcon = ({
  onClick = () => {},
  height = 16,
  width = 16,
  className,
  color = "#344054",
}) => {
  return (
    <svg
      width={height}
      onClick={onClick}
      height={width}
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6668 12L14.6668 8L10.6668 4M5.3335 4L1.3335 8L5.3335 12"
        stroke="#344054"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokelinejoin="round"
      />
    </svg>
  );
};
export default APIIcon;
