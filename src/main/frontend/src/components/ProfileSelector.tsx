import {MOCK_PROFILES} from "../assets/constants.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faTimes} from "@fortawesome/sharp-duotone-solid-svg-icons";
import {ProfileViewer} from "./ProfileViewer.tsx";
import {useState} from "react";


export const ProfileSelector = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleLeft = () => {
        setSelectedIndex((prevIndex) =>
            prevIndex === 0 ? MOCK_PROFILES.length - 1 : prevIndex - 1
        );
    };

    const handleRight = () => {
        setSelectedIndex((prevIndex) =>
            prevIndex === MOCK_PROFILES.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <ProfileViewer profile={MOCK_PROFILES[selectedIndex]}/>
            <div className="has-text-centered mt-4 content">
                <button className="button is-danger mr-3" onClick={handleLeft} aria-label="Swipe left">
                    <FontAwesomeIcon icon={faTimes} size={"2x"} className={"fa-fw mx-2 my-1"}/>
                </button>
                <button className="button is-success" onClick={handleRight} aria-label="Swipe right">
                    <FontAwesomeIcon icon={faHeart} size={"2x"} className={"fa-fw mx-2 my-1"}/>
                </button>
            </div>
        </>
    )
}
