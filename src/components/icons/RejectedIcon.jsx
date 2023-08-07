import React from "react";

const RejectedIcon = ({ height = 32, width = 33, className, onClick,style }) => {
  return (
    <svg
    onClick={onClick}
    className={className}
    width={width}
    height={height}
    style={style}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_184_4814)">
        <path
          d="M21.8335 28V25.3333C21.8335 23.9188 21.2716 22.5623 20.2714 21.5621C19.2712 20.5619 17.9147 20 16.5002 20H7.16683C5.75234 20 4.39579 20.5619 3.39559 21.5621C2.3954 22.5623 1.8335 23.9188 1.8335 25.3333V28"
          stroke="#FF1725"
          strokeWidth="2"
          strokeLinecap="round"
          strokelinejoin="round"
        />
        <path
          d="M11.8333 14.6667C14.7789 14.6667 17.1667 12.2789 17.1667 9.33333C17.1667 6.38781 14.7789 4 11.8333 4C8.88781 4 6.5 6.38781 6.5 9.33333C6.5 12.2789 8.88781 14.6667 11.8333 14.6667Z"
          stroke="#FF1725"
          strokeWidth="2"
          strokeLinecap="round"
          strokelinejoin="round"
        />
        <path
          d="M24.5 10.6667L31.1667 17.3334"
          stroke="#FF1725"
          strokeWidth="2"
          strokeLinecap="round"
          strokelinejoin="round"
        />
        <path
          d="M31.1667 10.6667L24.5 17.3334"
          stroke="#FF1725"
          strokeWidth="2"
          strokeLinecap="round"
          strokelinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_184_4814">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default RejectedIcon;
