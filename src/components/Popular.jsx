import React, { useEffect, useState } from 'react';
import { getPopular } from '../services/randomRecipe';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import "@splidejs/splide/dist/css/splide.min.css";

const Popular = () => {

  const [popular, setPopular] = useState([]);
   

  useEffect(() => {
    const savedData = localStorage.getItem("popular");
    const getRecipes = async () => {
      if (savedData) {
        setPopular(JSON.parse(savedData));
      } else {
        const response = await getPopular();

        localStorage.setItem("popular", JSON.stringify(response.recipes));
        setPopular(response.recipes);
      };
    };

    getRecipes()
  }, []);

  return (
    <section>
      <Wrapper>
        <h3>Pratos mais preparados</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `;

  const Gradient = styled.div`
    border-radius: 2rem;
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  `;

export default Popular;
