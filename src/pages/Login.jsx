import React, { useState } from 'react'
import CustomAllTypography from '../components/typography/CustomTypograpgy'
import useResponsiveStyles from '../utils/MediaQuery'
import { TextTitle } from '../components/typography/Fields'
import { CustomInputButton } from '../components/button/CustomButoon'
import NormalCustomTextField from '../components/textfield/CustomTextfield'
import GoogleSocial from '../components/social/GoogleSocial'
import CustomizedTextField from '../components/textfield/CustomizedTextField'
import useNavigation from '../utils/NaivigateTo'
import DropdownInput from '../components/textfield/Dropdown'
import CommonCustomizedTextField from '../components/textfield/CommonCustomizedTextfield'
import CommonTextInput from '../components/textfield/CommonTextInput'
// import CommonCustomizedTextField from '../components/textfield/CommonCustomizedTextfield'

const Login = () => {
    const responsive = useResponsiveStyles();
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
  const handleButtonClick = () => {
    console.log("hii")
    navigation.goTo(true?'/password':'/otp');
  };

    // ---checking purpose ----
    const [existing, setExisting] = useState(true);
  return (
    <div style={{width:'100%',height:'100%'}}>
        <div style={{height:'20%',marginTop:'3rem'}}>
            <CustomAllTypography variant={'h1'} name=
            {'Login/Signup'}/>
        </div>
        <div style={{height:'15%', marginTop:'2rem'}}>
            <GoogleSocial/>
        </div>
        <div style={{display:'flex', justifyContent:'center',height:'10%',marginTop:'1rem'}}>
            <TextTitle responsive={responsive}>or</TextTitle>
        </div>
        <div style={{marginTop:'1rem',backgroundColor:''}}>
        {/* <CustomizedTextField title={'Email ID'} data={email} setData={setEmail}/> */}


        <CommonTextInput  value={email} setvalue={setEmail}  title='Email ID' placeholder="Type your name"  searchInput={false}/>
        </div>
        <div style={{marginTop:'4rem'}}>
            {/* <CustomInputButton variant="contained" goon={'password'} responsive 
            onClick={handleButtonClick} size='Large'>Continue</CustomInputButton> */}
            <CustomInputButton variant='contained' size='large' responsive goon={'password'} onClick={handleButtonClick}>
            Continue
            </CustomInputButton>
        </div>
    </div>
  )
}

export default Login