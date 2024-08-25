import {fetchAllMatches} from "../assets/functions.tsx";
import {useEffect, useState} from "react";
import {Match} from "../types.tsx";
import {MatchesListItem} from "./MatchesListItem.tsx";
import {OverlaySpinner} from "./OverlaySpinner.tsx";


export const MatchesList = () => {

    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState(false);

    const loadMatches = async () => {
        try {
            const matches = await fetchAllMatches();
            setMatches(matches);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setLoading(true);
        loadMatches().then(() => setLoading(false));
    }, []);

    return (
        <div>
            <h2 className={"subtitle is-2"}>List of matches</h2>
            {
                loading ?
                    <OverlaySpinner/>
                    :
                    <ul>
                        {
                            matches.map((match: Match) => {
                                return (
                                    <MatchesListItem key={match.id} match={match}/>
                                );
                            })
                        }
                    </ul>
            }
        </div>
    )
}
