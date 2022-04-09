import React from 'react'
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import styled from 'styled-components';
import StyledTextField from './StyledInputs';

const CreatePage = () => {
  const StyledPaper = styled(Paper)`
    text-align:center;
    width:95%;
    margin: 0 auto;
    margin-top:20px;
    padding-top:40px;
  `

  return (
    <StyledPaper elevation={2}>
        <StyledTextField />
    </StyledPaper>
  )
}

export default CreatePage