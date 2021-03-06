import React,{ useState } from 'react';
import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';
import Home from '../Home';
import CreatePage from '../CreatePage';
import Mypage from '../accounts/Mypage';

const MenuAppBar = () => {

  const HeaderTitle = styled.h2`
    font-weight: bold;
    margin: 5px 35px;
    font-family: 'Cherry Swash', cursive;
    width:280px;
  `
  const StyledAppBar = styled(AppBar)`
    background-color: #696969;
  `
  const StyledFont = styled.span`
    font-size: 40px;
  ` 

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static">
        <HeaderTitle><StyledFont>T</StyledFont>akeover <StyledFont>D</StyledFont>ocs <StyledFont>G</StyledFont>enerator</HeaderTitle>
        <Tabs value={value} 
          textColor="default"
          TabIndicatorProps={{
            style: {
              backgroundColor: '#FFFFFF',
              height: '2px'
            }
          }} 
          onChange={handleChange} 
          centered
          >
          <Tab label="HOME" />
          <Tab label="ACCOUNT" />
          <Tab label="CREATE" />
        </Tabs>
        </StyledAppBar>
      </Box>
      { value === 0 && <Home /> }
      { value === 1 && <Mypage /> }
      { value === 2 && <CreatePage /> }
    </>
  )
}

export default MenuAppBar
