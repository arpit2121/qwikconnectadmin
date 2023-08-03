import React from 'react'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import useResponsiveStyles from '../../../utils/MediaQuery'
import CustomizedTextField from '../../../components/textfield/CustomizedTextField';

const MyProfile = () => {
  const responsive = useResponsiveStyles();
  return (
    <div style={{backgroundColor:'',padding:responsive.isMobile?'0 1rem 0 1rem':'0 5rem 0 5rem'}}>
      <div style={{marginTop:'2.75rem'}}> 
       dashboard profile
      </div>
      <div style={{marginTop:'1.25rem',display:'flex', alignItems:'center',justifyContent:'space-between'}}>
        <div>profile</div>
        <div>cahnge pass</div>
      </div>
      <div style={{marginTop:'2rem'}}>
        <CustomAllTypography name={'Basic Details'} variant={'h1'}/>
      </div>
      <div style={{marginTop:'3rem',backgroundColor:'',display:'flex',flexDirection:'column',gap:'1.25rem'}}>
        <div style={{display:responsive.isMobile?'':'flex',justifyContent:'space-between',gap:'1.25rem'}}>
          <CustomizedTextField/>
          <CustomizedTextField/>
        </div>
        <CustomizedTextField/>
        <CustomizedTextField/>
        <CustomizedTextField/>
      </div>
    </div>
  )
}

export default MyProfile