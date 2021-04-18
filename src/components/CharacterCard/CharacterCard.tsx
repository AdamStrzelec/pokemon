import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

type Props = {
    name: string
}

const CharacterCard: React.FC<Props> = ({ name }) => {

    return(
        <Link to={`/character/${name}`} className="character-card-wrapper">
            <Card variant="outlined" className="character-card">
                {name}
            </Card>
        </Link>
    )
}

export default CharacterCard;