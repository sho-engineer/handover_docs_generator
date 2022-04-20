import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const ListComponent = (props) => {

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
    if(props.type){
        return (
            <>
                <StyledTitle>{ props.title }</StyledTitle>
                <DecoratedTextField type={props.type} id="outlined-basic" variant="outlined" onChange={ props.handler }/>
            </>
        );
    }

    if(props.array){
        
        return (
            <>
                <StyledTitle>{ props.title }</StyledTitle>
                <DecoratedTextField id="outlined-select-currency" select variant="outlined" onChange={ props.handler }>
                    {
                        props.array.map((val, index) => (
                            <MenuItem key={index} value={val}>
                                {val}
                            </MenuItem>
                        ))
                    }
                </DecoratedTextField>
            </>
        );
    }

  return (
    <>
        <StyledTitle>{ props.title }</StyledTitle>
        <DecoratedTextField id="outlined-basic" label={ props.title } variant="outlined" onChange={ props.handler }/>
    </>
  );
}

export default ListComponent;