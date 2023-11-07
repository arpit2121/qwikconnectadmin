import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { setApiLoadere } from '../../slice/common.slice';
import { useSelector } from 'react-redux';

const Loader = () => {

    const data = useSelector(state=>state.common.apiLoader)
    console.log("LOADER DATA",data);

  return (
    <Box sx={{ width: '100%' }}>
    {/* { data? <></>:"" }  */}
    { data ? <LinearProgress /> : ""}
  </Box>
  )
}

export default Loader;