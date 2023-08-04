import React,{useState} from "react";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import { TextDescription } from "../components/typography/Fields";
import useResponsiveStyles from "../utils/MediaQuery";
import { CustomInputButton } from "../components/button/CustomButoon";
import { useNavigate } from "react-router-dom";
import CommonTextInput from "../components/textfield/CommonTextInput";
import PasswordIcon from '../components/icons/PasswordIcon'




const Password = () => {
  const [newUser, setNewUser] = useState(false);
  const [pass, setPass] = useState('');
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  const [type,setCurrType] = useState(true);

  const changeType = () =>{
    setCurrType(!type)
  }

  
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ marginTop:'',display:'flex',flexDirection:'column',gap:'1.50rem'}}>
        <CustomAllTypography
          variant={"h1"}
          name={newUser ? "Set Password" : "Welcome Back!"}
        />
        <CustomAllTypography name={newUser?'for youremail@example.com':'Enter your password for youremail@example.com'} variant={'h5'}/>
      </div>
      <div style={{marginTop:'2.50rem'}}>
        {/* <CustomPassword title={'Enter Password'} data={pass} setData={setPass}/> */}
        <CommonTextInput
          value={pass}
          setValue={setPass}
          title="Password"
          placeholder="Enter your password"
          searchInput={false}
          type1={type? 'password':'text'}
          onClick={changeType}
          endIcon={<PasswordIcon/>}
        />
        <div style={{display:'flex', justifyContent:'flex-end', paddingTop:'4px'}}>
        <TextDescription responsive={responsive} size={'9px'} color={'#605DEC'} onClick={()=>console.log("hi")}>{newUser?'':"Forgot Password?"}</TextDescription>
        </div>
      </div>
      <div style={{marginTop:'4rem'}}>
      <CustomInputButton variant='contained' width={'100%'} size='large' responsive onClick={()=>navigate('/dashboard/home/existinguser')}>Register</CustomInputButton>
      </div>
    </div>
  );
};

export default Password;
