// import React from 'react'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import { CustomInputButton } from '../../../components/button/CustomButoon'
// import useResponsiveStyles from '../../../utils/MediaQuery'
import right from "../../../assets/marketing/Group 16.png";
import left from "../../../assets/marketing/Group 18.png";

const Home = () => {
    // const responsive = useResponsiveStyles();
  return (
    <div style={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        position: 'relative'
    }} id='home' className='home'>
        <div style={{padding: '6.69rem  3.75rem 0rem 3.75rem', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
        <CustomAllTypography name={'Revolutionize Your Hiring Process with'} variant={'h1'} sx={{textAlign: 'center'}}/>
        <CustomAllTypography name={'One-Way Interviews'} variant={'h1'} textcolor='#605DEC' sx={{textAlign: 'center'}}/>
        </div>
        <div style={{marginTop: '2.25rem', display:'flex',justifyContent:'center',alignItems:'center', alignSelf:'center'}}><CustomAllTypography name={'Discover Top Talent with Seamless Video Interviews'} variant={'h4'} sx={{textAlign: 'center'}}/></div>
        <div style={{marginTop: '5.31rem', paddingBottom: '10rem' , width: '250px'}}>
            <CustomInputButton variant="contained"
        size="large" width={"100%"} responsive>Try For Free</CustomInputButton>
        </div>
        <img src={right} alt='right decoration' style={{position: 'absolute', right: 0 , bottom: 0 , zIndex: -1 , width: '200px' }}>
        </img>
        <img src={left} alt='left decoration' style={{position: 'absolute', left: 0 , bottom: '20%' , zIndex: -1 , width: '180px' }}>
        </img>
    </div>
  )
}

export default Home