import {LogoIcon} from "./LogoIcon";
import {PAGES} from "../assets/constants";
import {faHeart, faUsers, faSwatchbook, faPalette} from "@fortawesome/sharp-duotone-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <header className="section pb-2">
            <nav className="navbar" role="navigation" aria-label="Home navigation">
                <div className="navbar-brand mr-5">
                    <NavLink
                        to={"/"}
                        className={"navbar-item has-text-weight-bold is-flex is-align-items-center"}
                    >
                        <LogoIcon size={"2x"}/>
                        <span className={"is-display-none"}>{PAGES.APP.NAME_SHORT}</span>
                        <span className={"is-display-flex"}>{PAGES.APP.NAME}</span>
                    </NavLink>
                </div>
                <div id="navbarBasicExample" className="navbar-menu is-flex">
                    <div className="navbar-start">
                        <NavLink
                            to={"/profiles"}
                            className={({isActive}) =>
                                [
                                    isActive ? "is-active" : "",
                                    "navbar-item"
                                ].join(" ")
                            }
                        >
                            <FontAwesomeIcon icon={faUsers} size={"2x"} className={"mr-1"}/> {PAGES.PROFILES.NAME}
                        </NavLink>
                        <NavLink
                            to={"/matches"}
                            className={({isActive}) =>
                                [
                                    isActive ? "is-active" : "",
                                    "navbar-item"
                                ].join(" ")
                            }
                        >
                            <FontAwesomeIcon icon={faHeart} size={"2x"} className={"mr-1"}/> {PAGES.MATCHES.NAME}
                        </NavLink>
                        <NavLink
                            to={"/themes"}
                            className={({isActive}) =>
                                [
                                    isActive ? "is-active" : "",
                                    "navbar-item"
                                ].join(" ")
                            }
                        >
                            <FontAwesomeIcon icon={faSwatchbook} size={"2x"} className={"mr-1"}/> {PAGES.THEMES.NAME}
                        </NavLink>
                        <NavLink
                            to={"/theme-editor"}
                            className={({isActive}) =>
                                [
                                    isActive ? "is-active" : "",
                                    "navbar-item"
                                ].join(" ")
                            }
                        >
                            <FontAwesomeIcon icon={faPalette} size={"2x"} className={"mr-1"}/> {PAGES.THEME_EDITOR.NAME}
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}
