import './Navbar.css';

import HamburgerMenu from './HamburgerMenu.js';
import Header from "../HeadersAndTitles/Header";
import MenuList from './MenuList.js';
import SearchBar from "../SearchBar";


function Navbar({ searchText, setSearchText }) {
    return (
        <div className={"Navbar"}>
            <HamburgerMenu/>
            <Header/>
            <MenuList/>
            <SearchBar searchText={ searchText } setSearchText={ setSearchText }/>
        </div>
    )
}

export default Navbar;