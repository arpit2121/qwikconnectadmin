import React from 'react'
import CustomContainer from '../../../components/structure/CustomContainer'
import useResponsiveStyles from '../../../utils/MediaQuery'
import Navbar from '../../../components/structure/admin/Navbar'
import { Box } from '@mui/material'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import CustomButton from '../../../components/button/CustomButoon'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import { CustomCard } from '../../../components/card/CustomCard'
import CustomIcons from '../../../components/admin/Pagination'
import CustomizedTables from '../../../components/admin/Table'
import RadioGroupRating from '../../../components/admin/RatingParameter'

const data = [
   {
    profileimage: 'iamge',
    name: 'Danish Shah',
    email:'Danish.shah@xmail.com',
    status: 'Rejected',
    time:'30m ago',
  },
  {
    profileimage: 'iamge',
    name: 'Danish Shah',
    email:'Danish.shah@xmail.com',
    status: 'Rejected',
    time:'30m ago',
  }
]

const JobPostingDetailsPage = () => {
  const responsive = useResponsiveStyles();
  return (
    <CustomContainer>
      <div style={{ height: '100%', width: '100vw',maxHeight:'862px'}}>
      {
          responsive.isMobile
          ?
          <Box sx={{width:'100%', height:'10%',backgroundColor:'',display:'flex',position:'sticky',backgroundColor:'#fff',position:'sticky',top:0,boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.5)",justifyContent:'space-between',alignItems:'center',zIndex:'1'}}>
        <div style={{height:'100%',backgroundColor:'',display:'flex', alignItems:'center',paddingLeft:'10px'}}>
            <AiOutlineArrowLeft style={{fontSize:'30px'}} />
        </div>
        <div style={{paddingRight:'1.25rem'}}>
          button
        </div>
        </Box>
          :
          <div
          style={{
            height: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 1rem 0 1rem",
            boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.5)",
            position:'sticky',
            top:0,
            overflow:'hidden',
            backgroundColor:'#fff',
            zIndex:1
            // backgroundColor:'red'
          }}
        >
          <Navbar job={' '}/>
        </div>
        }
        <div style={{backgroundColor:''}}>
           <CustomCard sx={{backgroundColor:'#F8F8F9'}}>
           <div>
           <div style={{display:responsive.isMobile?'':'flex',justifyContent:'space-between'}}>
           <div style={{marginTop:'2.38rem',display:'flex',flexDirection:'column',gap:'1.5rem'}}>
                <CustomButton name={'Activate'}/>
                <CustomAllTypography name={'UI/UX Developer / Lead'} variant={'h3'}/>
                <CustomAllTypography name={'Office: Remote'} variant={'body2'}/>
                <CustomAllTypography name={'Exp.: 12 to 16 year'} variant={'body2'}/>
                <CustomAllTypography name={'1d ago'} variant={'body3'}/>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1.5rem'}}>
                logo rejected approved applied
            </div>
           </div>
           <div style={{marginTop:'1.5rem', width:responsive.isMobile?'100%':'50%'}}>
              <CustomAllTypography name={'COMPANY PROFILE:'} variant={'body2'}/>
              <CustomAllTypography name={'${}Allegis Group, Inc. is an international talent management firm headquartered in Hanover, Maryland, United States. As of 2018, it had US$13.4 billion in revenue, and 19,000 employees. It ranks fourth in the world. More'} variant={'body2'}/>
              <div style={{display:responsive.isMobile?'':'flex',marginTop:'1.5rem'}}>
                <CustomButton name={'Edit'}/>
                <CustomButton name={'Deactive'}/>
              </div>
           </div>
           </div>
           </CustomCard>
           <div style={{marginTop:'1rem',display:'flex',flexDirection:'column',gap:'1rem',padding:'0 1rem 0 1rem'}}>
            <CustomAllTypography name={'Review Candidates'} variant={'h4'}/>
            <CustomAllTypography name={'System Recommend candidate are highlighted in'} variant={'body2'}/>
            <div>
              {
                responsive.isMobile
                ?
                
                  data.map((users)=>{
                    return(
                    <CustomCard sx={{paddingTop:'1.25rem',display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'2px'}}>
                    <div style={{width:'10%'}}>{users.profileimage}</div>
                    <div style={{width:'70%',paddingLeft:'20px'}}>
                      <CustomAllTypography name={users.name} variant={'h6'}/>
                      <CustomAllTypography name={users.email} variant={'body3'}/>
                    </div>
                    <div style={{width:'20%',display:'flex',flexDirection:'column', alignItems:'flex-end'}}>
                    <CustomAllTypography name={users.status} variant={'h6'}/>
                      <CustomAllTypography name={users.time} variant={'body3'}/>
                    </div>
                  </CustomCard>
                    )
                  })
  
                :
                <CustomizedTables/>
              }
            </div>
            <div style={{display:'flex' ,justifyContent:'center', alignItems:'center',marginTop:'2.5rem'}}>
            <CustomIcons/>
            {/* <RadioGroupRating/> */}
            </div>
           </div>
        </div>
      </div>
    </CustomContainer>
  )
}

export default JobPostingDetailsPage