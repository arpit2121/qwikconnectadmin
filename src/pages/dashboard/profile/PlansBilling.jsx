import React from 'react'
import useResponsiveStyles from '../../../utils/MediaQuery';
import CustomAllTypography from '../../../components/typography/CustomTypograpgy';
import { CustomCard } from '../../../components/card/CustomCard';
import { Divider } from '@mui/material';
import LinearWithValueLabel from '../../../components/admin/LinearProgress';
import { CustomInputButton } from '../../../components/button/CustomButoon';


const PlansBilling = () => {
  const responsive = useResponsiveStyles();
  return (
    <div style={{backgroundColor:'',padding:responsive.isMobile?'0 1rem 0 1rem':'0 5rem 0 5rem',}}>
        <div style={{marginTop:'2.75rem'}}>
          dashboard
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
                  <CustomInputButton size='small' sx={{backgroundImage:'linear-gradient(180deg, #605DEC 0%, #A5F 100%)'}}>Upgrade subscription</CustomInputButton>
                </div>
              </div>
              <Divider sx={{color:'#C9C8D3',marginTop:'2.38rem'}}/>
              <div style={{marginTop:'1.75rem'}}>
              <CustomAllTypography name={'Total Usage'} variant={'body2'}/>
              <div style={{marginTop:'1rem'}}>
                  <LinearWithValueLabel/>
              </div>
              </div>
          </CustomCard>
        </div>
    </div>
  )
}

export default PlansBilling