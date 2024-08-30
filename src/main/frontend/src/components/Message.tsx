import {FC} from "react";
import {MessageProps} from "../types";


export const Message: FC<MessageProps> = ({isUser = false, message}) => {

    return (
        <p className={`m-2 has-border-radius has-background-black-ter ${isUser ? "has-border has-profile-icon-left mr-5" : "has-text-right has-border-white has-user-icon-right mb-4 ml-5"}`}>
            <span className={"is-inline-block is-italic"}>{message?.messageText}</span>
        </p>
    );
};
