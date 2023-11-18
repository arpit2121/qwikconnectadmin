import React from 'react'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import { CustomInputButton } from '../../../components/button/CustomButoon'
import useResponsiveStyles from '../../../utils/MediaQuery'

const Home = () => {
    const responsive = useResponsiveStyles();
  return (
    <div style={{
        backgroundColor: '#fff',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
    }} id='home' className='home'>
        <div style={{padding: '6.69rem  3.75rem 0rem 3.75rem', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
        <CustomAllTypography name={'Revolutionize Your Hiring Process with'} variant={'h1'} sx={{textAlign: 'center'}}/>
        <CustomAllTypography name={'One-Way Interviews'} variant={'h1'} textcolor='#605DEC' sx={{textAlign: 'center'}}/>
        </div>
        <div style={{marginTop: '2.25rem', display:'flex',justifyContent:'center',alignItems:'center', alignSelf:'center'}}><CustomAllTypography name={'Discover Top Talent with Seamless Video Interviews'} variant={'h4'} sx={{textAlign: 'center'}}/></div>
        <div style={{marginTop: '5.31rem', paddingBottom: '10rem'}}>
            <CustomInputButton variant="contained"
        size="large" width={"100%"} responsive>Try For Free</CustomInputButton>
        </div>
    </div>
  )
}

export default Home