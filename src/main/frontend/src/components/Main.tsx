import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage, faUser} from "@fortawesome/sharp-duotone-solid-svg-icons";
import {APP_NAME} from "../assets/constants.tsx";
import {ProfileSelector} from "./ProfileSelector.tsx";


export const Main = () => {

    return (
        <main className="section pt-3">
            <div className="container">
                <h1 className={"title"}>{APP_NAME}</h1>
                <div className={"content"}>
                    <FontAwesomeIcon icon={faUser} size={"2x"} className={"mr-2"}/>
                    <FontAwesomeIcon icon={faMessage} size={"2x"} className={"mr-2"}/>
                </div>
                <ProfileSelector/>
            </div>
        </main>
    )
}
