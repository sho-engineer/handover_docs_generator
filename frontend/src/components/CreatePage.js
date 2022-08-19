import React,{ useState, useEffect } from 'react'
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

const handOverLists = [
  "目的",
  "アプリ概要",
  "開発環境",
  "アプリケーション全体像",
  "参考資料"
]

const genres = [
  "引き継ぎ資料",
  "技術ドキュメント"
]

const environs = [
  "OS",
  "言語/バージョン",
  "フレームワーク/バージョン"
]

const refersItem = [
  "Webサイト",
  "書籍",
  "記事" 
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
  width:80%;
  margin:0 auto;
  margin-bottom:50px;
`

const StyledTableCell = styled(TableCell)`
  width:50%;
`

const TextFieldInTables = styled(DecoratedTextField)`
  width:100%;
`
// 開発環境全体
let devEnvirons = [];
// 選択されている開発環境(タイトル)
let selectedEnviron = [];
// 選択されている開発環境(内容)
let selectedEnvironItem = [];
// 参考文献
let refers = [];
// 選択されている参考文献タイトル
let selectedReferTitle = [];
// 選択されている参考文献アイテム
let selectedReferItem = [];

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [date, setDate] = useState('');
  const [isButtonActivate, setIsButtonActivate] = useState(false);
  const [author, setAuthor] = useState('');
  const [purpose, setPurpose] = useState('');
  const [environ, setEnviron] = useState('');
  const [environItem, setEnvironItem] = useState('');
  const [devCount, setDevCount] = useState(1);
  const [overview, setOverview] = useState('');
  const [refer, setRefer] = useState('');

  let devCounts = [...Array(devCount)];
  
  const handleTitle = e => setTitle(e.target.value);
  const handleGenre = e => setGenre(e.target.value);
  const handleDateChange = e => setDate(e.target.value);
  const handleAuthor = e => setAuthor(e.target.value);
  const handlePurpose= e => setPurpose(e.target.value);
  const handleEnviron = e => {
    setEnviron(e.target.value);
    selectedEnviron[devCount] = e.target.value;
  }
  const handleEnvironItem = e => {
    setEnvironItem(e.target.value);
    selectedEnvironItem[devCount] = e.target.value;
    devEnvirons[devCount] = {env:selectedEnviron[devCount],item:selectedEnvironItem[devCount]}
  }
  const handleOverview = e => setOverview(e.target.value);
  const handleRefers = e => {
    setRefer(e.target.value);
    selectedReferItem[count] = e.target.value;
    refers[count] = {refer:selectedReferTitle[count],item:selectedReferItem[count]}
  }
  
  const commons = [
    "タイトル", 
    "ドキュメント種別",
    "文責",
    "執筆日",
  ]
  

  useEffect(() => {
      // if(title != "" && genre != "" && author != "" && purpose!= ""){
    if(title != ""){
          setIsButtonActivate(false);
      }else{
          setIsButtonActivate(true);
      }
  });

  const buttonClicked = () => {
    let body = {};
    if(devEnvirons) {
      // 開発環境が入力されていたら、配列の先頭がnullになっているため削除する
      devEnvirons.shift();
    }
    
    if(genre == "引き継ぎ資料"){
      body.title = title;
      body.genre = genre;
      body.date = date;
      body.author = author;
      body.purpose = purpose;
      body.environ = devEnvirons;
      body.overview = overview;
      body.refers = refers;
    }

    alert(JSON.stringify(body));
    
  }
  const plusOneToDevCount = () => {
    setDevCount(devCount+1);
  }
  const minusOneFromDevCount = () => {
    setDevCount(devCount-1);
    devEnvirons.splice(devCount,1);
  }
  const common = commons.map( list => {
    /*
    ここのリファクタリング必要
    同様の記述が複数見られるので、できればまとめたい
    */
    switch(list){
      case "タイトル":
        return(
          <>
            <StyledIntputs title={list} handler={ handleTitle }/>
            <InputContent>入力内容：{ title }</InputContent>
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
        return(
          <>
            <StyledIntputs title={list} handler={ handleAuthor }/>
            <InputContent>入力内容：{ author }</InputContent>
          </>
        )
      case "執筆日":
        return <StyledIntputs type="date" title={list} handler={ handleDateChange } />
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
              onChange={ handlePurpose }
              />
              <InputContent>入力内容：{purpose}</InputContent>
            </>
          )
          case "アプリ概要":
            return(
              <>
                <StyledTitle>{list}</StyledTitle>
                <DecoratedTextField
                id="outlined-multiline-static"
                label={list}
                multiline
                rows={4}
                onChange={ handleOverview }
                />
                <InputContent>入力内容：{overview}</InputContent>
              </>
            )
        case "参考資料":
          let th = "参考資料";
          let td = "URL";
          let items = refersItem;
        case "開発環境":
          if(list == "開発環境"){
            th = "分類";
            td = "情報";
            items = environs;
          }
          return(
            <>
              <StyledTitle>{list}</StyledTitle>
              <StyledTableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell align='center'>{th}</TableCell>
                      <TableCell align='center'>{td}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      {
                        counts.map(() => {
                          return(
                            <TableRow>
                              <StyledTableCell align='center'>
                                <TextFieldInTables
                                  select
                                  label={list}
                                  onChange={handleEnviron}
                                >
                                  {items.map((val, index) => (
                                      <MenuItem key={index} value={val}>
                                          {val}
                                      </MenuItem>
                                  ))}
                                </TextFieldInTables>
                              </StyledTableCell>
                              <StyledTableCell align='left'>
                                <TextFieldInTables onChange={list = "参考文献" ? handleRefers:handleEnvironItem}/>
                              </StyledTableCell>
                            </TableRow>
                          )
                        })
                      }
                  </TableBody>
                </Table>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
              </StyledTableContainer>
            </>
          ) 
        case "アプリケーション全体像":
          return(
            <>
              <StyledTitle>{list}</StyledTitle>
              <StyledButton variant="outlined" >
                <InputFileBtnHide type="file" />
                ファイル構成図を登録する
              </StyledButton>
            </>
          )
        default:
          return(
            <>
              <StyledIntputs title={list} handler={handleTitle} />
              <InputContent>入力内容：{title}</InputContent>
            </>
        )
      }
  })

  return (
    <StyledPaper elevation={2}>
      <InputContent>全ての事項が入力必須です。</InputContent>
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