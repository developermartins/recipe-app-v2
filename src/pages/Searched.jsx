import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSearched } from '../services/searchedRecipe';

const Searched = () => {

  const [searchedRecipes, setSearchedRecipes] = useState();

  const params = useParams();

  useEffect(() => {
    const getSearchedRecipe = async (params) => {
      const data = await getSearched(params);

      setSearchedRecipes(data.result);
    };

    getSearchedRecipe(params.search);
  }, [params.search]);


  return (
    <div>Searched</div>
  );
};

export default Searched;
