const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?page=3&perPage=50';

export async function getPoke() {  
    const response = await fetch(URL);
    return await response.json();
}