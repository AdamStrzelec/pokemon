import { authenticateUser } from '../authentication/authentication';
import { fetchCharacterByName } from '../../api/fetchCharacterByName';


export const getCharacterByName = (setCharacter: any, name: string) => {
    authenticateUser()
    .then(()=>fetchCharacterByName(name)
            .then(response => {setCharacter(response.data)}))
            .catch(() => setCharacter({}))
    .catch(() => setCharacter({}))
}