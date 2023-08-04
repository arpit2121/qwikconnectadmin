import React from 'react'
import CustomAllTypography from '../../components/typography/CustomTypograpgy'
import CustomCardComponent, { CustomCard } from '../../components/card/CustomCard'
import useResponsiveStyles from '../../utils/MediaQuery'
import { useNavigate } from 'react-router-dom'
import user from '../../assets/svg/user.svg'
import userplus from '../../assets/svg/userPlus.svg'
import rejected from '../../assets/svg/rejected.svg'
import JobCard from './JobCard'

const DashBoardMail = () => {
    const responsive = useResponsiveStyles();
    const navigate = useNavigate();
  return (
    <div 
    style={{padding:!responsive.isMobile?'0 1rem 0 1rem':'0 0 3.94rem 0 3.94rem'}}
    >
        <div style={{marginTop:'4.06rem',display:responsive.isMobile?'':'flex', justifyContent:'space-between'}}>
            {/* <div></div> */}
            <CustomAllTypography name={'Overiview'} variant={'h3'}/>
            <div style={{display:responsive.isMobile?'':'flex', gap:'1.5rem',justifyContent:'space-between',marginTop:responsive.isMobile?'2rem':'',gpa:'1rem'}}>
                <div style={{display:'flex', alignItem:'center'}}><img src={user} alt={'app'}/> 23 application</div>
                <div style={{display:'flex', alignItem:'center'}}><img src={userplus} alt={'app'}/> 3 shortlisted</div>
                <div style={{display:'flex', alignItem:'center'}}><img src={rejected} alt={'app'}/> 2 rejected</div>
            </div>
        </div>
        <div style={{marginTop:'4rem'}}>
         <JobCard/>
        </div>
    </div>
  )
}

export default DashBoardMail