import {FC} from "react";
import {ProfileSelectorProps} from "../types.tsx";


export const ProfileSelector: FC<ProfileSelectorProps> = ({profile}) => {

    return profile && (
        <div className={"content"}>
            <img src={profile.imageUrl} alt={profile.firstName}/>
            <div>
                <h2>{profile.firstName} {profile.lastName}</h2>
                <p>Age: {profile.age}</p>
                <p>Ethnicity: {profile.ethnicity}</p>
                <p>Gender: {profile.gender}</p>
                <p>Bio: {profile.bio}</p>
                <p>Myers-Briggs Type: {profile.myersBriggsPersonalityType}</p>
                <p>Profile Type: {profile.profileType}</p>
            </div>
        </div>
    )
}
