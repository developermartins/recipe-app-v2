import React from 'react';
import styled from 'styled-components';
import cooking from '../img/cooking.png';

const NotFound = () => {
  return (
    <Section>
      <img src={cooking} alt="cooking" />
      <p>Oops... Recipe not found.</p>
    </Section>
  );
};

const Section = styled.section `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 450%;
  margin-top: 2em;
  font-size: 1.5rem;

  img {
    height: 200px;
  }
`;

export default NotFound;
