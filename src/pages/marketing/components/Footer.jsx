import React from 'react';
import Logo from '../../../components/icons/Logo';
import QwikConnectLogo from '../../../components/icons/QwikConnectLogo';
import CustomAllTypography from '../../../components/typography/CustomTypograpgy';
import useResponsiveStyles from '../../../utils/MediaQuery';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footer = [
        {
            name: 'Blog',
            path: '',
        },
        {
            name: 'Cookies',
            path: '',
        },
        {
            name: 'Privacy Policy',
            path: '/home/privacy-policy',
        },
        {
            name: 'Terms of Use',
            path: '/home/term-condition',
        },
    ];
    const responsive = useResponsiveStyles();

    return (
        <div
            style={{
                display: 'flex',
                padding: responsive.isMobile ? '2rem 1rem' : '4rem 0rem 3rem 0rem',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4rem',
                width:'full',
                backgroundColor: '#F4F3FE',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    padding: responsive.isMobile ? '0 1rem' : '0rem 2rem',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '2rem',
                    width:'full'

                }}
            >
                <div
                    style={{
                        display: responsive.isMobile ? 'flex' : 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        flexDirection: 'column',
                        width:'full'
                    }}
                >
                    <QwikConnectLogo />
                    <div style={{ 
                        gap: responsive.isMobile ? '0.4rem' : '2rem',
                    width:'full',
                     justifyContent: 'space-between',
                      display: 'flex',
                       padding: responsive.isMobile ? '0' : '0 2rem' , 
                       flexWrap: 'wrap'
                        }}>
                        {footer.map((item, index) => (
                            <Link
                                key={index}
                                style={{ textDecoration: 'none', padding: responsive.isMobile ? '0' : '0' }}
                                to={item.path}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <CustomAllTypography variant={'body2'} name={'Copyright © 2023 QwikConnect. All rights reserved.'} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
