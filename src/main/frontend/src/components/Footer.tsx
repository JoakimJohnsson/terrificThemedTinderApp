import {LogoIcon} from "./LogoIcon.tsx";
import {APP_NAME} from "../assets/constants.tsx";


export const Footer = () => {
    return (
        <footer className="footer">
            <p className="is-size-7">Copyright &copy; 2024 {APP_NAME}</p>
            <LogoIcon/>
        </footer>
    )
}
