import React from 'react'
import { AppBar } from '@mui/material'
import { Box } from '@mui/system'
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu'

const MenuAppBar = () => {

  const HeaderTitle = styled.h2`
    font-weight: bold;
    margin: 20px 30px;
  `
  const AppBarStyled = styled(AppBar)`
    background-color: #696969;
  `;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="static">

          <IconButton
                size="medium"
                arialabel="menu"
                color="default"
                position="fixed"
                sx={{ mr: 2 }}
            >
            </IconButton>
        <HeaderTitle>引き継ぎDocs Generator</HeaderTitle>
      </AppBarStyled> 
    </Box>
  )
}

export default MenuAppBar
