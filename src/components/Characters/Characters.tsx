import CharacterCard from '../CharacterCard/CharacterCard';

interface Character {
    name: string,
    url: string,
}

type Props = {
    characters: Array<Character>,
    searchValue: string
}

const Characters: React.FC<Props> = ({ characters, searchValue }) => {

    return(
        <div className="characters-wrapper">
            {characters.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map(item => 
                <CharacterCard key={item.name} name={item.name} url={item.url} />
            )}
        </div>
    )
}

export default Characters;