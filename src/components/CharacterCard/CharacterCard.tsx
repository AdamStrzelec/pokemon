type Props = {
    name: string,
    url: string
}

const CharacterCard: React.FC<Props> = ({ name, url }) => {

    return(
        <div className="character-card">
            <p>{name}</p>
        </div>
    )
}

export default CharacterCard;