import React from 'react'
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const StyledTextField = (props) => {

    const DecoratedTextField = styled(TextField)`
        width:50%;
        margin-bottom:30px;
    `

    const StyledTitle = styled.h2`
        font-weight: bold;
        margin: 10px 35px;
        font-family: 'Cherry Swash', cursive;
        color: #696969;
    `

return (
    <>
        <StyledTitle>{props.value}</StyledTitle>
        <DecoratedTextField id="outlined-basic" label={ props.value } variant="outlined" />
    </>
    )
}

export default StyledTextField