import CustomAllTypography from '../../../components/typography/CustomTypograpgy';
import { CustomInputButton } from '../../../components/button/CustomButoon';
import useResponsiveStyles from '../../../utils/MediaQuery';
import rounded from '../../../assets/marketing/rounded.png';

const Rounded = () => {
  const responsive = useResponsiveStyles();

  return (
    <div
      style={{
        flexShrink: 0,
        marginTop: '2rem',
        background: `url(${rounded})`,
        backgroundSize: 'cover', // Ensure the background image is fully visible
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',        
        padding: responsive.isMobile ? '1rem' : '2.3rem 0',
        display: 'flex',
        rounded: '50%',
        flexDirection: 'column',
        gap: responsive.isMobile ? '0.5rem' : '0.5rem',
        alignItems: 'center',
      }}
    >
      <CustomAllTypography name={'Try it out for Free!'} variant={'h1'} textcolor={'#FFF'} />
      <CustomInputButton variant="contained" size="medium" responsive>
        Get Started
      </CustomInputButton>
    </div>
  );
};

export default Rounded;
