function ToggleMenu() {
    return(
        <div className={"hamburger_menu"}>
            <input className={"checkbox"} type="checkbox" name="" id=""/>
            <div className={"hamburger_lines"}>
                <span className={"line line1"}></span>
                <span className={"line line2"}></span>
                <span className={"line line3"}></span>
            </div>
            <div className="menu-items">
                <li><a href="#">Home</a></li>
            </div>
        </div>
    )
}

export default ToggleMenu;
