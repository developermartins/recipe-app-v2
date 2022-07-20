export const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=9`);

    const data = await api.json();

    return data;
};
