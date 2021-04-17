import { authenticateUser } from '../authentication/authentication';
import { fetchCharacters } from '../../api/fetchCharacters';

export const getCharacters = (setCharacters: Function) => {
    authenticateUser()
    .then(()=>fetchCharacters()
            .then(response => {
                setCharacters(response.data.results)
            }))
            .catch(()=>setCharacters([]))
    .catch(() => setCharacters([]))
}