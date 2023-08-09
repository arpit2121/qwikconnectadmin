import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const Checkbox = ({  props}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
    const disabled = false
  const toggleChecked = (e) => {
    e.preventDefault(); // Prevents default right-click menu
    if (!disabled) {
      setIsChecked(!isChecked);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        tabIndex={disabled ? undefined : 0} // Add tabIndex only when not disabled
        onClick={() => setIsChecked(!isChecked)} // Toggle on regular click
        onContextMenu={toggleChecked} // Toggle on right-click
        onMouseEnter={() => setIsHovered(!disabled && true)}
        onMouseLeave={() => setIsHovered(!disabled && false)}
        onFocus={() => setIsFocused(!disabled && true)}
        onBlur={() => setIsFocused(!disabled && false)}
      >
        <div
          onClick={() => setIsChecked(!isChecked)} // Toggle on regular click
          onContextMenu={toggleChecked} // Toggle on right-click
          onMouseEnter={() => setIsHovered(!disabled && true)}
          onMouseLeave={() => setIsHovered(!disabled && false)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "1.5rem",
            height: "1.5rem",
            backgroundColor: disabled
              ? "#D4D4DE"
              : isChecked
              ? "black"
              : "#D4D4DE",
            borderRadius: "0.25rem",
            padding: "0.25rem 0.25rem 6px 0.25rem",
            justifyContent: "center",
            alignItems: "center",
            cursor: disabled ? "not-allowed" : "pointer",
            boxShadow:
              isHovered && !disabled ? "0 0 5px rgba(0, 0, 0, 0.3)" : "none",
            outline: isFocused && !disabled ? "2px solid #F845FC" : "none",
          }}
        >
          {isChecked && (
            <span
              style={{
                display: "inline-block",
                transform: "rotate(45deg)",
                height: "16px",
                width: "7px",
                borderBottom: disabled?'':"4px solid white",
                borderRight: disabled?'':"4px solid white",
              }}
            ></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
