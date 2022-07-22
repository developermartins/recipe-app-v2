export const getRecipeDetails = async (params) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${params}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

    const data = await api.json();
    return data;
};
