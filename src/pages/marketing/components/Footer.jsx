import React from 'react'
import Logo from '../../../components/icons/Logo'
import QwikConnectLogo from '../../../components/icons/QwikConnectLogo'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import useResponsiveStyles from '../../../utils/MediaQuery'

const Footer = () => {
    const footer = ['Blog', 'Cookies', 'Privacy Policy', 'Terms of use']
    const responsive = useResponsiveStyles();
  return (
    <div style={{
        display:' flex',
        padding: '4rem 0rem 3rem 0rem',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4rem',
        backgroundColor: '#F4F3FE'
    }}>
        <div
        style={{display: 'flex',
        padding: responsive.isMobile ? '0 1rem' : '0rem 2rem',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2rem'
        }}>
            <div style={{
                display: responsive.isMobile ? '' : 'flex',
                justifyContent:'center',
                alignItems:'center',
                alignSelf: 'stretch'
            }}>
                 <QwikConnectLogo/>
                    <div style={{gap: '2rem', display:'flex', padding: '0 2rem'}}>
                    {
                        footer.map((item, index)=>{
                            return(
                                <CustomAllTypography variant={"body2"} name={item} />
                            )
                        })
                    }
                    </div>
                <CustomAllTypography variant={"body2"} name={'Copyright © 2023 QwikConnect. All rights reserved.'} />
            </div>

        </div>
    </div>
  )
}

export default Footer