import React, { useState, useEffect, useContext } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { getCharacterByName } from '../utils/getCharacterByName/getCharacterByName';
import { UserContext } from '../context/context';
import Card from '@material-ui/core/Card';

type Props = {
    name: string
}

const Character: React.FC<RouteComponentProps<Props>> = ({ match: { params: { name }} }) => {

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
                    <Card variant="outlined">
                        <p><strong>Name:</strong> {character.name}</p>
                        <p><strong>Base experience:</strong> {character.base_experience}</p>
                        <p><strong>Height:</strong> {character.height}</p>
                    </Card>
                    <br/>
                    <Card variant="outlined">
                        <p><strong>Stats:</strong></p>
                        {character.stats.map((item: any) => <p key={item.stat.name}>{item.stat.name + ": " + item.base_stat}</p>)}
                    </Card>
                    <br/>
                    <Card variant="outlined">
                        <p><strong>Moves:</strong></p>
                        {character.moves.map((item: any) => <p key={item.move.name}>{item.move.name}</p>)}
                    </Card>
                </div>
            }
        </>
    )
}

export default withRouter(Character);