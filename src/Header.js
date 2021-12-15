import SearchBar from './SearchBar.js';
import Title from './Title.js';

function Header() {
    return (
        <div className={"header"}>
            <Title title={"My Garden"}/>
            <SearchBar/>
        </div>
    )
}

export default Header;