import React from 'react'
import UsersComponent from '../../admin/UsersComponent'
import CustomAllTypography from '../../typography/CustomTypograpgy'
import user1 from '../../../assets/svg/user1.svg'
import { Body3 } from '../../typography/Fields'

const Review = () => {
  return (
    <div style={{display:'flex', flexDirection:'column',gap:'1rem'}}>
        <div style={{display:'flex',alignItems:'center', gap:'1rem'}}><UsersComponent image={user1} style={{width:'2rem', height:'2rem'}}/> Danish Shah <Body3 color={'#8A8894'}>{"1d ago"}</Body3></div>
        <CustomAllTypography variant={'body2'} name="He seems to be a good candiate, I would like to see him in the next round"></CustomAllTypography>
    </div>
  )
}

export default Review