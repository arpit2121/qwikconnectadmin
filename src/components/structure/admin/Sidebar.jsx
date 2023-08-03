import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate= useNavigate();
  return (
    <div style={{height:'70%', width:'80%', backgroundColor:'#ECF3FF', borderTopRightRadius:'4rem',borderTopLeftRadius:'4rem', borderBottomLeftRadius:'4rem', borderBottomRightRadius:'4rem', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{height:'30%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
        <div><HomeIcon onClick={()=>navigate('/dashboard/home/existinguser')}/></div>
        <div><InboxIcon onClick={()=>navigate('/dashboard/myJobPost')}/></div>
        </div>
        <div style={{height:'30%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
        <div><SettingsIcon onClick={()=>navigate('')}/></div>
        <div>pr</div>
        </div>
    </div>
  )
}

export default Sidebar