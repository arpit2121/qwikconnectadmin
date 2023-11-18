import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

export default function CustomIcons({setActivePage, activePage, pageCount}) {

  const handelClick = (data, page) =>{
    console.log(data)
  }
  // const [activePage, setActivePage] = React.useState(1);
  // const [pageCount, setPageCount] = React.useState();

  useState(()=>{

  },[activePage])

  const chnagePage = (newPage) => {
    console.log(newPage)
    setActivePage(newPage)
  }
  

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        defaultPage={1}
        onChange={(event, newPage)=> chnagePage(newPage)}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            sx={{
              borderRadius: 0,
              width: "100%",
              "&.Mui-selected": {
                backgroundColor: "black",
                color: "white",
              },
              "&:hover": {
                border: "1px solid #F845FC",
              },
              "&:focus": {
                // border: "1px solid #F845FC",
                // backgroundColor: "black",
                // color: "white",
              },
              // "&:active": {
              //   border: "1px solid #F845FC",
              //   backgroundColor: "black",
              //   color: "white",
              // }
            }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
