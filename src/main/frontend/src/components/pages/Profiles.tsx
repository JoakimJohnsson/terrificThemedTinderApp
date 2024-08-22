import {PAGES} from "../../assets/constants";
import {ProfileSelector} from "../ProfileSelector";


export const Profiles = () => {



    return (
        <div className="container">
            <h1 className={"title is-1"}>{PAGES.PROFILES.NAME}</h1>
            <ProfileSelector />
        </div>
    )
}
