import {MOCK_PROFILES} from "../assets/constants.tsx";
import {GenderIcon} from "./GenderIcon.tsx";


export const MatchesList = () => {
    return (
        <div>
            <h2 className={"subtitle is-2"}>List of matches</h2>
            <ul>
                {
                    MOCK_PROFILES.map((match) => {
                        return (
                            <li>
                                <div className={"card mb-2"}>
                                    <div className={"card-content"}>
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-48x48">
                                                    <img className={"is-rounded"} src={match.imageUrl}
                                                         alt={match.firstName}/>
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <p className={"title is-5"}>
                                                    <span className={"mr-2"}>{match.firstName} {match.lastName}</span>
                                                    <GenderIcon gender={match.gender}/>
                                                </p>
                                                {match.firstName}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}
