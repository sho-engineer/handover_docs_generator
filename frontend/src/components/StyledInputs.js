import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const StyledInputs = () => {
    const [genre, setGenre] = useState('');
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGenre(event.value);
    };
    const handleDateChange = (newValue) => {
        setValue(newValue);
    }

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
    const item = lists.map( list => {
        if(list === "執筆日")
        {
            return
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
    </>
    )
}

export default StyledInputs