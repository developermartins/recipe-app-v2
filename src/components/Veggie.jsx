import React, { useEffect, useState } from 'react';
import { getVeggie } from '../services/veggieRecipes';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import "@splidejs/splide/dist/css/splide.min.css";

const Veggie = () => {
  const [veggie, setveggie] = useState([]);
   

  useEffect(() => {
    const savedData = localStorage.getItem("veggie");
    const getRecipes = async () => {
      if (savedData) {
        setveggie(JSON.parse(savedData));
      } else {
        const response = await getVeggie();

        localStorage.setItem("veggie", JSON.stringify(response.recipes));
        setveggie(response.recipes);
      };
    };

    getRecipes()
  }, []);

  return (
    <section>
      <Wrapper>
        <h3>Melhores pratos vegetarianos</h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}>
          {veggie.map((recipe) => {
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

export default Veggie;
