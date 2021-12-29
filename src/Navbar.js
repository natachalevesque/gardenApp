import './Navbar.css';

import HamburgerMenu from './HamburgerMenu.js';
import Header from "./Header";
import MenuList from './MenuList.js';
import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <div className={"Navbar"}>
            <HamburgerMenu/>
            <Header/>
            <MenuList/>
            <SearchBar/>
        </div>
    )
}

export default Navbar;