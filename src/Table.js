import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useEffect, useState } from 'react';
import InfoCard from './components/InfoCard/InfoCard';
import logo from './pilytix-logo.svg';

import * as opportunities from "./opportunities.json";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function BasicTable() {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const data = opportunities.default;

  const [isOpen, setIsOpen] = useState(false);

  const [disableScrollOnBody, setDisableScrollOnBody] = useState(false);

  const [cardInfo, setCardInfo] = useState();

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setDisableScrollOnBody(!disableScrollOnBody);
  }

  useEffect(() => {
    if (disableScrollOnBody) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [disableScrollOnBody]);

  function handleRowClick(event, row) {
    console.log("row", row);
    setCardInfo(row);
    togglePopup();
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="opportunities table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Opp Name</StyledTableCell>
              <StyledTableCell align="left">Opp Stage</StyledTableCell>
              <StyledTableCell align="right">Rep Probability</StyledTableCell>
              <StyledTableCell align="right">PX Probability</StyledTableCell>
              <StyledTableCell align="left">PX Tier</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="left">Product</StyledTableCell>
              <StyledTableCell align="left">Sales Rep</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow
                onClick={(event) => handleRowClick(event, row)}
                key={row.oppId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.oppName}
                </TableCell>
                <TableCell align="left">{row.stage}</TableCell>
                <TableCell align="right">{row.repProbability}</TableCell>
                <TableCell align="right">{row.pilytixProbability}</TableCell>
                <TableCell align="left">{row.pilytixTier}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="left">{row.product}</TableCell>
                <TableCell align="left">{row.salesRepName}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <img
        src={logo}
        alt="pilytix logo"
        className="logo"
      />
      {isOpen && <InfoCard
        handleClose={togglePopup}
        data={cardInfo}
      />}
    </>
  );
}
