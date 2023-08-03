import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CustomIcons() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
        sx={{
          borderRadius:0,
          // Custom styles for the PaginationItem
          // backgroundColor: item.page === page ? 'black' : 'transparent',
        //   color: item.page === page ? 'white' : 'black',
        width:'100%',
          '&.Mui-selected': {
            backgroundColor: 'black',
            color: 'white',
          },
          '&:hover': {
            border: '1px solid #F845FC',
          },
          '&:focus': {
            border: '1px solid #F845FC',
          },
        }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}






// import * as React from 'react';
// import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';

// function Content() {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const page = parseInt(query.get('page') || '1', 10);

//   return (
//     <Pagination
//       // color="primary"
//       borderRadius='0px'
//       backgroundColor='red'
//       page={page}
//       count={10}
//       renderItem={(item) => (
//         <PaginationItem
//         component={Link}
//         to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
//         sx={{
//           borderRadius:0,
//           // Custom styles for the PaginationItem
//           // backgroundColor: item.page === page ? 'black' : 'transparent',
//           color: item.page === page ? 'white' : 'black',
//           '&.Mui-selected': {
//             backgroundColor: 'black',
//             color: 'white',
//           },
//           '&:hover': {
//             backgroundColor: 'grey',
//           },
//           '&:focus': {
//             backgroundColor: 'black',
//           },
//         }}
//         {...item}
//         />
//       )}
//     />
//   );
// }

// export default function PaginationLink() {
//   return (
//     <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
//       <Routes>
//         <Route path="*" element={<Content />} />
//       </Routes>
//     </MemoryRouter>
//   );
// }



// sx={{
//   // Custom styles for the PaginationItem
//   backgroundColor: item.page === selectedPage ? 'black' : 'transparent',
//   color: item.page === selectedPage ? 'white' : 'black',
//   '&:hover': {
//     backgroundColor: 'grey',
//   },
//   '&:focus': {
//     backgroundColor: 'black',
//   },
// }}

// sx={{
//   // Custom styles for the PaginationItem
//   borderRadius:'0px',
//   backgroundColor: item.selected ? 'black' : 'transparent',
//   color: item.selected ? 'white' : 'black',
//   '&:hover': {
//     backgroundColor: 'grey',
//   },
//   '&:focus': {
//     backgroundColor: 'black',
//   },
// }}