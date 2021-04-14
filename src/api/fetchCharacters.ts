import axios from 'axios';

export const fetchCharacters = () => axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118');