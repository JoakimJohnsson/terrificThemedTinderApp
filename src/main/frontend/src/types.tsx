export type IconSize = "xs" | "lg" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x";

export type Gender = "MALE" | "FEMALE" | "NON_BINARY" | "UNDEFINED";

export type ProfileType = "CAT" | "DOG" | "HOOMAN" | "OTHER";

export type Profile = {
    id: string;
    firstName: string;
    lastName: string;
    nickName: string;
    age: number;
    ethnicity: string;
    gender: Gender;
    bio: string;
    imageUrl: string;
    myersBriggsPersonalityType: string;
    profileType: ProfileType;
};

export type Message = {
    authorId: string;
    text: string;
}

export interface LogoIconProps {
    size?: IconSize;
}

export interface GenderIconProps {
    gender?: Gender;
    size?: IconSize;
}

export interface ConversationProps {
    profileId?: string;
}

export interface MessageProps {
    isUser?: boolean;
    message?: Message;
}

export interface ProfileViewerProps {
    profile?: Profile;
}

export type MatchParams = {
    id: string;
}