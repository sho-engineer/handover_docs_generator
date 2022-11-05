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
import axios from 'axios';

const columns = [
  { id: 'ID', label: 'ID', minWidth: 170 },
  { id: 'Indentifier', label: 'Indentifier'},
  { id: 'Type', label: 'Type'},
  { id: 'Created_At', label: 'Created_At'},
  { id: 'Updated_At', label: 'Updated_At'},
  { id: 'Writer', label: 'Writer'},
  { id: 'URL', label: 'URL'},
];

const baseUrl = 'http://127.0.0.1:8000';
const documentApiUrl = `${baseUrl}/api/documents/`;

function createData(ID, Indentifier, Type, Created_At, Updated_At, Writer, URL) {
  return { ID, Indentifier, Type, Created_At, Updated_At, Writer, URL};
}

const rows = [];

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

  React.useEffect(async () => {
    // 非同期通信でデータベースの情報を取得する
    await axios.get(documentApiUrl)
    .then((res) => {
      // データを取得
      let data = res.data;
      for(let d of data){
        console.info(`Obtained data through axios: URL:${documentApiUrl}`);
        let id = d.id;
        let title = d.title;
        let genre = d.genre;
        let author = d.author;
        let date = d.date; 
        let rowData = createData(id, genre, title, author, date);
        // 表示するための配列にpushする
        rows.push(rowData);   
      }    
    });
  },[]);

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
              <p>テスト1</p>
              <p>テスト2</p>
              <p>テスト3</p>
              <p>テスト4</p>
              <p>テスト5</p>
            </Paper>
            <StyledTitle>Edit History</StyledTitle>
            <Paper elevation={1}>
              <p>テスト1</p>
              <p>テスト2</p>
              <p>テスト3</p>
              <p>テスト4</p>
              <p>テスト5</p>
            </Paper>
        </StyledGrid>
      </Grid>
    </>
  );
}