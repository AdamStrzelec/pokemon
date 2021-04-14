import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/context';
import { getCharacters } from '../../utils/getCharacters/getCharacters';
import Searchbar from '../Searchbar/Searchbar';
import Characters from '../Characters/Characters';
import { userStatuses } from '../../userStatus/userStatus';

const CharactersContainer = () => {

    const [characters, setCharacters] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const userContext = useContext(UserContext);
    const { userStatus } = userContext;

    useEffect(()=>{
        getCharacters(setCharacters);
    }, [userStatus])
    
    const handleSearchValue = (value: string) => {
        setSearchValue(value)
    }

    return(
        <>
            <Searchbar handleSearchValue={handleSearchValue} />
            {userStatus === userStatuses.SIGNED_IN ?
                <Characters characters={characters} searchValue={searchValue} />
                :
                <h2 className="login-info-header">Sign in to get characters</h2>
            }
            
        </>
    )  
}

export default CharactersContainer;