import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import {  GiNoodles, GiChopsticks  } from 'react-icons/gi';
import styled from 'styled-components';
import React from 'react';
import {  NavLink  } from 'react-router-dom';

const Category = () => {
  return (
    <section>
        <List>
            <NavLink to={'/cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Itália</h4>
            </NavLink>
            <NavLink to={'/cuisine/american'}>
                <FaHamburger />
                <h4>América</h4>
            </NavLink>
            <NavLink to={'/cuisine/chinese'}>
                <GiNoodles />
                <h4>China</h4>
            </NavLink>
            <NavLink to={'/cuisine/japanese'}>
                <GiChopsticks />
                <h4>Japão</h4>
            </NavLink>
        </List>
    </section>
  );
};

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Category;
