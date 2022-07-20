import React, { useEffect, useState } from 'react';
import { getPopular } from '../services/randomRecipe';

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
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        )
      })}
    </section>
  );
};

export default Popular;
