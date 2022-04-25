import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const commons = [
  "タイトル",
  "ドキュメント種別",
  "文責",
  "執筆日"
]

const handOverLists = [
  "目的",
  "開発環境",
  "ファイル構成",
] 

const genres = [
  "引き継ぎ資料",
  "技術ドキュメント"
]

const environs = [
  "OS",
  "言語",
  "バージョン"
]

const StyledPaper = styled(Paper)`
  text-align:center;
  width:95%;
  margin: 0 auto;
  margin-top:20px;
  padding-top:40px;
`
const StyledButton = styled(Button)`
  width:30%;
  padding:10px 10px;
  margin: 10px 10px 30px 10px; 
`

const DecoratedTextField = styled(TextField)`
  width:40%;
`

const StyledTitle = styled.h2`
  font-weight: bold;
  margin: 10px 35px;
  font-family: 'Cherry Swash', cursive;
  color: #696969;
`

const InputFileBtnHide = styled.input`
  opacity:0;
  appearance: none;
  position: absolute;
`
const InputContent = styled.p`
  font-weight: bold;
  color: #696969;
  margin-bottom:20px; 
  font-size:15px;

`

const StyledTableContainer = styled(TableContainer)`
  width:40%;
  margin:0 auto;
  margin-top:50px;
`

const StyledTableCell = styled(TableCell)`
  width:50%;
`

const TextFieldInTables = styled(DecoratedTextField)`
  width:100%;
`

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [date, setDate] = useState('');
  const [isButtonActivate, setIsButtonActivate] = useState(false);
  const [author, setAuthor] = useState('');
  const [goal, setGoal] = useState('');
  const [environ, setEnviron] = useState('');
  const [environItem, setEnvironItem] = useState('');

  const handleTitle = e => setTitle(e.target.value);
  const handleGenre = e => setGenre(e.target.value);
  const handleDateChange = e => setDate(e.target.value);
  const handleAuthor = e => setAuthor(e.target.value);
  const handleGoal = e => setGoal(e.target.value);
  const handleEnviron = e => setEnviron(e.target.value);
  const handleEnvironItem = e => setEnvironItem(e.target.value);
  

  useEffect(() => {
      if(title != "" && genre != "" && author != "" && goal != ""){
          setIsButtonActivate(false);

      }else{
          setIsButtonActivate(true);
      }
  });

  const buttonClicked = () => {
    alert(`タイトル：${title} ジャンル：${genre} 日付：${date} 著者：${author} 内容:${goal}`);
  }

  const common = commons.map( list => {
    switch(list){
      case "タイトル":
        return(
          <>
            <StyledIntputs title={list} handler={handleTitle} />
            <InputContent>入力内容：{title}</InputContent>
          </>
        )
      case "ドキュメント種別":
        return <StyledIntputs 
                title={list} 
                select
                value={genre}
                handler={handleGenre}
                array={genres}
                />
      case "文責":
        return <StyledIntputs title={list} handler={handleAuthor} />
      case "執筆日":
        return <StyledIntputs type="date" title={list} handler={handleDateChange} />
    }
})

  const handOverItem = handOverLists.map( list => {
      switch(list){
        case "目的":
          return(
            <>
              <StyledTitle>{list}</StyledTitle>
              <DecoratedTextField
              id="outlined-multiline-static"
              label={list}
              multiline
              rows={4}
              onChange={handleGoal}
              />
              <InputContent>入力内容：{goal}</InputContent>
            </>
          )
        case "開発環境":
          return(
            <StyledTableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>分類</TableCell>
                    <TableCell align='center'>情報</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <StyledTableCell align='center'>
                      <TextFieldInTables
                        select
                        label={list}
                        onChange={handleEnviron}
                      >
                        {environs.map((val, index) => (
                            <MenuItem key={index} value={val}>
                                {val}
                            </MenuItem>
                        ))}
                      </TextFieldInTables>
                    </StyledTableCell>
                    <StyledTableCell align='left'>
                      <TextFieldInTables onChange={handleEnvironItem}/>
                    </StyledTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </StyledTableContainer>
          ) 
        case "ファイル構成":
          return(
            <>
              <br />
              <StyledButton variant="outlined" >
                <InputFileBtnHide type="file" />
                ファイル構成図を登録する
              </StyledButton>
            </>
          )
      }
  })



  return (
    <StyledPaper elevation={2}>
      <pInputContent>全ての事項が入力必須です。</pInputContent>
      {common}
      <br/>
      {genre === "引き継ぎ資料" || genre === "" ? <div>{handOverItem}</div> : "テスト"}
      <StyledButton variant='outlined' color='inherit' disabled={ isButtonActivate } onClick={buttonClicked}>作成</StyledButton>
      <br />
    </StyledPaper>
  )
}

export default CreatePage

const StyledIntputs = (props) => {
  return(
    <>
      <StyledTitle>{props.title}</StyledTitle>
      {props.select ? 
        <DecoratedTextField 
          select 
          id="outlined-basic" 
          label={props.title} 
          variant="outlined" 
          onChange={ props.handler } 
          >
          {props.array.map((val, index) => (
              <MenuItem key={index} value={val}>
                  {val}
              </MenuItem>
          ))}
          </DecoratedTextField> :
          props.type ? 
            <DecoratedTextField  
              type={props.type}
              id="outlined-basic" 
              variant="outlined" 
              onChange={ props.handler }
            />:
          <DecoratedTextField  
            id="outlineoutlined-basicd" 
            variant="outlined" 
            label={props.title} 
            onChange={ props.handler }
            />
      }
    </>
  )
} 