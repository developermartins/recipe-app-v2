import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {  motion  } from 'framer-motion';
import {  Link, useParams  } from 'react-router-dom';
import { getCuisine } from '../services/cuisine';

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    useEffect(() => {
        const getCuisineRecipes = async (name) => {
            const data = await getCuisine(name);
            
            setCuisine(data.results);
        };

        getCuisineRecipes(params.type);
    }, [params.type]);

    console.log(cuisine)
  return (
    <div>Cuisine</div>
  );
};

export default Cuisine;
