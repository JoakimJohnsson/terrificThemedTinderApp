import {FC} from "react";
import {ProfileViewerProps} from "../types";
import {GenderIcon} from "./GenderIcon";


export const ProfileViewer: FC<ProfileViewerProps> = ({profile}) => {

    return profile && (
        <div className={"columns is-flex is-justify-content-center"}>
            <div className={"column is-12-mobile is-8-tablet is-6-desktop is-4-fullhd"}>
                <div className={"card"}>
                    <div className={"card-image is-relative"}>
                        <figure className={"image is-1by1"}>
                            <img src={"http://localhost:8080/images/" + profile.imageUrl} alt={profile.firstName}/>
                        </figure>
                        <div className={"is-position-absolute"}>
                            <div className="media">
                                <div className="media-left">
                                    <GenderIcon gender={profile.gender} size={"3x"}/>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{profile.firstName} {profile.lastName}, {profile.age}</p>
                                    <p className="subtitle is-6 is-lowercase">@{profile.nickName}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"card-content"}>
                        <div className="content">
                            <p className={"show-two-rows"}>{profile.bio}</p>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
