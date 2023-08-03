import React from 'react'
import { IconContext } from 'react-icons';

const CustomIcon = ({ icon, size, color }) => {
  return (
    <IconContext.Provider value={{ size: size || '1em', color: color || 'currentColor' }}>
    {icon}
  </IconContext.Provider>
  )
}

export default CustomIcon;


{/* <CustomIcon icon={<FaHome />} size="24px" color="red" /> */}