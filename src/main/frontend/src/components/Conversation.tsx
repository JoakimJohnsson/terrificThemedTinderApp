import {CONFIG, MOCK_CONVERSATION} from "../assets/constants";
import {FC, useState} from "react";
import {ConversationProps} from "../types";
import {Message} from "./Message";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSend, faTimes} from "@fortawesome/pro-thin-svg-icons";


export const Conversation: FC<ConversationProps> = ({profileId}) => {

    console.log(profileId);

    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            console.log("I send - " + input);
            handleClear();
        }
    }

    const handleClear = () => {
        setInput("");
    }

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
                <div className={"p-2 pt-4"}>
                    <input
                        className="input is-inline-block mb-2"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Text input"

                    />
                    <button className={"button is-primary mr-2"} onClick={handleSend} disabled={input === ""}>
                        <FontAwesomeIcon className={"mr-2"} icon={faSend}/> Send
                    </button>
                    <button className={"button"} onClick={handleClear}>
                        <FontAwesomeIcon className={"mr-2"} icon={faTimes}/> Clear
                    </button>
                </div>
            </div>
        </div>
    )
}
