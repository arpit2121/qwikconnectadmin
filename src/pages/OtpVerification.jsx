import React,{useState} from 'react';
import CustomButton, { CustomInputButton } from '../components/button/CustomButoon';
import OTPInput from '../components/otp';
import CustomAllTypography from '../components/typography/CustomTypograpgy';
import { TextDescription } from '../components/typography/Fields';
import useResponsiveStyles from '../utils/MediaQuery';
import useNavigation from '../utils/NaivigateTo';

const OtpVerification = () => {
    const responsive = useResponsiveStyles();
    const [newUser, setNewUser] = useState(true)
   const [otp,setOtp] = useState('');
   const navigation = useNavigation();
   const handleButtonClick = () => {
     console.log("hii")
     navigation.goTo(true?'/password':'');
   };
   console.log("haha", otp)
  return (
    <div style={{ width: "100%", height: "100%"}}>
        <div style={{marginTop:'2rem'}}>
        <CustomAllTypography variant={'h1'} name=
            {newUser? 'New Account Verification':'Account Verification'}/>
          <CustomAllTypography name={'Please enter the 4-digit code sent to youremail@example.com'} variant={'body1'}/>
        </div>
        <div style={{ height:  '50%', display:'flex', flexDirection:'column',justifyContent:'space-around', width:'100%',marginTop:"1rem", backgroundColor:''}}>
        <OTPInput
          autoFocus
          length={4}
          className="otpContainer"
          inputClassName="otpInput"
          onChangeOTP={(otp) => setOtp(otp)}
        />
        <div style={{ height: "10%", width:'100%',marginTop:'1rem'}}>
        {/* <CustomInputButton variant="contained" responsive onClick={handleButtonClick}
        >verify</CustomInputButton> */}
        <CustomInputButton variant='contained' size='large' responsive onClick={handleButtonClick}>
        Verify
            </CustomInputButton>
        <div style={{display:'flex', gap:'10px',marginTop:'1rem',}}> 
        <CustomAllTypography variant={'body2'} name=
            {'Resend in'}/>
            <CustomAllTypography variant={'body2'} name=
            {'30s'}/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default OtpVerification