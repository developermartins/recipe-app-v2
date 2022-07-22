import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSearched } from '../services/searchedRecipe';
import styled from 'styled-components';
import NotFound from '../components/NotFound';

const Searched = () => {

  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getSearchedRecipe = async (params) => {

      const data = await getSearched(params);

      setSearchedRecipes(data.results);
    };

    getSearchedRecipe(params.search);
  }, [params.search]);


  return (
    <Grid>
      {searchedRecipes.length ? searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      }) : <NotFound />}
    </Grid>
  );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: 15rem 15rem 15rem 15rem;
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

export default Searched;
