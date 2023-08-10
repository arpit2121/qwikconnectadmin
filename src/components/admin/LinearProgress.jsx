// import * as React from 'react';
// import PropTypes from 'prop-types';
// import LinearProgress from '@mui/material/LinearProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { ThemeProvider, createTheme } from '@mui/material';

// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: '#212121', // Set secondary color
//     },
//   },
// });

// export default function LinearWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   const LinearProgressWithLabel = (props) => (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <Typography variant="body2" color="text.secondary">{`${Math.round(
//         props.value,
//       )}%`}</Typography>
//       <Box sx={{ width: '100%', mt: 1 }}>
//         <LinearProgress
//           variant="determinate"
//           color="secondary"
//           style={{ backgroundColor: '#AAAAAA', height: '10px' }} // Set background color
//           {...props}
//         />
//       </Box>
//     </Box>
//   );

//   LinearProgressWithLabel.propTypes = {
//     value: PropTypes.number.isRequired,
//   };

//   return (
//     <ThemeProvider theme={theme}>
//     <div className="App" style={{ width: '100%' }}>
//       <LinearProgressWithLabel value={progress} />
//     </div>
//     </ThemeProvider>
//   );
// }



// import * as React from 'react';
// import PropTypes from 'prop-types';
// import LinearProgress from '@mui/material/LinearProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { ThemeProvider, createTheme } from '@mui/material';
// import { Body4 } from '../typography/Fields';

// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: '#212121', // Set secondary color
//     },
//   },
// });

// export default function LinearWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   const LinearProgressWithLabel = (props) => {
//     const labelMargin = (props.value / 100) * 100; // Calculate margin based on progress

//     return (
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Box
//           sx={{
//             position: 'relative',
//             width: '100%',
//           }}
//         >
//           <LinearProgress
//             variant="determinate"
//             color="secondary"
//             style={{ backgroundColor: '#F4F3FE', height: '10px',borderRadius:'6.25rem' }}
//             {...props}
//           />
//           <Typography
//             variant="body2"
//             color="text.secondary"
//             sx={{
//               position: 'absolute',
//               left: `${labelMargin}%`, // Set left margin based on progress
//               transform: 'translateX(-50%)',
//               whiteSpace: 'nowrap',
//             }}
//           >{`${Math.round(props.value)}%`}</Typography>
//         </Box>
//       </Box>
//     );
//   };

//   LinearProgressWithLabel.propTypes = {
//     value: PropTypes.number.isRequired,
//   };

//   return (
//     <ThemeProvider theme={theme}>
//     <div className="App" style={{ width: '100%' }}>
//       <LinearProgressWithLabel value={progress} />
//     </div>
//     <div style={{marginTop:'0.37rem',display:'flex', justifyContent:'space-between'}}>
//       <Body4>25 Interviews</Body4>
//       <Body4>of 100</Body4>
//     </div>
//     </ThemeProvider>
//   );
// }



import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material';
import { Body4 } from '../typography/Fields';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#212121', // Set secondary color
    },
  },
});

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const LinearProgressWithLabel = (props) => {
    const labelMargin = (props.value / 100) * 100; // Calculate margin based on progress

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              position: 'absolute',
              left: `${labelMargin}%`, // Set left margin based on progress
              transform: 'translateX(-90%) translateY(-130%)',
              whiteSpace: 'nowrap',
            }}
          >{`${Math.round(props.value)}%`}</Typography>
          <LinearProgress
            variant="determinate"
            color="secondary"
            style={{ backgroundColor: '#F4F3FE', height: '10px', borderRadius: '6.25rem' }}
            {...props}
          />
        </Box>
      </Box>
    );
  };

  LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ width: '100%',marginTop:'2.06rem' }}>
        <LinearProgressWithLabel value={progress} />
      </div>
      <div style={{ marginTop: '0.37rem', display: 'flex', justifyContent: 'space-between' }}>
        <Body4>25 Interviews</Body4>
        <Body4>of 100</Body4>
      </div>
    </ThemeProvider>
  );
}
