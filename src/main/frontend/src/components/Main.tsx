import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage, faUser} from "@fortawesome/sharp-duotone-solid-svg-icons";
import {ProfileSelector} from "./ProfileSelector.tsx";
import {APP_NAME, MOCK_PROFILES} from "../assets/constants.tsx";


export const Main = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePrevious = () => {
        setSelectedIndex((prevIndex) =>
            prevIndex === 0 ? MOCK_PROFILES.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setSelectedIndex((prevIndex) =>
            prevIndex === MOCK_PROFILES.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <main className="section pt-3">
            <div className="container has-text-centered">
                <h1 className={"title"}>{APP_NAME}</h1>
                <div className={"content"}>
                    <FontAwesomeIcon icon={faUser} size={"2x"} className={"mr-2"}/>
                    <FontAwesomeIcon icon={faMessage} size={"2x"} className={"mr-2"}/>
                </div>
                <ProfileSelector profile={MOCK_PROFILES[selectedIndex]}/>
                <div className="has-text-centered mt-4 content">
                    <button className="button is-primary mr-2" onClick={handlePrevious}>
                        Previous
                    </button>
                    <button className="button is-primary" onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>
        </main>
    )
}
