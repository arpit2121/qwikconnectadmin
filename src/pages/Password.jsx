import React,{useState} from "react";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import { TextDescription } from "../components/typography/Fields";
import useResponsiveStyles from "../utils/MediaQuery";
import { CustomInputButton } from "../components/button/CustomButoon";
import CustomPassword from "../components/textfield/CustomPassword";
import { useNavigate } from "react-router-dom";
import CommonCustomizedTextField from "../components/textfield/CommonCustomizedTextfield";




const Password = () => {
  const [newUser, setNewUser] = useState(false);
  const [pass, setPass] = useState('');
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
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
      <div style={{ marginTop:'6rem',display:'flex',flexDirection:'column',gap:'1.50rem'}}>
        <CustomAllTypography
          variant={"h1"}
          name={newUser ? "Set Password" : "Forget Password?"}
        />
        <CustomAllTypography name={newUser?'for youremail@example.com':'Enter your password for youremail@example.com'} variant={'h5'}/>
      </div>
      <div style={{marginTop:'2.50rem'}}>
        <CustomPassword title={'Enter Password'} data={pass} setData={setPass}/>
        <div style={{display:'flex', justifyContent:'flex-end', paddingTop:'4px'}}>
        <TextDescription responsive={responsive} size={'9px'} color={'#605DEC'} onClick={()=>console.log("hi")}>Forgot Password?</TextDescription>
        </div>
      </div>
      <div style={{marginTop:'4rem'}}>
      <CustomInputButton variant='contained' width={'100%'} size='large' responsive onClick={()=>navigate('/dashboard/home/existinguser')}>Register</CustomInputButton>
      </div>
    </div>
  );
};

export default Password;
