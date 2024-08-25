import {MOCK_PROFILES, PAGES} from "../../assets/constants";
import {useParams} from "react-router-dom";
import {MatchParams} from "../../types";
import {Conversation} from "../Conversation";
import {BackButton} from "../BackButton.tsx";


export const Match = () => {

    const {id} = useParams<MatchParams>();
    const profile = MOCK_PROFILES[0];

    console.log(id)

    return (
        <div className="container">
            <h1 className={"title is-1"}>{PAGES.MATCH.HEADING} {profile.nickName}</h1>
            <BackButton/>
            <Conversation profileId={profile.id}/>
        </div>
    )
}
