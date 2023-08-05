import React from 'react'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import useResponsiveStyles from '../../../utils/MediaQuery'
import CustomizedTextField from '../../../components/textfield/CustomizedTextField';
import Lock from '../../../assets/svg/Lock.svg'
import CustomPassword from '../../../components/textfield/CustomPassword';
import CustomButton, { CustomInputButton } from '../../../components/button/CustomButoon';
import CommonTextInput from '../../../components/textfield/CommonTextInput';
import PasswordIcon from '../../../components/icons/PasswordIcon';


const ChangePassword = () => {
  const responsive = useResponsiveStyles();
  return (
    <div style={{backgroundColor:'',padding:responsive.isMobile?'0 1rem 0 1rem':'0 5rem 0 5rem',}}>
      <div style={{backgroundColor:'',marginTop:'2rem'}}>
      dashboard profile
      </div>
      <div style={{backgroundColor:'',display:'flex',width:'100%'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'2rem',width:responsive.isMobile?'100%':'50%'}}>
        <div style={{paddingTop:'2rem'}}>
        <CustomAllTypography name={'New Password'} variant={'h1'}/>
        </div>
       <div style={{marginTop:'1rem'}}>
       <CustomAllTypography name={'Enter your password information'} variant={'h5'}/>
       </div>
          <div style={{display:'flex',flexDirection:'column',gap:'1.8rem'}}>
          <CommonTextInput
          // value={pass}
          // setValue={setPass}
          title="Password"
          placeholder="Enter your password"
          searchInput={false}
          // type1={true ? "password" : "text"}
          // onClick={changeType}
          endIcon={<PasswordIcon />}
        />
         <CommonTextInput
          // value={pass}
          // setValue={setPass}
          title="Password"
          placeholder="Enter your password"
          searchInput={false}
          // type1={true ? "password" : "text"}
          // onClick={changeType}
          endIcon={<PasswordIcon />}
        />
          </div>
          <div style={{marginTop:'2rem'}}>
          <CustomInputButton name={'Register'} width={'100%'} size={'large'}>Change Password</CustomInputButton>
          </div>
        </div>
        {
          responsive.isMobile
          ?
          ''
          :
          <div style={{width:'50%',display:'flex', justifyContent:'center',alignItems:'center'}}>
        <img src={Lock} alt='' width={'70%'}/>
        </div>
        }
      </div>
    </div>
  )
}

export default ChangePassword




{/* <div style={{marginTop:'2.75rem'}}> 
       dashboard profile
      </div>
      <div style={{marginTop:'4.37rem'}}>
        <CustomAllTypography name={'New Password'} variant={'h1'}/>
      </div>
      <div style={{marginTop:'1.5rem'}}>
        <CustomAllTypography name={'Enter your password information'} variant={'h5'}/>
      </div>
      <div style={{marginTop:'3rem',backgroundColor:'',display:responsive.isMobile?'':'flex',justifyContent:'space-between'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'1.25rem',width:responsive.isMobile?'':'50%'}}>
          <CustomPassword/>
          <CustomPassword/>
          <CustomButton name='Register'/>
        </div>
      </div>
      <div style={{width:'50%',display:'flex',justifyContent:'center'}}>
          <img src={Lock} alt='' width={'50%'}/>
      </div> */}