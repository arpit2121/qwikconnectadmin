import { Box, Drawer } from '@mui/material'
import React from 'react'
import QwikConnectLogo from '../../../components/icons/QwikConnectLogo';
import { ScrollLink, Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { CustomInputButton } from '../../../components/button/CustomButoon';


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
                      //    <ScrollLink
                      //   to={item.to.substring(1)} // Remove the "#" from the beginning of the 'to' prop
                      //   spy={true}
                      //   smooth={true}
                      //   offset={-100} // You may need to adjust the offset based on your layout
                      //   duration={1000}
                      //   activeClass="active-link" // Specify the class name for the active link
                      // >
                      //   <CustomAllTypography
                      //     name={item.name}
                      //     variant={"body2"}
                      //     textcolor={(item.to === hash1) ?'#605DEC' : ''}
                      //   />
                      //  </ScrollLink>
                      <Link to={{pathname:item.to.substring(1)}}>{item.name}</Link>
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
                variant="text"
                size="medium"
                responsive
                onClick={()=>handelLoginClick()}
              >
                Login
              </CustomInputButton>
              <CustomInputButton
                variant="contained"
                size="medium"
                responsive
                onClick={()=>handelSignupClick()}
              >
                Sign up
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