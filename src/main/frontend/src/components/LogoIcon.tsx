import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessageMiddle} from "@fortawesome/sharp-duotone-solid-svg-icons";
import { LogoIconProps } from "../types.tsx";


export const LogoIcon: FC<LogoIconProps> = ({size = "1x"}) => {
    return (
        <div>
            <FontAwesomeIcon icon={faMessageMiddle} size={size}/>
        </div>
    )
}
