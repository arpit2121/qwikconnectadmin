import React, { useState } from 'react'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'
import useResponsiveStyles from '../../../utils/MediaQuery'
import Lock from '../../../assets/svg/Lock.svg'
import { CustomInputButton } from '../../../components/button/CustomButoon';
import CommonTextInput from '../../../components/textfield/CommonTextInput';
import PasswordIcon from '../../../components/icons/PasswordIcon';
import LinkBar from '../jobposting/LinkBar';
import { useFormik } from 'formik';
import OpenEyeIcon from '../../../components/icons/OpenEyeIcon';
import { newPasswordSchema } from '../../../validations';


const ChangePassword = () => {
  const responsive = useResponsiveStyles();
  const [type, setCurrType] = useState(true);
  const [showOldPassword, setShowOldPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);

  const handelChangePassword = () =>{

  }

  const {values, handleBlur, handleChange,handleSubmit,errors,touched, isSubmitting,isValid, isValidating} = useFormik({
    initialValues:{
      oldPassword: "",
      newPassword: "",
    },
    newPasswordSchema,
    isInitialValid: false,
    handelChangePassword
  })
  

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };


  const changeType = () => {
    setCurrType(!type);
  };
  

  return (
    <div style={{backgroundColor:'',padding:responsive.isMobile ? "0 1rem 0 1rem" : responsive.isTablet? "0 5rem 0 5rem" : "0rem 15rem 0 15rem"}}>
      <div>
      <LinkBar linkArray={[
                    { title: "Home", path: "/dashboard/home" },
                    { title: "My Profile", path: "/dashboard/myprofile" },
                    { title: "Change Password" },
                  ]}/>
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
          handleChange2={handleChange('oldPassword')}
          value={values.oldPassword}
          status={errors.oldPassword ? "error": ""}
          message={errors.oldPassword ? errors.oldPassword: ""}
          title="Enter Old Password"
          searchInput={false}
          type1={showOldPassword ? "password" : "text"}
          onClick={toggleOldPasswordVisibility}
          endIcon={showOldPassword ? <PasswordIcon /> : <OpenEyeIcon />}
        />
          <CommonTextInput
          handleChange2={handleChange('newPassword')}
          value={values.newPassword}
          status={errors.newPassword ? "error": ""}
          message={errors.newPassword ? errors.newPassword: ""}
          title="Enter New Password"
          searchInput={false}
          type1={showNewPassword ? "password" : "text"}
          onClick={toggleNewPasswordVisibility}
          endIcon={showNewPassword ? <PasswordIcon /> : <OpenEyeIcon />}
        />
          </div>
          <div style={{marginTop:'2rem'}}>
          <CustomInputButton name={'Register'} width={'100%'} size={'large'} onClick={handelChangePassword}
          disabled={!isValid}>Change Password</CustomInputButton>
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

