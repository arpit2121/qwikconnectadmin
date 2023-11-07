import React from 'react'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import { CustomInputButton } from '../../../components/button/CustomButoon'
import useResponsiveStyles from '../../../utils/MediaQuery'

const PricingCard = () => {
    const responsive = useResponsiveStyles();
  return (
    <div
    style={{
        display:'flex',
        padding: '2.1875rem 1.4375rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2.75rem',
        flexShrink: 0,
        borderRadius: '1.25rem',
        border: '1px solid #F4F3FE',
        background: '#fff',
        boxShadow: '0px 8px 16px 0px rgba(142, 141, 208, 0.12)',
        maxWidth: '27.5625rem',
        marginTop: '1.75rem'
    }}
    >
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <CustomAllTypography name={'Starter Pack'} variant={'h4'} sx={{}}/>
        <CustomAllTypography name={'Free trial plan for companies.'} variant={'body1'}/>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <CustomAllTypography name={'FREE'} variant={'h2'}/>
            <CustomAllTypography name={'forever'} variant={'body2'}/>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <CustomAllTypography name={'1 Job post'} variant={'body1'}/>
            <CustomAllTypography name={'10 Interviews per month'} variant={'body1'}/>
            <CustomAllTypography name={'No Downloads'} variant={'body1'}/>
            <CustomAllTypography name={'No Branding feature'} variant={'body1'}/>
            <CustomAllTypography name={'Up to 2 Invitations'} variant={'body1'}/>
            <CustomAllTypography name={'30 days recordings backup'} variant={'body1'}/>
        </div>
        <CustomInputButton variant="contained"
        size="large" responsive width={'100%'}>Choose Starter</CustomInputButton>
    </div>
  )
}

export default PricingCard