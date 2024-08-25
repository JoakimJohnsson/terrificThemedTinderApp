import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faTimes} from "@fortawesome/sharp-duotone-solid-svg-icons";
import {ProfileViewer} from "./ProfileViewer";
import {useEffect, useState} from "react";
import {Profile} from "../types.tsx";
import {fetchRandomProfile} from "../assets/functions.tsx";
import {DUMMY_PROFILE} from "../assets/constants.tsx";


export const ProfileSelector = () => {

    const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(false);
    const DIRECTION_LEFT = "L";
    const DIRECTION_RIGHT = "R";

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

    const onSwipe = (direction: string) => {
        setLoading(true);
        if (direction === DIRECTION_LEFT) {
            handleLeftSwipe();
        } else if (direction === DIRECTION_RIGHT) {
            handleRightSwipe();
        } else {
            loadRandomProfile().then(() => setLoading(false));
        }
    }

    const handleLeftSwipe = () => {
        loadRandomProfile().then(() => setLoading(false));
    };

    const handleRightSwipe = () => {
        loadRandomProfile().then(() => setLoading(false));
    };

    return (
        <>
            {
                loading ?
                    <ProfileViewer profile={DUMMY_PROFILE} loading={loading}/>
                    :
                    <ProfileViewer profile={currentProfile}/>
            }
            <div className="has-text-centered mt-4 content">
                <button
                    className="button is-danger mr-3"
                    onClick={() => onSwipe(DIRECTION_LEFT)}
                    aria-label="Swipe left"
                    disabled={loading}
                >
                    <FontAwesomeIcon icon={faTimes} size={"2x"} className={"fa-fw mx-2 my-1"}/>
                </button>
                <button
                    className="button is-success"
                    onClick={() => onSwipe(DIRECTION_RIGHT)}
                    aria-label="Swipe right"
                    disabled={loading}
                >
                    <FontAwesomeIcon icon={faHeart} size={"2x"} className={"fa-fw mx-2 my-1"}/>
                </button>
            </div>
        </>
    )
}
