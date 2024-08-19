import {PAGES} from "../../assets/constants.tsx";
import {MatchesList} from "../MatchesList.tsx";


export const Matches = () => {
    return (
        <div className="container">
            <h1 className={"title is-1"}>{PAGES.MATCHES.NAME}</h1>
            <MatchesList/>
        </div>
    )
}
