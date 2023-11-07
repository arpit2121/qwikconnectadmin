import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CustomIcons() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
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
                border: "1px solid #F845FC",
              },
            }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
