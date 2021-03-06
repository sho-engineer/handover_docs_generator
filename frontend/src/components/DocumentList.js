import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const columns = [
  { id: 'ID', label: 'ID', minWidth: 170 },
  { id: 'Indentifier', label: 'Indentifier'},
  { id: 'Type', label: 'Type'},
  { id: 'Created_At', label: 'Created_At'},
  { id: 'Updated_At', label: 'Updated_At'},
  { id: 'Writer', label: 'Writer'},
  { id: 'URL', label: 'URL'},
];

function createData(ID, Indentifier, Type, Created_At, Updated_At, Writer, URL) {
  return { ID, Indentifier, Type, Created_At, Updated_At, Writer, URL};
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function DocumentList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const StyledTitle = styled.h1`
    color: #696969;
    font-family: 'Cherry Swash', cursive;
    text-align: center;
    padding-top: 15px;
  `
  const StyledGrid = styled(Grid)`
    margin-top:8px;
  `

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Grid container spacing={4} columns={16}>
        <Grid item xs={12} > 
          <StyledTitle>Docs List</StyledTitle>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
        <StyledGrid item xs={3.8}>
            <StyledTitle>New Docs</StyledTitle>
            <Paper elevation={1}>
              <p>?????????1</p>
              <p>?????????2</p>
              <p>?????????3</p>
              <p>?????????4</p>
              <p>?????????5</p>
            </Paper>
            <StyledTitle>Edit History</StyledTitle>
            <Paper elevation={1}>
              <p>?????????1</p>
              <p>?????????2</p>
              <p>?????????3</p>
              <p>?????????4</p>
              <p>?????????5</p>
            </Paper>
        </StyledGrid>
      </Grid>
    </>
  );
}