import {PAGES} from "../../assets/constants";
import {MatchesList} from "../MatchesList";


export const Matches = () => {
    return (
        <div className="container">
            <h1 className={"title is-1"}>{PAGES.MATCHES.NAME}</h1>
            <MatchesList/>
        </div>
    )
}
