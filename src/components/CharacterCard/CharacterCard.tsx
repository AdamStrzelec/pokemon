import { Link } from 'react-router-dom';

type Props = {
    name: string,
    url: string
}

const CharacterCard: React.FC<Props> = ({ name, url }) => {

    return(
        <Link to={`/character/${name}`} className="character-card">
            <p>{name}</p>
        </Link>
    )
}

export default CharacterCard;