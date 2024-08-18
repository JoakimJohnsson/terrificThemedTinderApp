import {FC} from "react";
import {ProfileSelectorProps} from "../types.tsx";


export const ProfileSelector: FC<ProfileSelectorProps> = ({profile}) => {

    return profile && (
        <div>
            <img src={profile.imageUrl} alt={profile.firstName}/>
            <div>
                <h2>{profile.firstName} {profile.lastName}</h2>
            </div>
        </div>
    )
}
