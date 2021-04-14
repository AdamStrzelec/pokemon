
import { authenticateUser } from '../authentication/authentication';
import { fetchCharacters } from '../../api/fetchCharacters';

export const getCharacters = async (setCharacters: any) => {
    authenticateUser()
    .then(()=>fetchCharacters()
            .then(response => {
                setCharacters(response.data.results)
            }))
            .catch(()=>setCharacters([]))
    .catch(() => setCharacters([]))
}