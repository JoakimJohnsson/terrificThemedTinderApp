import {GenderIcon} from "./GenderIcon";
import {Link} from "react-router-dom";
import {FC} from "react";
import {MatchListItemProps} from "../types.tsx";


export const MatchesListItem: FC<MatchListItemProps> = ({match}) => {

    return match && (
        <li>
            <Link to={`/matches/${match.id}`}>
                <div className={"card mb-2 has-hover-with-transform"}>
                    <div className={"card-content"}>
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img className={"is-rounded"}
                                         src={"http://localhost:8080/images/" + match.profile?.imageUrl}
                                         alt={match.profile?.firstName}/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className={"title is-5"}>
                                    <span className={"mr-2"}>{match.profile?.firstName} {match.profile?.lastName}</span>
                                    <GenderIcon gender={match.profile?.gender}/>
                                </p>
                                {match.profile?.nickName}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>)
}
