import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { getCharacterByName } from '../utils/getCharacterByName/getCharacterByName';
import { UserContext } from '../context/context';

type Props = {
    match: any
}

const Character: React.FC<Props> = ({ match: { params: { name }} }) => {

    const [character, setCharacter] = useState(Object)

    const userContext = useContext(UserContext);
    const { userStatus } = userContext;

    useEffect(()=>{
        getCharacterByName(setCharacter, name);
    }, [userStatus])
    
    return(
        <>
            {(Object.keys(character).length>0) &&
                <div className="character-wrapper">
                    <p><strong>Name:</strong> {character.name}</p>
                    <p><strong>Base experience:</strong> {character.base_experience}</p>
                    <p><strong>Height:</strong> {character.height}</p>
                    <br/>
                    <p><strong>Stats:</strong></p>
                    {character.stats.map((item: any) => <p key={item.stat.name}>{item.stat.name + ": " + item.base_stat}</p>)}
                    <br/>
                    <p><strong>Moves:</strong></p>
                    {character.moves.map((item: any) => <p key={item.move.name}>{item.move.name}</p>)}
                </div>
            }
        </>
    )
}

export default withRouter(Character);