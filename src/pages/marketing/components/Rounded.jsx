import React from 'react'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import { CustomInputButton } from '../../../components/button/CustomButoon'
import useResponsiveStyles from '../../../utils/MediaQuery'

const Rounded = () => {
  const responsive = useResponsiveStyles();
  return (
    <div style={{
        // maxHeight: '14.5rem',
        flexShrink: 0,
        marginTop: '2rem',
        borderRadius: '7.25rem',
        background: 'linear-gradient(180deg, #4787F3 0%, #3D3ACE 100%)',
        padding: responsive.isMobile ? '0.5rem' : '2.3rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: responsive.isMobile ? '0.5rem' :'0.5rem',
        alignItems:'center'
    }}>
        <CustomAllTypography name={'Try it out for Free!'} variant={'h1'} textcolor={'#FFF'}/>
        <CustomInputButton variant="contained"
        size="large" responsive>Get Started</CustomInputButton>
    </div>
  )
}

export default Rounded