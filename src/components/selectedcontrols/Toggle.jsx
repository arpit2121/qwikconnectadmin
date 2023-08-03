import React from 'react'
import { useState } from 'react'

const Toggle = ({disabled,setIsToggle,isToggle}) => {
    // const [isSelected, setIsSelected] = useState(false);
    // const [isHovered, setIsHovered] = useState(false);
    // const [isFocused, setIsFocused] = useState(false);
    // const [isDisbled, setIsDisbled] = useState(true)

    const [isSelected, setIsSelected] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

  
    const toggleSelected = () => {
      if (!disabled) {
        setIsSelected(!isSelected);
        setIsToggle(!isToggle)
      }
    };
    
  return (
    <div style={{display:'flex'}}>
        <div
      tabIndex={disabled ? undefined : 0} // Add tabIndex only when not disabled
      onClick={toggleSelected}
      onMouseEnter={() => setIsHovered(!disabled && true)}
      onMouseLeave={() => setIsHovered(!disabled && false)}
      onFocus={() => setIsFocused(!disabled && true)}
      onBlur={() => setIsFocused(!disabled && false)}
    >
      <div
        onClick={toggleSelected}
        onMouseEnter={() => setIsHovered(!disabled && true)}
        onMouseLeave={() => setIsHovered(!disabled && false)}
        style={{
          display: 'flex',
          width: '3rem',
          backgroundColor: disabled ? '#F4F3FE' : isSelected ? 'black' : '#D4D4DE',
          borderRadius: '0.75rem',
          padding: '0.25rem',
          gap: '0.625rem',
          transition: '0.5s',
          boxShadow: isHovered && !disabled ? '0 0 5px rgba(0, 0, 0, 0.3)' : 'none',
          outline: isFocused && !disabled ? '2px solid #F845FC' : 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        <span
          style={{
            height: '1rem',
            width: '1rem',
            backgroundColor: disabled ? '#FFFFFF' : '#FFFFFF',
            flexShrink: 0,
            borderRadius: '50%',
            marginLeft: isSelected ? '2rem' : '',
            transition: '.5s',
          }}
        ></span>
      </div>
    </div>
    </div>
  )
}

export default Toggle;


    // <div style={{height:'100vh', width:'100vw', display:'flex', justifyContent:'center',alignItems:'center'}}>


    // <div
    //   style={{
    //     height: '100vh',
    //     width: '100vw',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    // >
    //   <div
    //     onClick={()=>setIsSelected(!isSelected)}
    //     onMouseEnter={() => setIsHovered(true)}
    //     onMouseLeave={() => setIsHovered(false)}
    //     onFocus={() => (setIsFocused(true), setIsHovered(false))}
    //     onBlur={() => (setIsFocused(false),setIsHovered(false))}
    //     style={{
    //       display: 'flex',
    //       width: '3rem',
    //       backgroundColor: isSelected ? 'black' : '#D4D4DE',
    //       borderRadius: '0.75rem',
    //       padding: '0.25rem',
    //       gap: '0.625rem',
    //       transition: '0.5s',
    //       boxShadow: isHovered ? '0 0 5px #D4D4DE' :'none',
    //       outline: isFocused ? '2px solid var(--stroke-focused, #F845FC)' : 'none',
    //     }}
    //   >
    //     <span
    //       style={{
    //         height: '1rem',
    //         width: '1rem',
    //         backgroundColor: '#FFFFFF',
    //         flexShrink: 0,
    //         borderRadius: '50%',
    //         marginLeft: isSelected ? '2rem' : '',
    //         transition: '.5s',
    //       }}
    //     ></span>
    //   </div>
    // </div>

    // <div
    //   style={{
    //     height: '100vh',
    //     width: '100vw',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    // >
    //   <div
    //     onClick={()=>setIsSelected(!isSelected)}
    //     onMouseEnter={() => setIsHovered(true)}
    //     onMouseLeave={() => setIsHovered(false)}
    //     onFocus={() => setIsFocused(true)}
    //     onBlur={() => setIsFocused(false)}
    //     style={{
    //       display: 'flex',
    //       width: '3rem',
    //       backgroundColor: isSelected ? 'black' : '#D4D4DE',
    //       borderRadius: '0.75rem',
    //       padding: '0.25rem',
    //       gap: '0.625rem',
    //       transition: '0.5s',
    //       boxShadow: isHovered ? '10px solid red' : '10px solid red',
    //       outline: isFocused ? '2px solid red' : 'none',
    //     }}
    //   >
    //     <span
    //       style={{
    //         height: '1rem',
    //         width: '1rem',
    //         backgroundColor: '#FFFFFF',
    //         flexShrink: 0,
    //         borderRadius: '50%',
    //         marginLeft: isSelected ? '2rem' : '',
    //         transition: '.5s',
    //       }}
    //     ></span>
    //   </div>
    // </div>





    //     <div onClick={()=>setIsSelected(!isSelceted)}
    //     style={{display:'flex', width:'3rem', backgroundColor:isSelceted?'black':'#D4D4DE', borderRadius:'0.75rem', padding:'0.25rem',gap:'0.625rem',transition:'0.5s'}}>
    //         <span style={{height:'1rem', width:'1rem', backgroundColor:'#FFFFFF',flexShrink:0, borderRadius:'50%', marginLeft:isSelceted?'2rem':'', transition:'.5s'}}></span>
    //     </div>
    // </div>