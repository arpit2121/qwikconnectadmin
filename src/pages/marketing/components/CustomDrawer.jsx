import { Padding } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemText, Typography, useThemeProps, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import logo from '../../svg/yeschef-logo.svg'
import { useTheme } from '@mui/material/styles';

const useStyle = makeStyles()((theme)=>({
  drawer: {
    width: '263px',
    backgroundColor:'#FFD8CF',
    height:'100%',
    [theme.breakpoints.up('sm')]:{
      display:'flex',
    flexDirection:'column',
    // justifyContent:'space-between',
    padding:'10px'
    }
  },
  list:{
    width:'150px',
  },
  buttons:{
    display:'flex',
    justifyContent:'space-evenly',
    marginTop:'183px',
  },
  imgContainer:{
    height:'130px',
    width:'130px',
    borderRadius:'50%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    left:'-64px',
    top:'61px',
    backgroundColor:'#FFD8CF',
    [theme.breakpoints.up('sm')]:{
      left:'210px'
    }
  }
}));  

const CustomDrawer = (props) => {
    const handleDrawerClose = (item) => {
      props.setIsDrawerOpen(false);
      props.handleClick(item)
    };
    const menuArr = ['Healthy Meals','Healthy Snacks','Our Experts','Community'];
    const mobilMenue = ['FAQs','T&C']

    const {classes}=useStyle();
    const theme = useTheme();

    return (
      <Drawer anchor={props.anchor} open={props.isDrawerOpen} onClose={handleDrawerClose}>
        <Box className={classes.drawer}>
          <Box component="img" src={logo} width={'36px'} height={'37px'} margin={'8.64px 0 0 46px'}/>
          <Box>
            <Box padding={{xs:'59.89px 0 0 85px',sm:'59.89px 0 0 70px'}}>
              <Typography sx={{fontSize:'20px',lineHeight:'24px',fontWeight:'600'}} color={theme.palette.common.black}>Guest</Typography>
              <Typography sx={{fontSize:'12px',lineHeight:'18px',fontWeight:'600'}}>Sign up and get benefits</Typography>
            </Box>
            <Box padding={{xs:'59.89px 0 0 85px',sm:'59.89px 0 0 70px'}}>
              <List sx={{display:{md:'none', lg:'none'},padding:0}} className={classes.list}>
                  {menuArr.map((item,index)=>{
                      return(
                        <ListItem key={index} onClick={()=>handleDrawerClose(item)} sx={{padding:'0 0 12px 0','&:hover':{backgroundColor:'transparent'}}}>
                            <Typography sx={{fontSize:'16px',lineHeight:'24px',color:'black','&:hover':{color:'#F54746'}}} >{item}</Typography>
                        </ListItem>
                      )
                  })}
              </List>
              <List className={classes.list} sx={{padding:0}}>
                  {mobilMenue.map((item,index)=>{
                      return(
                        <ListItem key={index} onClick={()=>handleDrawerClose(item)} sx={{padding:'0 0 12px 0','&:hover':{backgroundColor:'transparent'}}}>
                            <Typography sx={{fontSize:'16px',lineHeight:'24px',color:'black','&:hover':{color:'#F54746'}}} >{item}</Typography>
                        </ListItem>
                      )
                  })}
              </List>
            </Box>
          </Box>
          <Box className={classes.buttons}>
            <Button variant="contained" sx={{borderRadius:'14px',width:'115px',fontSize:'14px',lineHeight:'22.43px'}}>
              Sign In
            </Button>
            <Button variant="outlined" sx={{borderRadius:'14px',width:'115px'}}>
              Log In
            </Button>
          </Box>
        </Box>
        <Box className={classes.imgContainer} >
                {/* <Box component="img" src={logo} width={'6.5rem'} height={'6.5rem'} borderRadius={'50%'} backgroundColor={'white'}/> */}
                <Box sx={{width:'105px',height:'105px'}} borderRadius={'50%'} backgroundColor={'white'}/>
        </Box>
      </Drawer>
    );
}
export default CustomDrawer;