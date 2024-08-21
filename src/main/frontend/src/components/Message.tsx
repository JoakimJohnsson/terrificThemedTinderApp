import {FC} from "react";
import {MessageProps} from "../types";


export const Message: FC<MessageProps> = ({isUser = false, message}) => {
    return (
        <p className={`m-2 has-border-radius has-background-black-ter ${isUser ? "has-border has-profile-icon-left" : "has-text-right has-border-white has-user-icon-right"}`}>
            <span className={"is-inline-block is-italic"}>{message?.text}</span>
        </p>
    );
};
