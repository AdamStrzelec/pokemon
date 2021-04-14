type Props = {
    handleSearchValue: any
}

const Searchbar: React.FC<Props> = ({ handleSearchValue }) => {
    return(
        <div className="searchbar-wrapper">
            <input type="text" placeholder={'Find character'} onChange={e => handleSearchValue(e.target.value)} className="searchbar"/>
        </div>
    )
}

export default Searchbar;