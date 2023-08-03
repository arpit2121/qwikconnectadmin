import React, { useState } from 'react';
import ErrorIcon from '../../assets/cancel.svg';
import WarningIcon from '../../assets/cancel.svg';
import SuccessIcon from '../../assets/cancel.svg';
import LoadingIcon from '../../assets/cancel.svg';
import CustomAllTypography from '../typography/CustomTypograpgy';

const CommonCustomizedTextField = (props) => {
  const containerStyles = {
    padding: '1rem 1.25rem',
    borderRadius: '14px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    outline: 'none',
    backgroundColor: '#F7F7FD',
    '&:hover': {
      border: '1px solid #E8E6F8',
    },
    '&:focus-within': {
      border: '1px solid #605DEC',
    },
    ...(props.error && { border: '1px solid #FFD8D8' }),
    ...(props.warning && { border: '1px solid #FFEAC1' }),
  };

  const iconStyles = {
    color: '#212121',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '0.5rem',
  };

  const textBoxStyles = {
    height: '1.5rem',
    width: '100%',
    borderRadius: '14px',
    border: 'none',
    outline: 'none',
    color: '#212121',
    paddingLeft: props.startIcon ? '0.62rem' : '0',
    paddingRight: props.endIcon ? '0.62rem' : '0',
    backgroundColor: props.error ? '#FFD8D8' : props.warning ? '#FFEAC1' : '',
  };

  const textfieldStatusBoxStyles = {
    paddingTop: '0.5rem',
    height: '1rem',
    display: 'flex',
    alignItems: 'center',
  };

  const inputRef = React.createRef();

  const [isFocused, setIsFocused] = useState(false);

  const [textfieldStatus, setTextfieldStatus] = useState({
    loading: false,
    warning: false,
    error: false,
    success: false,
  });

  const shouldRenderStatusDiv = () => {
    return textfieldStatus.error || textfieldStatus.warning || textfieldStatus.success || textfieldStatus.loading;
  };

  const getIconComponent = () => {
    if (textfieldStatus.error) {
      return <img src={ErrorIcon} alt="Error Icon" width="16px" height="16px" />;
    } else if (textfieldStatus.warning) {
      return <img src={WarningIcon} alt="Warning Icon" width="16px" height="16px" />;
    } else if (textfieldStatus.success) {
      return <img src={SuccessIcon} alt="Success Icon" width="16px" height="16px" />;
    } else if (textfieldStatus.loading) {
      return <img src={LoadingIcon} alt="Loading Icon" width="16px" height="16px" />;
    } else {
      return null;
    }
  };

  const getFieldStatus = () => {
    if (textfieldStatus.error) {
      return 'Error';
    } else if (textfieldStatus.warning) {
      return 'Warning';
    } else if (textfieldStatus.success) {
      return 'Success';
    } else if (textfieldStatus.loading) {
      return 'Loading';
    } else {
      return null;
    }
  };

  const handleFocus = (event) => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    props.setData(e.target.value);
  };

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <div
        style={containerStyles}
        onClick={handleClick}
        className={`${props.error && 'errorBg'} ${props.warning && 'warningBg'}`}
      >
        {props.startIcon && (
          <div style={iconStyles}>
            <img src={props.startIcon} alt="Start Icon" width="15px" height="15px" />
          </div>
        )}

        <input
          onChange={handleChange}
          type="text"
          label={props.title}
          value={props.data}
          placeholder={props.name}
          ref={inputRef}
          style={textBoxStyles}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="true"   
        />

        {props.endIcon && (
          <div style={iconStyles}>
            <img src={props.endIcon} alt="End Icon" width="15px" height="15px" />
          </div>
        )}
      </div>
      {shouldRenderStatusDiv() ? (
        <div style={textfieldStatusBoxStyles}>
          {getIconComponent()}
          <CustomAllTypography name={getFieldStatus()} variant="caption" color="#AAAAAA" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CommonCustomizedTextField;
