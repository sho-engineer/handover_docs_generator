import React, { useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const StyledInputs = () => {
    const [genre, setGenre] = useState('');
    const [value, setValue] = useState('');
    const [buttonCondition, setButtonCondition] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGenre(event.value);
    };
    const handleDateChange = (newValue) => {
        setValue(newValue);
    }

    useEffect(() => {
        if(genre != ""){
            setButtonCondition(false);
        }else{
            setButtonCondition(true);
        }
    });

    const lists = [
        "タイトル",
        "ドキュメント種別",
        "文責",
        "執筆日",
    ]

    const genres = [
        "引き継ぎ資料",
        "技術ドキュメント"
    ]

    const DecoratedTextField = styled(TextField)`
        width:40%;
        margin-bottom:20px;
    `

    const StyledTitle = styled.h2`
        font-weight: bold;
        margin: 10px 35px;
        font-family: 'Cherry Swash', cursive;
        color: #696969;
    `
    const StyledButton = styled(Button)`
        width:30%;
        padding:10px 10px;
        margin: 10px 10px 30px 10px; 
    `

    const item = lists.map( list => {
        if(list === "執筆日")
        {
            return //(
                // <LocalizationProvider dateAdapter={AdapterDateFns}>
                //     <DesktopDatePicker
                //     label="Date desktop"
                //     inputFormat="MM/dd/yyyy"
                //     value={value}
                //     onChange={handleDateChange}
                //     />
                // </LocalizationProvider>
            // )
        }
        else if(list === "ドキュメント種別"){
            return(
                <>
                    <StyledTitle>{list}</StyledTitle>
                    <DecoratedTextField
                        id="outlined-select-currency"
                        select
                        label="ドキュメント種別"
                        value={genre}
                        onChange={handleChange}
                        helperText="ドキュメント種別を入力してください"
                        >
                        {genres.map((option) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                    </DecoratedTextField>
                </>
            )
        }
        else
        {
            return(
                <>
                    <StyledTitle>{list}</StyledTitle>
                    <DecoratedTextField id="outlined-basic" label={ list } variant="outlined" />
                </>
            );
        }
    })

return (
    <>
    {item}
    <br/>
    <StyledButton variant='outlined' color='inherit' disabled={ buttonCondition }>作成</StyledButton>
    </>
    )
}

export default StyledInputs