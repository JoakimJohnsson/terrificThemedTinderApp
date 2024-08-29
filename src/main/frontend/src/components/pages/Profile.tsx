import {useParams} from "react-router-dom";
import {Profile as ProfileType, ProfileParams} from "../../types.tsx";
import {useEffect, useState} from "react";
import {fetchProfileById} from "../../assets/functions.tsx";
import {OverlaySpinner} from "../OverlaySpinner.tsx";
import {BackButton} from "../BackButton.tsx";
import {GenderIcon} from "../GenderIcon.tsx";


export const Profile = () => {

    const {id} = useParams<ProfileParams>();
    const [currentProfile, setCurrentProfile] = useState<ProfileType | null>(null);
    const [loading, setLoading] = useState(false);

    const loadProfile = async () => {
        try {
            const profile = await fetchProfileById(id);
            setCurrentProfile(profile);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setLoading(true);
        loadProfile().then(() => setLoading(false));
    }, []);

    return loading ?
        <OverlaySpinner/>
        :
        <div className="container">
            <h1 className={"title is-1"}>{currentProfile?.firstName} {currentProfile?.lastName}</h1>
            <BackButton/>
            <div className={"columns is-flex is-justify-content-center"}>
                <div className={"column is-12-mobile is-10-tablet is-8-desktop is-6-fullhd"}>

                    <div className={"card"}>
                        <div className={"card-image"}>
                            <figure className={"image is-1by1"}>
                                <img
                                    src={"http://localhost:8080/images/" + (loading ? "default.jpg" : currentProfile?.imageUrl)}
                                    alt={currentProfile?.firstName}/>
                            </figure>
                        </div>
                        <div className={"card-content"}>
                            <div className="content">
                                <div className="media">
                                    <div className="media-left">
                                        <GenderIcon gender={currentProfile?.gender} size={"3x"}/>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">{currentProfile?.firstName} {currentProfile?.lastName}, {currentProfile?.age}</p>
                                        <p className="subtitle is-6 is-lowercase">@{currentProfile?.nickName}</p>
                                    </div>
                                </div>
                                <p>{currentProfile?.bio}</p>
                                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}
