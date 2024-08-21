import {CONFIG, MOCK_CONVERSATION} from "../assets/constants";
import {FC} from "react";
import {ConversationProps} from "../types";
import {Message} from "./Message";


export const Conversation: FC<ConversationProps> = ({profileId}) => {

    console.log(profileId);

    // TODO pass in author instead

    return (
        <div className={"columns is-flex is-justify-content-center"}>
            <div className={"column is-12-mobile is-8-tablet is-6-desktop is-4-fullhd"}>
                {
                    MOCK_CONVERSATION.map((message, index) => {
                        return message.authorId === CONFIG.USER_ID ?
                            <Message key={index} isUser message={message}/>
                            :
                            <Message key={index} message={message}/>
                    })
                }
            </div>
        </div>
    )
}
