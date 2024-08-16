import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/pro-thin-svg-icons";
import {faTimes as faTimesSharp} from "@fortawesome/sharp-duotone-solid-svg-icons";
import { LogoIconProps } from "../types.tsx";


export const LogoIcon: FC<LogoIconProps> = ({size = "1x"}) => {
    return (
        <>
            <FontAwesomeIcon icon={faTimesSharp} size={size}/>
            <FontAwesomeIcon icon={faTimes} size={size}/>
            <FontAwesomeIcon icon={faTimesSharp} size={size}/>
        </>
    )
}
