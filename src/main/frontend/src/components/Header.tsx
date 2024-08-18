import {LogoIcon} from "./LogoIcon.tsx";
import {APP_NAME_SHORT} from "../assets/constants.tsx";


export const Header = () => {
    return (
        <header className="section pb-2">
            <nav className="navbar" role="navigation" aria-label="Main navigation">
                <div className="navbar-brand mr-5">
                    <a className={"navbar-item has-text-weight-bold is-flex is-align-items-center"}>
                        <LogoIcon size={"2x"}/> <span>{APP_NAME_SHORT}</span>
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>
                        <a className="navbar-item">
                            Themes
                        </a>
                        <a className="navbar-item">
                            Theme editor
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
