import React from "react";
import { useNavigate } from "react-router-dom";

const LinkBar = ({ linkArray = [] }) => {
  const navigate = useNavigate();

  const onLinkClick = (link) => {
    navigate(link);
  };
  return (
    <div>
      <ul style={{display:'flex',gap:'2rem'}}>
        {linkArray?.map((elem, index) => (
          <li
            style={{ listStyleType: index == 0 ? "none" : "unset",cursor:"pointer"}}
            onClick={() => onLinkClick(elem?.path)}
            key={index}
          >
            {elem?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkBar;
