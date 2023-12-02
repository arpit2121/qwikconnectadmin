import React from "react";

const EditIcon = ({onClick}) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={()=>onClick()}
    >
      <path
        d="M17.6392 3.5C17.9019 3.23735 18.2137 3.02901 18.5568 2.88687C18.9 2.74473 19.2678 2.67157 19.6392 2.67157C20.0107 2.67157 20.3785 2.74473 20.7216 2.88687C21.0648 3.02901 21.3766 3.23735 21.6392 3.5C21.9019 3.76264 22.1102 4.07444 22.2523 4.4176C22.3945 4.76077 22.4676 5.12856 22.4676 5.5C22.4676 5.87143 22.3945 6.23923 22.2523 6.58239C22.1102 6.92555 21.9019 7.23735 21.6392 7.5L8.13922 21L2.63922 22.5L4.13922 17L17.6392 3.5Z"
        stroke="#605DEC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
