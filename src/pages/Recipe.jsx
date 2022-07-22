import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getRecipeDetails } from '../services/getRecipeDetails';

const Recipe = () => {

  let params = useParams();

  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    const getDetails = async (params) => {
      const data = await getRecipeDetails(params);

      setRecipeDetails(data);
    };

    getDetails(params.name);
  }, []);

  return (
    <div>{ recipeDetails.title }</div>
  );
};

const DetailWrapper = styled.section`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
