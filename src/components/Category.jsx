import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import {  GiNoodles, GiChopsticks  } from 'react-icons/gi';
import styled from 'styled-components';
import React from 'react';

const Category = () => {
  return (
    <section>
        <List>
            <div>
                <FaPizzaSlice />
                <h4>Itália</h4>
            </div>
            <div>
                <FaHamburger />
                <h4>América</h4>
            </div>
            <div>
                <GiNoodles />
                <h4>China</h4>
            </div>
            <div>
                <GiChopsticks />
                <h4>Japão</h4>
            </div>
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
