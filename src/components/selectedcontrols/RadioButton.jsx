import React, { useState } from 'react';

const RadioButton = ({ props }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const disabled = true

  const toggleChecked = () => {
    if (!disabled) {
      setIsChecked(!isChecked);
    }
  };

  return (
    <div style={{display:'flex'}}>
        <div
      tabIndex={disabled ? undefined : 0} // Add tabIndex only when not disabled
      onClick={toggleChecked}
      onMouseEnter={() => setIsHovered(!disabled && true)}
      onMouseLeave={() => setIsHovered(!disabled && false)}
      onFocus={() => setIsFocused(!disabled && true)}
      onBlur={() => setIsFocused(!disabled && false)}
    >
      <div
        onClick={toggleChecked}
        onMouseEnter={() => setIsHovered(!disabled && true)}
        onMouseLeave={() => setIsHovered(!disabled && false)}
        style={{
          display: 'flex',
          width: '1.5rem',
          height: '1.5rem',
          border:isChecked?'1px solid black':'',
          backgroundColor: disabled
            ? '#D4D4DE'
            : isChecked
            ? 'white'
            : '#D4D4DE',
          borderRadius: '50%',
          padding: '0.25rem',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: disabled ? 'not-allowed' : 'pointer',
          boxShadow: isHovered && !disabled ? '0 0 5px rgba(0, 0, 0, 0.3)' : 'none',
          outline: isFocused && !disabled ? '2px solid #F845FC' : 'none',
        }}
      >
        {isChecked && (
          <span
            style={{
              height: '1rem',
              width: '1rem',
              backgroundColor: disabled ? '#9E9E9E' : '#202020',
              borderRadius: '50%',
              transition: '.5s',
            }}
          ></span>
        )}
      </div>
    </div>
    </div>
  );
};

export default RadioButton;
