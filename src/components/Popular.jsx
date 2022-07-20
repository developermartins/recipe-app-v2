import React, { useEffect } from 'react';
import { getPopular } from '../services/randomRecipe';

const Popular = () => {
  useEffect(() => {
    getPopular();
  }, [])


  return (
    <div>Popular</div>
  );
};

export default Popular;
