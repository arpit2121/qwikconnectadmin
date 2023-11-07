import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbar = ({message="hello",severity="success"}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default CustomizedSnackbar;




// dispatch(
//   showAlert({
//     message: "OTP Sent Successfully!",
//     showMessage: true,
//     messageSeverity: "success",
//   })
// );


// export const clearAlert = (): ThunkAction<void, RootState, unknown, ActionType> => async (dispatch, getState) => {
//   dispatch({
//       type: "CLEAR_MESSAGE",
//   })
// }

// export const showAlert = (messageObj: any): ThunkAction<void, RootState, unknown, ActionType> => async (dispatch, getState) => {
//   dispatch({
//       type: "SET_MESSAGE",
//       payload: messageObj
//   })
// }