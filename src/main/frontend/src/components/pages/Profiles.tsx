import {PAGES} from "../../assets/constants.tsx";
import {ProfileSelector} from "../ProfileSelector.tsx";


export const Profiles = () => {
    return (
        <div className="container">
            <h1 className={"title is-1"}>{PAGES.PROFILES.NAME}</h1>
            <ProfileSelector/>
        </div>
    )
}
