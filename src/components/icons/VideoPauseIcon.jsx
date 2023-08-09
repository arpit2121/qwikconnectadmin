import React from "react";

const VideoPauseIcon = ({
  onClick = () => {},
  height = 30,
  width = 31,
  className,
  color = "#25282B",
  style = {},
}) => {
  return (
    <svg
      onClick={onClick}
      style={style}
      width={height}
      height={width}
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
        stroke="#25282B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default VideoPauseIcon;
