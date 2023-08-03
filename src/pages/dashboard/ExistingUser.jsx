import React from 'react'
import { FiInbox } from "react-icons/fi";
import CustomAllTypography from '../../components/typography/CustomTypograpgy';
import { Button } from '@mui/material'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useResponsiveStyles from '../../utils/MediaQuery';
import { CustomCard } from '../../components/card/CustomCard';
import CustomButton, { CustomInputButton } from '../../components/button/CustomButoon';

const ExistingUser = () => {
    const responsvie = useResponsiveStyles()
  return (
    <div style={{padding:'2rem'}}>
        <div style={{display:!responsvie.isMobile?'flex':'',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{display:'flex',gap:'1rem'}}>
                <FiInbox/>
                <CustomAllTypography name={'Recent Job Postings'} variant={'h4'}/>
            </div>
            <div>
           {/* <CustomInputButton variant='text' size='small' responsive component={Link} to="/jobposting/basicDaetails" endIcon={<ArrowForwardIcon />}/> */}
           <CustomInputButton variant='text' size='small' responsvie endIcon={<ArrowForwardIcon/>}>View All</CustomInputButton>
            </div>
        </div>
        <CustomCard sx={{maxWidth:'23.65rem', padding:'1rem', borderRadius:'1.25rem'}} onClick={()=>navigate('/jobpostingdetailspage')}>
                <div style={{display:'flex' ,justifyContent:'flex-end'}}>
                <CustomAllTypography name={'1d ago'} variant={'body3'}/>
                </div>
                <div style={{marginTop:'1.26rem'}}>
                    <CustomAllTypography name={'UI/UX Developer / Lead'} variant={'h4'}/>
                </div>
                <div style={{marginTop:'0.75rem'}}>
                    <CustomAllTypography name={'Office: Remote'} variant={'body2'}/>
                </div>
                <div style={{marginTop:'0.75rem'}}>
                <CustomAllTypography name={'Exp.: 12 to 16 year'} variant={'body2'}/>
                </div>
                <div style={{marginTop:'1.95rem',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <CustomAllTypography name={'24 Applied • 2 Shortlisted • 1 Closed'} variant={'body2'}/>
                    <h6>delete icon</h6>
                </div>
            </CustomCard>
    </div>
  )
}

export default ExistingUser