import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './About';
import User from './User';
import Home from './Home';
import Login from './components/accounts/Login';
import MenuAppBar from './components/layouts/MenuAppBar';

const App = () => {
  return (
    <div className='App'>
    <MenuAppBar />
    </div>
  );
}

export default App;
