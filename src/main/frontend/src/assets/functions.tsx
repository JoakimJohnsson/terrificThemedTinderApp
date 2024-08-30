// Service functions
import {CONFIG} from "./constants.tsx";

export const fetchRandomProfile = async () => {
    const response = await fetch("http://localhost:8080/profiles/random");
    if (!response.ok) {
        throw new Error("Failed to get random profile");
    }
    return response.json();
}

export const fetchProfileById = async (id: string | undefined) => {
    const response = await fetch("http://localhost:8080/profiles/" + id);
    if (!response.ok) {
        throw new Error("Failed to get profile with id " + id);
    }
    return response.json();
}

export const fetchMatchById = async (id: string | undefined) => {
    const response = await fetch("http://localhost:8080/matches/" + id);
    if (!response.ok) {
        throw new Error("Failed to get match with id " + id);
    }
    return response.json();
}

export const fetchAllMatches = async () => {
    const response = await fetch("http://localhost:8080/matches");
    if (!response.ok) {
        throw new Error("Failed to get all matches");
    }
    return response.json();
}

export const addNewMatch = async (profileId: string | undefined) => {
    const response = await fetch("http://localhost:8080/matches", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({profileId})
    });
    if (!response.ok) {
        throw new Error("Failed to add new match with profile " + profileId);
    }
}

export const fetchConversationById = async (id: string | undefined) => {
    const response = await fetch("http://localhost:8080/conversations/" + id);
    if (!response.ok) {
        throw new Error("Failed to get conversation with id " + id);
    }
    return response.json();
}

export const sendMessage = async (conversationId: string | undefined, messageText: string) => {

    const response = await fetch("http://localhost:8080/conversations/" + conversationId, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({messageText: messageText, authorId: CONFIG.USER_ID})
    });
    if (!response.ok) {
        throw new Error("Failed to send message to conversation " + conversationId);
    }

}