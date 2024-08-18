import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMars, faVenus, faTimes, faQuestion} from "@fortawesome/pro-thin-svg-icons";
import {GenderIconProps} from "../types.tsx";


export const GenderIcon: FC<GenderIconProps> = ({gender}) => {

    let icon;
    switch (gender) {
        case "MALE":
            icon = faMars;
            break;
        case "FEMALE":
            icon = faVenus;
            break;
        case "NON_BINARY":
            icon = faTimes;
            break;
        case "UNDEFINED":
        default:
            icon = faQuestion;
            break;
    }

    return (
        <FontAwesomeIcon className={"fa-fw"} icon={icon} size={"3x"}/>
    )
}



