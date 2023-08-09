import React from "react";

const QuestionCardIconHorizontal = ({
  height = 16,
  width = 16,
  className,
  onClick,
}) => {
  return (
    <svg
      width="47"
      height="11"
      viewBox="0 0 47 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="11"
        width="3"
        height="47"
        rx="1.5"
        transform="rotate(-90 0 11)"
        fill="#F4F3FE"
      />
      <rect
        x="9"
        y="3"
        width="3"
        height="32"
        rx="1.5"
        transform="rotate(-90 9 3)"
        fill="#F4F3FE"
      />
    </svg>
  );
};
export default QuestionCardIconHorizontal;
