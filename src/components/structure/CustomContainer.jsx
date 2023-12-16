import React from 'react';
import { Container } from '@mui/material';

const   CustomContainer = ({ children,style}) => {
  return (
    <Container maxWidth="xl" style={{
      height: '100vh',  padding:'0',
      display: 'flex', justifyContent:'center', backgroundColor:''
      }}>
      {children}
  </Container>
  );
};

export default CustomContainer;
