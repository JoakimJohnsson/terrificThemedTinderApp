import {LogoIcon} from "./LogoIcon.tsx";
import {PAGES} from "../assets/constants.tsx";
import {faHeart, faUsers, faSwatchbook, faPalette} from "@fortawesome/sharp-duotone-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";


export const Header = () => {
    return (
        <header className="section pb-2">
            <nav className="navbar" role="navigation" aria-label="Home navigation">
                <div className="navbar-brand mr-5">
                    <Link to={"/"} className={"navbar-item has-text-weight-bold is-flex is-align-items-center"}>
                        <LogoIcon size={"2x"}/>
                        <span className={"is-display-none"}>{PAGES.APP.NAME_SHORT}</span>
                        <span className={"is-display-flex"}>{PAGES.APP.NAME}</span>
                    </Link>
                </div>
                <div id="navbarBasicExample" className="navbar-menu is-flex">
                    <div className="navbar-start">
                        <Link to={"/profiles"} className="navbar-item"><FontAwesomeIcon icon={faUsers} size={"2x"} className={"mr-1"}/> {PAGES.PROFILES.NAME}</Link>
                        <Link to={"/matches"} className="navbar-item"><FontAwesomeIcon icon={faHeart} size={"2x"} className={"mr-1"}/> {PAGES.MATCHES.NAME}</Link>
                        <Link to={"/themes"} className="navbar-item"><FontAwesomeIcon icon={faSwatchbook} size={"2x"} className={"mr-1"}/> {PAGES.THEMES.NAME}</Link>
                        <Link to={"/theme-editor"} className="navbar-item"><FontAwesomeIcon icon={faPalette} size={"2x"} className={"mr-1"}/> {PAGES.THEME_EDITOR.NAME}</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
