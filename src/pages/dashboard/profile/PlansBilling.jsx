import React, { useState } from 'react'
import useResponsiveStyles from '../../../utils/MediaQuery';
import CustomAllTypography from '../../../components/typography/CustomTypograpgy';
import { CustomCard } from '../../../components/card/CustomCard';
import { Divider } from '@mui/material';
import LinearWithValueLabel from '../../../components/admin/LinearProgress';
import { CustomInputButton } from '../../../components/button/CustomButoon';
import LinkBar from '../jobposting/LinkBar';
import Modal from '../../../components/modal/Modal';


const PlansBilling = () => {
  const [open, setOpen] = useState(false);
  const responsive = useResponsiveStyles();

  const handelPreviewClick = () =>{
    setOpen(true)
  }
  return (
    <div style={{backgroundColor:'',padding:responsive.isMobile ? "0 1rem 0 1rem" : responsive.isTablet? "0 5rem 0 5rem" : "0rem 15rem 0 15rem"}}>
        <div>
        <LinkBar linkArray={[
                    { title: "Home", path: "/dashboard/home" },
                    { title: "My Profile", path: "/dashboard/myprofile" },
                    { title: "Plans & Billing" },
                  ]}/>
        </div>
        <div style={{marginTop:'4.8rem'}}>
          <CustomAllTypography name={'My plan'} variant={'h1'}/>
        </div>  
        <div style={{marginTop:'2.5rem'}}>
          <CustomCard sx={{borderRadius:'1.25rem',padding:'2rem'}}>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                  <CustomAllTypography name={'Plan'} variant={'body2'}/>
                  <CustomAllTypography name={'Basic'} variant={'h4'}/>
                </div>
                <div>
                  <CustomAllTypography name={'Payment'} variant={'body2'}/>
                  <CustomAllTypography name={'Free'} variant={'h4'}/></div>
                <div>
                  <CustomInputButton size='small' sx={{backgroundImage:'linear-gradient(180deg, #605DEC 0%, #A5F 100%)'}} onClick={handelPreviewClick}>Upgrade subscription</CustomInputButton>
                </div>
              </div>
              <Divider sx={{color:'#C9C8D3',marginTop:'2.38rem'}}/>
              <div style={{marginTop:'1.75rem'}}>
              <CustomAllTypography name={'Total Usage'} variant={'body2'}/>
              <div style={{marginTop:'1rem'}}>
                  <LinearWithValueLabel/>
              </div>
              </div>
              <Modal open={open} />
          </CustomCard>
        </div>
    </div>
  )
}

export default PlansBilling