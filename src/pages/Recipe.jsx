import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getRecipeDetails } from '../services/getRecipeDetails';

const Recipe = () => {

  let params = useParams();

  const [recipeDetails, setRecipeDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  useEffect(() => {
    const getDetails = async (params) => {
      const data = await getRecipeDetails(params);

      setRecipeDetails(data);
    };

    getDetails(params.name);
  }, []);

  return (
    <DetailWrapper>
      <div>
        <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title} />
      </div>
      <Info>
        <Button 
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>

        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}></h3>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <ul>
            {recipeDetails.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}

      </Info>
    </DetailWrapper>
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

  img {
    border-radius: 5px;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border-radius: 5px;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
