import {PAGES} from "../../assets/constants.tsx";
import {useParams} from "react-router-dom";
import {MatchParams} from "../../types.tsx";


export const Match = () => {

    const {id} = useParams<MatchParams>();

    console.log(id)

    return (
        <div className="container">
            <h1 className={"title is-1"}>{PAGES.MATCH.NAME}</h1>
            A match.
        </div>
    )
}
