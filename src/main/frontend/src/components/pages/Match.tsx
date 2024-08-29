import {PAGES} from "../../assets/constants";
import {useParams} from "react-router-dom";
import {Match as MatchType, MatchParams} from "../../types";
import {Conversation} from "../Conversation";
import {BackButton} from "../BackButton.tsx";
import {useEffect, useState} from "react";
import {fetchMatchById} from "../../assets/functions.tsx";
import {OverlaySpinner} from "../OverlaySpinner.tsx";


export const Match = () => {

    const {id} = useParams<MatchParams>();
    const [currentMatch, setCurrentMatch] = useState<MatchType | null>(null);
    const [loading, setLoading] = useState(false);

    const loadMatch = async () => {
        try {
            const match = await fetchMatchById(id);
            setCurrentMatch(match);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setLoading(true);
        loadMatch().then(() => setLoading(false));
    }, []);

    return (
        <div className="container">
            <h1 className={"title is-1"}>{PAGES.MATCH.HEADING} {currentMatch?.profile?.firstName}</h1>
            <BackButton/>
            {
                loading ?
                    <OverlaySpinner/>
                    :
                    <Conversation match={currentMatch}/>
            }
        </div>
    )
}
