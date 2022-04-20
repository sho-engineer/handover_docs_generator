import React, { useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ListComponent from './ListComponent';

const commons = [
    "タイトル",
    "ドキュメント種別",
    "文責"
]

const handOverLists = [
    "執筆日",
    "目的",
    "開発環境",
    "ファイル構成",
] 

const genres = [
    "引き継ぎ資料",
    "技術ドキュメント"
]

const StyledInputs = () => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [value, setValue] = useState('');
    const [isButtonActivate, setIsButtonActivate] = useState(false);
    const [author, setAuthor] = useState('');

    const handlerTitle = (event:ChangeEvent<HTMLInputElement>) => {
        setGenre(event.value);
    };
    const handleGenre = (event:ChangeEvent<HTMLInputElement>) => {
        setGenre(event.value);
    };
    const handleDateChange = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    const handleAuthor = (event: ChangeEvent<HTMLInputElement>) => {
        setAuthor(event.target.value);
    }

    useEffect(() => {
        if(genre != "" && author != "" ){
            setIsButtonActivate(false);

        }else{
            setIsButtonActivate(true);
        }
    });

    const StyledButton = styled(Button)`
        width:30%;
        padding:10px 10px;
        margin: 10px 10px 30px 10px; 
    `

    const item = commons.map( list => {
        switch(list){
            case "執筆日":
                return (
                    <>
                        <br/>
                        <ListComponent type={"date"} title={list} handler={handleAuthor} />
                    </>
                )
            case "ドキュメント種別":
                return(
                    <>
                        <ListComponent 
                            title={list} 
                            handler={handleGenre} 
                            array={genres}
                        />
                    </>
                )
            default:
                return(
                    <>
                        <ListComponent title={list} handler={handlerTitle} />
                    </>
                );
        }
    })

return (
    <>
    {item}
    <br/>
    <StyledButton variant='outlined' color='inherit' disabled={ isButtonActivate }>作成</StyledButton>
    </>
    )
}

export default StyledInputs