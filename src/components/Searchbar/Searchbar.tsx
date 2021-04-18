import TextField from '@material-ui/core/TextField';
type Props = {
    handleSearchValue: Function
}

const Searchbar: React.FC<Props> = ({ handleSearchValue }) => {
    return(
        <div className="searchbar-wrapper">
            <TextField placeholder={'Find character'} onChange={e => handleSearchValue(e.target.value)} className="searchbar"/>
        </div>
    )
}

export default Searchbar;