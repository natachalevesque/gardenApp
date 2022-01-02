import './SearchBar.css'

function SearchBar({ searchText, setSearchText }) {
    return (
        <form className={"searchBarForm"}>
            <input type="text"
                   value={ searchText }
                   placeholder="Search..."
                   className={"searchBar"}
                   onChange={e => setSearchText(e.target.value)}/>
        </form>
    )
}

export default SearchBar;