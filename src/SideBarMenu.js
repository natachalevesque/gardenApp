import ToggleMenu from './ToggleMenu.js';
import MenuList from './MenuList.js';

function SideBarMenu() {
    return (
        <div className={"SideBarMenu"}>
            <ToggleMenu/>
            <MenuList/>
        </div>
    )
}

export default SideBarMenu;