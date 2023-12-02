import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StatusButton from "../button/StatusButton";
import { useNavigate } from "react-router-dom";
import { CustomInputButton } from "../button/CustomButoon";
import CustomAllTypography from "../typography/CustomTypograpgy";
import UsersComponent from "./UsersComponent";
import GetAvtarImage from "../../utils/GetAvtar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ECF3FF",
    color: "#202020",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "none",
    position: "relative",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#FFF",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#FFF",
  },
  "&:hover": {
    backgroundColor: "#F9F9FF",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:child td": {
    border: 0,
  },
}));

const ReviewButtonWrapper = styled("div")({
  position: "absolute", // Position the button absolutely within the cell
  top: "50%", // Center vertically
  left: "30%", // Center horizontally
  transform: "translate(-50%, -50%)", // Center both horizontally and vertically
});

export default function CustomizedTables({ data, hadleClick }) {
  const navigate = useNavigate();
  const [hoveredRow, setHoveredRow] = React.useState(null);

  // const handleClick = () =>{
  //   navigate("/candidatereview")
  // }

  console.log("data", data);
  return (
    <TableContainer component={Paper} sx={{ borderRadius: "1.25rem" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">No</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email ID</StyledTableCell>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="left">Review Status</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        {data?.length === 0 ? (
          <TableBody>
            <StyledTableRow>
              <StyledTableCell colSpan={6} align="center">
                <CustomAllTypography
                  name={"No Data To Display"}
                  variant={"h3"}
                />
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        ) : (
          data?.map((row, index) => (
            <TableBody>
              <StyledTableRow
                key={row.no}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <StyledTableCell align="left">{`#${
                  index + 1
                }`}</StyledTableCell>
                <StyledTableCell align="left">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                  >
                     <GetAvtarImage />
                     {row.fullName}
                  </div>
                </StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{"1d ago"}</StyledTableCell>
                <StyledTableCell align="left">
                  {
                    <StatusButton
                      name={
                        row.status === "Shortlisted"
                          ? "Shortlisted"
                          : row.status === "Pending"
                          ? "Pending"
                          : "Rejected"
                      }
                    />
                  }
                </StyledTableCell>
                <StyledTableCell align="left">
                  {hoveredRow === index ? (
                    <ReviewButtonWrapper>
                      <CustomInputButton
                        variant="text"
                        onClick={() => hadleClick(row?._id)}
                      >
                        Review
                      </CustomInputButton>
                    </ReviewButtonWrapper>
                  ) : (
                    ""
                  )}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          ))
        )}
      </Table>
    </TableContainer>
  );
}
