import {CONFIG} from "../assets/constants";
import {FC, useEffect, useState} from "react";
import {Conversation as ConversationType, ConversationProps} from "../types";
import {Message} from "./Message";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThoughtBubble, faSend, faTimes} from "@fortawesome/sharp-duotone-solid-svg-icons";
import {fetchConversationById, sendMessage} from "../assets/functions.tsx";
import {OverlaySpinner} from "./OverlaySpinner.tsx";


export const Conversation: FC<ConversationProps> = ({match}) => {

    const [input, setInput] = useState("");
    const [currentConversation, setCurrentConversation] = useState<ConversationType | null>(null);
    const [loading, setLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState(false);

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
        setLoading(true);
        loadConversation().then(() => setLoading(false));
    }, []);

    const handleSend = () => {
        if (input.trim()) {
            setLoadingMessage(true);
            sendMessage(currentConversation?.id, input).then(() => {
                handleClear();
                loadConversation().then(() => setLoadingMessage(false));
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
                <figure className="image is-96x96 pl-2">
                    <img className={"is-rounded"}
                         src={"http://localhost:8080/images/" + match?.profile?.imageUrl}
                         alt={match?.profile?.firstName}/>
                </figure>
                {
                    currentConversation?.messages.map((message, index) => {
                        return message.authorId === CONFIG.USER_ID ?
                            <Message key={index} isUser message={message}/>
                            :
                            <Message key={index} message={message}/>
                    })
                }
                {
                    loadingMessage &&
                    <div className={"p-2 fa-fade"}>
                        <FontAwesomeIcon className={"mr-2"} size={"2xl"} icon={faThoughtBubble}/>Thinking...
                    </div>
                }
                <div className={"p-2"}>
                    <input
                        className="input is-inline-block mb-2"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                handleSend();
                            }
                        }}
                        placeholder="Text input"
                    />
                    <button className={"button is-primary mr-2"} onClick={handleSend} disabled={input === ""}>
                        <FontAwesomeIcon className={"mr-2"} icon={faSend}/> Send
                    </button>
                    {
                        input !== "" &&
                        <button className={"button"} onClick={handleClear}>
                            <FontAwesomeIcon className={"mr-2"} icon={faTimes}/> Clear input
                        </button>
                    }
                </div>
            </div>
        </div>
}
