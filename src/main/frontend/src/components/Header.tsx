import {LogoIcon} from "./LogoIcon.tsx";


export const Header = () => {
    return (
        <header className="section">
            <div className="container has-text-centered">
                <h1 className={"title mb-0"}>Terrific Themed Tinder AI app</h1>
                <LogoIcon size={"3x"}/>
            </div>
        </header>
    )
}
