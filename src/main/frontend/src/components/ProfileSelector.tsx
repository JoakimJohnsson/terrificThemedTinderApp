import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faTimes} from "@fortawesome/sharp-duotone-solid-svg-icons";
import {ProfileViewer} from "./ProfileViewer";
import {useEffect, useState} from "react";
import {Profile} from "../types.tsx";
import {fetchRandomProfile} from "../assets/functions.tsx";
import {OverlaySpinner} from "./OverlaySpinner.tsx";


export const ProfileSelector = () => {

    const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(false);

    console.log("currentProfile", currentProfile)

    const loadRandomProfile = async () => {
        try {
            const profile = await fetchRandomProfile();
            setCurrentProfile(profile);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setLoading(true);
        loadRandomProfile().then(() => setLoading(false));
    }, []);

    const handleLeft = () => {
        setLoading(true);
        loadRandomProfile().then(() => setLoading(false));
    };

    const handleRight = () => {
        setLoading(true);
        loadRandomProfile().then(() => setLoading(false));
    };

    return loading ?
        <OverlaySpinner/>
        :
        <>
            <ProfileViewer profile={currentProfile}/>
            <div className="has-text-centered mt-4 content">
                <button className="button is-danger mr-3" onClick={handleLeft} aria-label="Swipe left">
                    <FontAwesomeIcon icon={faTimes} size={"2x"} className={"fa-fw mx-2 my-1"}/>
                </button>
                <button className="button is-success" onClick={handleRight} aria-label="Swipe right">
                    <FontAwesomeIcon icon={faHeart} size={"2x"} className={"fa-fw mx-2 my-1"}/>
                </button>
            </div>
        </>
}
