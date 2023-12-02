import React from 'react'
import CustomAllTypography from '../typography/CustomTypograpgy'
import info from '../../assets/circleinfo.svg'
import cancel from '../../assets/cancel.svg'
import ImageClickable from '../icons/ImageClickable'

const Notification = ({handelNotificationClick}) => {
  const handelClick = () => {
    handelNotificationClick()
  }
  return (
    <div style={{ height:'', borderRadius:'0.25',border:'1px solid #818181',padding:'1rem',display:'flex',justifyContent:'space-between'}}>
        <div style={{display:'flex', gap:'1rem',width:'100%'}}>
        <ImageClickable src={info} alt={'info'}/>
        <div>
            <CustomAllTypography name={'Notification message. Here will be information.'} variant={'body2'}/>
        </div>
        </div>
        <ImageClickable src={cancel} alt={'info'} onClick={handelClick}/>
    </div>
  )
}

export default Notification