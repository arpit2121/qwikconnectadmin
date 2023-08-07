import React from 'react'
import CustomContainer from '../../../components/structure/CustomContainer'
import useResponsiveStyles from '../../../utils/MediaQuery'
import Navbar from '../../../components/structure/admin/Navbar'
import { Box } from '@mui/material'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import CustomButton, { CustomInputButton } from '../../../components/button/CustomButoon'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import { CustomCard } from '../../../components/card/CustomCard'
import CustomIcons from '../../../components/admin/Pagination'
import CustomizedTables from '../../../components/admin/Table'
import StatsTopBar from '../StatsTopBar'
import UsersComponent from '../../../components/admin/UsersComponent'
import user1 from '../../../assets/svg/user1.svg'
import AwardIcon from '../../../components/icons/AwardIcon'
import { Body3 } from '../../../components/typography/Fields'
import StatusButton from '../../../components/button/StatusButton'

const data = [
   {
    no: '01',
    profileimage: <UsersComponent image={user1} style={{width:'2rem', height:'2rem'}}/>,
    name: 'Danish Shah',
    email:'Danish.shah@xmail.com',
    status: 'Rejected',
    time:'30m ago',
  },
  {
    no: '02',
    profileimage: <UsersComponent image={user1} style={{width:'2rem', height:'2rem'}}/>,
    name: 'Danish Shah',
    email:'Danish.shah@xmail.com',
    status: 'Pending',
    time:'30m ago',
  },{
    no: '03',
    profileimage: <UsersComponent image={user1} style={{width:'2rem', height:'2rem'}}/>,
    name: 'Danish Shah',
    email:'Danish.shah@xmail.com',
    status: 'Shortlisted',
    time:'30m ago',
  },
  {
    no: '04',
    profileimage: <UsersComponent image={user1} style={{width:'2rem', height:'2rem'}}/>,
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
        <CustomInputButton size='small' variant='outlined'>Preview</CustomInputButton>
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
                {/* <CustomButton name={'Activate'}/> */}
                <StatusButton name='Activated'/>
                <CustomAllTypography name={'UI/UX Developer / Lead'} variant={'h3'}/>
                <CustomAllTypography name={'Office: Remote'} variant={'body2'}/>
                <CustomAllTypography name={'Exp.: 12 to 16 year'} variant={'body2'}/>
                <Body3 color={'#8A8894'}>{'1d Ago'}</Body3>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1.5rem'}}>
                <StatsTopBar/>
            </div>
           </div>
           <div style={{marginTop:'1.5rem', width:responsive.isMobile?'100%':'50%'}}>
              <CustomAllTypography name={'COMPANY PROFILE:'} variant={'body2'}/>
              <CustomAllTypography name={'${}Allegis Group, Inc. is an international talent management firm headquartered in Hanover, Maryland, United States. As of 2018, it had US$13.4 billion in revenue, and 19,000 employees. It ranks fourth in the world. More'} variant={'body2'}/>
              <div style={{display:responsive.isMobile?'flex':'flex',marginTop:'2.5rem',gap:'2rem', flexDirection:responsive.isMobile?'column':''}}>
                <CustomInputButton size='small' variant='outlined' width={responsive.isMobile?'100%':''}>Edit</CustomInputButton>
                {
                  responsive.isMobile?'':<CustomInputButton size='small' variant='outlined'>Preview</CustomInputButton>
                }
                <CustomInputButton size='small' variant='outlined' width={responsive.isMobile?'100%':''} sx={{borderColor:'#F93232', color:'#F93232'}}>Deactive</CustomInputButton>
              </div>
           </div>
           </div>
           </CustomCard>
           <div style={{marginTop:'1rem',display:'flex',flexDirection:'column',gap:'1rem',padding:'0 1rem 0 1rem'}}>
            <div style={{display:'flex',gap:'1rem'}}>
            <AwardIcon/>
            <CustomAllTypography name={'Review Candidates'} variant={'h4'}/>
            </div>
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
                      <Body3>{users.name}</Body3>
                      <Body3>{users.email}</Body3>
                    </div>
                    <div style={{width:'20%',display:'flex',flexDirection:'column', alignItems:'flex-end'}}>
                    {/* <CustomAllTypography name={users.status} variant={''}/> */}
                    <StatusButton name={users.status}/>
                    <Body3 color={'#8A8894'}>{users.time}</Body3>
                    </div>
                  </CustomCard>
                    )
                  })
                :
                <CustomizedTables data={data}/>
              }
            </div>
            <div style={{display:'flex' ,justifyContent:'center', alignItems:'center',marginTop:'2.5rem', marginBottom:'7rem'}}>
            <CustomIcons/>
            </div>
           </div>
        </div>
      </div>
    </CustomContainer>
  )
}

export default JobPostingDetailsPage