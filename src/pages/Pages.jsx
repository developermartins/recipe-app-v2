import React from 'react';
import Home from './Home';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Cuisine from './Cuisine';

const Pages = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cuisine' element={ <Cuisine /> } />
      </Routes>
    </Router>
  );
};

export default Pages;
