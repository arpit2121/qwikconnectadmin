import React from "react";

function UserPlusIcon({ height = 32, width = 32, className,style }) {
  return (
    <svg
    style={style}
    width={height}
    height={width}
    className={className}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_184_5101)">
        <path
          d="M21.6134 28.2422V25.5755C21.6134 24.161 21.0515 22.8045 20.0513 21.8043C19.0511 20.8041 17.6945 20.2422 16.28 20.2422H6.94669C5.53221 20.2422 4.17565 20.8041 3.17546 21.8043C2.17526 22.8045 1.61336 24.161 1.61336 25.5755V28.2422"
          stroke="#AA55FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.6134 14.9089C14.5589 14.9089 16.9467 12.521 16.9467 9.57552C16.9467 6.63 14.5589 4.24219 11.6134 4.24219C8.66784 4.24219 6.28003 6.63 6.28003 9.57552C6.28003 12.521 8.66784 14.9089 11.6134 14.9089Z"
          stroke="#AA55FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.9467 10.9089V18.9089"
          stroke="#AA55FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30.9467 14.9089H22.9467"
          stroke="#AA55FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_184_5101">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.280029 0.242188)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default UserPlusIcon;
