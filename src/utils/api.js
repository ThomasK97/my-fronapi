import axios from 'axios';

export const BASE_URL = 'https://tkapi.herokuapp.com/api/';
export const POKEMON_URL = 'pokemons';
export const POPULATE = '?populate=*';

export const getData = (url) => {
  axios.get(url).then((response) => console.log(response.data.data));
};

export const getPokemons = getData(BASE_URL + POKEMON_URL + POPULATE);