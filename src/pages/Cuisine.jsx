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

  return (
    <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        {cuisine.map((recipe) => {
            return (
                <Card key={recipe.id}>
                    <Link to={"/recipe/" + recipe.id}>
                        <img src={recipe.image} alt={recipe.title} />
                        <h4>{recipe.title}</h4>
                    </Link>
                </Card>
            );
        })}
    </Grid>
  );
};

const Grid = styled(motion.section)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine;
