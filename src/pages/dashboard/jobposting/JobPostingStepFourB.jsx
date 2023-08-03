import React from 'react'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import useResponsiveStyles from '../../../utils/MediaQuery'
import editicon from '../../../assets/svg/edit.svg'
import RichTextEditor from '../../../components/textfield/RichTextEditor'
import CustomizedTextField from '../../../components/textfield/CustomizedTextField'

const JobPostingStepFourB = () => {
  return (
    <div style={{marginTop:'4rem'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}><CustomAllTypography name={'Enter Job Title here'} variant={'h2'}/>
        <img src={editicon} alt='edit'/></div>
        <div style={{marginTop:'2.19rem'}}>
        <CustomAllTypography name={'Job Description'} variant={'body2'}/>
        </div>
        <div style={{disply:'flex',flexDirection:'column',gap:'2.63rem'}}>
        <RichTextEditor/>
        <CustomizedTextField/>
        <CustomizedTextField/>
        </div>
    </div>
  )
}

export default JobPostingStepFourB