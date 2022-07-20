import React, { useEffect, useState } from 'react';
import { getPopular } from '../services/randomRecipe';
import styled from 'styled-components';

const Popular = () => {

  const [popular, setPopular] = useState([]);
   

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPopular();
      
      setPopular(response.recipes)
    };

    fetchData();
  }, []);


  return (
    <section>
      {popular.map((recipe) => {
        return (
         <Wrapper>
            <h3>Pratos mais preparados</h3>
            {popular.map((recipe) => {
              return (
                <Card>
                  <p key={recipe.id}>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              );
            })}
         </Wrapper>
        )
      })}
    </section>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;

export default Popular;
