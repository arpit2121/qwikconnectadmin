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
  //  width: "150px"
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

export default function CustomizedTables({ data }) {
  const navigate = useNavigate();
  const [hoveredRow, setHoveredRow] = React.useState(null);
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
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow
              key={row.name}
              onClick={() => navigate("/candidatereview")}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <StyledTableCell align="left">{row.no}</StyledTableCell>
              <StyledTableCell align="left">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                  }}
                >
                  {row.profileimage} {row.name}
                </div>
              </StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">
                {<StatusButton name={row.status} />}
              </StyledTableCell>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">
                {hoveredRow === index ? (
                  <ReviewButtonWrapper>
                    <CustomInputButton variant="text">Review</CustomInputButton>
                    {/* Review */}
                  </ReviewButtonWrapper>
                ) : (
                  ""
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
