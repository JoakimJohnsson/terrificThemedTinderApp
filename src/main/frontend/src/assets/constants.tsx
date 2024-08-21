import {Profile} from "../types";

export const PAGES = {
    APP: {
        NAME: "Terrific Themed Tinder AI App",
        NAME_SHORT: "TTTAIA"
    },
    ERROR_PAGE: {
        NAME: "Ooops!"
    },
    HOME: {
        NAME: "Home"
    },
    MATCH: {
        NAME: "Match",
        HEADING: "Chatting with"
    },
    MATCHES: {
        NAME: "Matches"
    },
    PROFILE: {
        NAME: "Profile"
    },
    PROFILES: {
        NAME: "Profiles"
    },
    THEME_EDITOR: {
        NAME: "Theme editor"
    },
    THEME: {
        NAME: "Theme"
    },
    THEMES: {
        NAME: "Themes"
    }
}

export const MOCK_CONVERSATION: { authorId: string; text: string }[] = [
    { authorId: "1", text: "Hi!" },
    { authorId: "2", text: "Well hello there" },
    { authorId: "3", text: "Wot up dawg?? Wot up dawg?? Wot up dawg?? Wot up dawg?? Wot up dawg?? Wot up dawg?? Wot up dawg?? Wot up dawg??" },
    { authorId: "1", text: "Not much. I seem to do just fine. How are You doing?" }
];

export const MOCK_PROFILES: Profile[] = [
    {
        id: "12345",
        firstName: "Kamala",
        lastName: "Harris",
        nickName: "Kamelen",
        age: 54,
        ethnicity: "Caucasian",
        gender: "FEMALE",
        bio: "A software engineer who loves pets and outdoor activities.",
        imageUrl: "http://localhost:8080/images/0b1273d4-ab2f-4edd-858b-6f1ff1071fb9.jpg",
        myersBriggsPersonalityType: "INTJ",
        profileType: "HOOMAN"
    },
    {
        id: "67890",
        firstName: "Aiden",
        lastName: "Smith",
        nickName: "Smith",
        age: 35,
        ethnicity: "Asian",
        gender: "UNDEFINED",
        bio: "A passionate photographer who enjoys traveling and exploring new cultures.",
        imageUrl: "http://localhost:8080/images/0efd4353-dd34-42bb-b26f-0ee85278e099.jpg",
        myersBriggsPersonalityType: "ENFP",
        profileType: "HOOMAN"
    },
    {
        id: "11223",
        firstName: "Luna",
        lastName: "Sky",
        nickName: "SpadeManet",
        age: 29,
        ethnicity: "Hispanic",
        gender: "NON_BINARY",
        bio: "An artist who loves painting and spending time in nature. Avid animal lover.",
        imageUrl: "http://localhost:8080/images/3a3dcdbb-8d31-4229-8e07-8338d6ad4ade.jpg",
        myersBriggsPersonalityType: "INFP",
        profileType: "HOOMAN"
    },
    {
        id: "342345235",
        firstName: "Benny",
        lastName: "Hill",
        nickName: "FunnyBones666",
        age: 45,
        ethnicity: "Black",
        gender: "MALE",
        bio: "An IT hack who loves fighting on internetz and spending time in nature. Avid animal and people hater.",
        imageUrl: "http://localhost:8080/images/5ad08626-0b72-4f8c-9441-baa62667a702.jpg",
        myersBriggsPersonalityType: "INFP",
        profileType: "HOOMAN"
    }
];

export const CONFIG = {
    USER_ID: "1"
}