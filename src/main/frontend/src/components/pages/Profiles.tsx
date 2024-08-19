import {PAGES} from "../../assets/constants.tsx";
import {ProfileSelector} from "../ProfileSelector.tsx";


export const Profiles = () => {
    return (
        <main className="section pt-3">
            <div className="container">
                <h1 className={"title"}>{PAGES.PROFILES.NAME}</h1>
                <ProfileSelector/>
            </div>
        </main>
    )
}
