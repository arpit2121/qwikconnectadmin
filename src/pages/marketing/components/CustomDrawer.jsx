import { Box, Drawer } from '@mui/material'
import React from 'react'
import QwikConnectLogo from '../../../components/icons/QwikConnectLogo';
// import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import { CustomInputButton } from '../../../components/button/CustomButoon';
// import { Link } from 'react-router-dom';
import CustomAllTypography from '../../../components/typography/CustomTypograpgy';


const CustomDrawer = ({navbarArray, handelClose, isDrawerOpen,hash1, handelLoginClick, handelSignupClick, handelLoggedInClick, user}) => {
  const navigate = useNavigate();
  return (
    <Drawer anchor='right' open={isDrawerOpen} onClose={handelClose}>
      <Box sx={{width:'263px', backgroundColor:'#F8F8F9', height:'100%', padding:'10px', display:'flex',flexDirection:'column', alignItems:'center', marginTop:'1rem'}}>
          <QwikConnectLogo/>
          <div>
          <Box sx={{marginTop:'3rem',display:'flex', flexDirection:'column', rowGap:'1rem'}}>
                {
                  navbarArray.map((item, index)=>{
                    return(
                      <div key={index} style={{ margin: "0 2.5rem"}}>
                      {
                        item.to===""
                         ?
                          navigate()
                         :
                      <Link to={item.title}>{item.title}</Link>
                      }
                    </div>
                    )
                  })
                }
          </Box>
          <div style={{ display: "flex",flexDirection:'column', justifyContent:'center', marginTop:'2rem', gap:'1rem'  }}>
          {!user ? (
            <>
              <CustomInputButton
                variant="contained"
                size="medium"
                responsive
                onClick={()=>handelLoginClick()}
              >
                Login/Signup
              </CustomInputButton>
            </>
          ) : (
            <CustomInputButton
              variant="outlined"
              size="medium"
              responsive
              onClick={()=>handelLoggedInClick()}
            >
              Logged In
            </CustomInputButton>
          )}
        </div>
          </div>
      </Box>
    </Drawer>
  )
}

export default CustomDrawer