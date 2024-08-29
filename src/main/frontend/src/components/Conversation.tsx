import {CONFIG} from "../assets/constants";
import {FC, useEffect, useState} from "react";
import {Conversation as ConversationType, ConversationProps} from "../types";
import {Message} from "./Message";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSend, faTimes} from "@fortawesome/pro-thin-svg-icons";
import {fetchConversationById, sendMessage} from "../assets/functions.tsx";
import {OverlaySpinner} from "./OverlaySpinner.tsx";


export const Conversation: FC<ConversationProps> = ({match}) => {

    const [input, setInput] = useState("");
    const [currentConversation, setCurrentConversation] = useState<ConversationType | null>(null);
    const [loading, setLoading] = useState(false);

    const loadConversation = async () => {
        if (!match) return;
        try {
            const conversation = await fetchConversationById(match.conversationId);
            setCurrentConversation(conversation);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (currentConversation) return;
        console.log("loading conversation!")
        setLoading(true);
        loadConversation().then(() => setLoading(false));
    }, []);

    const handleSend = () => {
        if (input.trim()) {
            sendMessage(currentConversation?.id, input).then(() => {
                handleClear();setLoading(true);
                loadConversation().then(() => setLoading(false));
            });
        }
    }

    const handleClear = () => {
        setInput("");
    }

    return loading ?
        <OverlaySpinner/>
        :
        <div className={"columns is-flex is-justify-content-center"}>
            <div className={"column is-12-mobile is-8-tablet is-6-desktop is-4-fullhd"}>
                {
                    currentConversation?.messages.map((message, index) => {
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
}
