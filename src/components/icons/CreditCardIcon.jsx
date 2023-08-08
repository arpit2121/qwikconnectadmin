import React from "react";

const CreditCardIcon = ({
  onClick = () => {},
  height = 16,
  width = 16,
  className,
  color = "#25282B",
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4_5704)">
        <path
          d="M13.9998 2.66675H1.99984C1.26346 2.66675 0.666504 3.2637 0.666504 4.00008V12.0001C0.666504 12.7365 1.26346 13.3334 1.99984 13.3334H13.9998C14.7362 13.3334 15.3332 12.7365 15.3332 12.0001V4.00008C15.3332 3.2637 14.7362 2.66675 13.9998 2.66675Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokelinejoin="round"
        />
        <path
          d="M0.666504 6.66675H15.3332"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokelinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_5704">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CreditCardIcon;
