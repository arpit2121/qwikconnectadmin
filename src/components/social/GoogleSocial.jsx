import React from 'react';
import { styled } from '@mui/material';
import googleLogo from '../../assets/google.png'
import { useGoogleLoginMutation} from '../../services/auth';

const GoogleLoginButton = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #2B2B34;
  border: 1px solid #1D1D27;
  border-radius: 1rem;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  padding: 1.06rem 0rem;
`;

const GoogleLogo = styled('img')`
  width: 20px;
  margin-right: 8px;
`;

const GoogleSocial = () => {

  const [googleLogin, {error}] =  useGoogleLoginMutation();

  const handleLogin = async () => {
    const data = await googleLogin();
    console.log("data",data);
    window.location = data.data;
    if(error){
      console.log("hgetting error while social login", error)
    }
  };

  return (
    <GoogleLoginButton onClick={handleLogin}>
      <GoogleLogo src={googleLogo} alt="Google Logo" />
      Continue with Google
    </GoogleLoginButton>
  );
};

export default GoogleSocial;
