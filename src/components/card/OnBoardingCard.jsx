import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CustomButton from '../button/CustomButoon';
import SimpleTextField from '../textfield/SimpleTextField';
import CustomAllTypography from '../typography/CustomTypograpgy';




const OnBoardingCard = ({responsive}) =>(
  <Card sx={{width: responsive.isMobile?'59%':'40%', height:'100%', borderRadius:'14px', boxShadow:'0px 8px 16px 0px rgba(142, 141, 208, 0.12)', display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'3rem'}}>
  <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'space-between',height:'80%'}}>
    <div style={{height:'8%'}}>
    <CustomAllTypography variant={'h2'} name=
            {'Let us know about you'}/>
    </div>
    <div style={{height:'80%'}}>
      <SimpleTextField placeHolder={'Full Name'}/>
      <SimpleTextField placeHolder={'Mobile no.'}/>
      <SimpleTextField placeHolder={'Company Name'}/>
      <SimpleTextField placeHolder={'Your Profession'}/>
    </div>
  </CardContent>
  <CardActions>
    <div style={{height:'100%', width:'100%'}}>
      <CustomButton name={'proceed'}/>
    </div>
  </CardActions>
</Card>
);

export default OnBoardingCard;


{/* <Card sx={{ width: responsive.isMobile?'6  0%':'40%', height:'100%', borderRadius:'14px', boxShadow:'0px 8px 16px 0px rgba(142, 141, 208, 0.12)', display:'flex', flexDirection:'column', justifyContent:'space-around', padding:'3rem'}}>
    <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'space-between',height:'80%'}}>
      <div style={{height:'8%'}}><h3>Let us know about you</h3></div>
      <div style={{width:'100%'}}>
        <SimpleTextField placeHolder={'name'}/>
        <SimpleTextField placeHolder={'name'}/>
        <SimpleTextField placeHolder={'name'}/>
        <SimpleTextField placeHolder={'name'}/>
      </div>
    </CardContent>
    <CardActions>
      <div style={{height:'100%', width:'100%'}}>
        <CustomButton name={'proceed'}/>
      </div>
    </CardActions>
  </Card> */}