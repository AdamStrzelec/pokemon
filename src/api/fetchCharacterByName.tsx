import axios from 'axios';

export const fetchCharacterByName = (name: string) => axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);