import './HamburgerMenu.css';

function HamburgerMenu() {
    return(
        <div className={"hamburger-menu"}>
            <input className={"hamburger-menu-checkbox"} type="checkbox" name="" id=""/>
            <div className={"hamburger-lines"}>
                <span className={"line line1"}/>
                <span className={"line line2"}/>
                <span className={"line line3"}/>
            </div>
        </div>
    )
}

export default HamburgerMenu;
