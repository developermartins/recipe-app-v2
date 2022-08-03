import React, { useEffect } from 'react';
import Category from './components/Category';
import Pages from './pages/Pages';
import {  BrowserRouter as Router } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Logo to={"/"}>
            <GiKnifeFork />
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
};

const Logo = styled(Link)`
  cursor: pointer;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
`;

export default App;
