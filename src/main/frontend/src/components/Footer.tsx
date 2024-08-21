import {LogoIcon} from "./LogoIcon";
import {PAGES} from "../assets/constants";


export const Footer = () => {
    return (
        <footer className="footer">
            <p className="is-size-7">Copyright &copy; 2024 {PAGES.APP.NAME}</p>
            <LogoIcon/>
        </footer>
    )
}
