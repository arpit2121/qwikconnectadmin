import { Button} from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from '../../../assets/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useResponsiveStyles from '../../../utils/MediaQuery';
import CustomAllTypography from '../../typography/CustomTypograpgy';
import CustomButton, { CustomInputButton } from '../../button/CustomButoon';
// import CustomDrawer from './Drawer';



const Navbar = ({job}) => {
    const responsive = useResponsiveStyles();
    const [isOp, setIsOp] = useState(false)

    const call = ()=>{
        // <CustomDrawer isOpen={true}/>;
    }
    // const useNavigate=

  return (
        <div style={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, overflow:'hidden', backgroundColor:'#fff'}}>
        <div style={{width:'10%', display:'flex', alignItems:'center'}}>
            <img src={logo} alt='logo' width={'50%'}></img>
        </div>
        <div style={{width:'55%'}}>
            <CustomAllTypography name={job?job:'Dashboard'} variant={'h3'}/>
        </div>
        <div style={{width:'25%', display:'flex', justifyContent:'flex-end'}}>
        {
            !responsive.isMobile
            ?
            job
            ?
            ""
            :
            
            // <Button 
            // component={Link} to="/jobposting/basicDaetails" 
            // // value="todays"
            // variant='outlined' sx={{ borderRadius:'14px'}} 
            // endIcon={<ArrowForwardIcon/>}
            // >
            //     New Job
            // </Button>
            <CustomInputButton variant='outlined' size='small' responsive component={Link} to="/jobposting/basicDaetails" endIcon={<ArrowForwardIcon />}>
        Verify
            </CustomInputButton>
            :
            <MenuIcon 
            // onClick={()=><CustomDrawer isOpen={true}/>}
            />
        }
         </div>
    </div>
  )
}

export default Navbar