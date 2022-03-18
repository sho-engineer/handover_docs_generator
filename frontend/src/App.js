import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './About';
import User from './User';
import Home from './Home';
import Login from './components/accounts/Login';

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<User />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
