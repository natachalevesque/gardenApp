import HamburgerMenu from './HamburgerMenu.js';
import MenuList from './MenuList.js';

function SideBarMenu() {
    return (
        <div className={"SideBarMenu"}>
            <HamburgerMenu/>
            <MenuList/>
        </div>
    )
}

export default SideBarMenu;