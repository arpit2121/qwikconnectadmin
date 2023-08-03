import React from 'react'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import Toggle from '../../../components/selectedcontrols/Toggle'
import useResponsiveStyles from '../../../utils/MediaQuery'
import { useState } from 'react'

const JobPostingStepFourA = () => {
  const responsive = useResponsiveStyles();
  const [isToggle, setIsToggle] = useState(false)
  return (
    <div style={{padding:responsive.isMobile?'0 1rem':''}}>
     <div>
     <div style={{marginTop:'4rem', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <CustomAllTypography name={'Candidate Invitation'} variant={'h2'}/>
        <Toggle disabled={false} setIsToggle={setIsToggle} isToggle={isToggle}/>
      </div>
      <div style={{marginTop:'0.75rem'}}>
        <CustomAllTypography name={'Enable the feature to send with the private links via their personal email IDs'} variant={'body2'}/>
      </div>
      {
        isToggle
        ?
        <>
        <div style={{marginTop:'2rem',padding:'2.5rem 8.75rem',border:'1px solid black', display:'flex',justifyContent:'center',alignItems:'center'}}>
          dropzone will come here
      </div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{padding:'0.75rem 1.5rem'}}>Edit thi Template</div>
        Downlaod sample csv
      </div>
      <div style={{marginTop:'3.06rem', display:'flex', justifyContent:'center', alignItems:'center',marginBottom:'4rem'}}>Note: by publish we will auto send the email notification to the user with there unique link</div>
        </>
        :
        ''
      }
      <div style={{marginTop:'1.69rem'}}>
        <CustomAllTypography name={'Public link'} variant={'h6'} responsive/>
      </div>
      <div style={{marginTop:'0.56rem',padding:'1.5rem',border:'1px solid black', display:'flex',justifyContent:'center',alignItems:'center'}}>
          url will come here
      </div>
     </div>
    </div>
  )
}

export default JobPostingStepFourA