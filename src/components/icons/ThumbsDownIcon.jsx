import React from "react";

function ThumbsDownIcon({
  height = 24,
  width = 24,
  className,
  onClick = () => {},
}) {
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
        d="M17 2.00012H19.67C20.236 1.99011 20.7859 2.18825 21.2154 2.55694C21.6449 2.92562 21.9241 3.43918 22 4.00012V11.0001C21.9241 11.5611 21.6449 12.0746 21.2154 12.4433C20.7859 12.812 20.236 13.0101 19.67 13.0001H17M10 15.0001V19.0001C10 19.7958 10.3161 20.5588 10.8787 21.1214C11.4413 21.684 12.2044 22.0001 13 22.0001L17 13.0001V2.00012H5.72C5.23767 1.99466 4.76962 2.16371 4.40209 2.47611C4.03457 2.78851 3.79232 3.22321 3.72 3.70012L2.34 12.7001C2.29649 12.9868 2.31583 13.2794 2.39666 13.5579C2.47749 13.8363 2.6179 14.0938 2.80814 14.3126C2.99839 14.5314 3.23392 14.7062 3.49843 14.8249C3.76294 14.9436 4.05009 15.0034 4.34 15.0001H10Z"
        stroke="#F93232"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ThumbsDownIcon;
