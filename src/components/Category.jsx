import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import {  GiNoodles, GiChopSticks  } from 'react-icons/gi';
import styled from 'styled-components';
import React from 'react';
import {  NavLink  } from 'react-router-dom';

const Category = () => {
  return (
    <section>
        <nav>
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
                <GiChopSticks />
                <h4>Japão</h4>
            </div>
        </nav>
    </section>
  );
};

export default Category;
