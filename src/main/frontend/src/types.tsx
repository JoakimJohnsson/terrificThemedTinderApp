export type LogoIconSize = "xs" | "lg" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x";

export type Gender = "MALE" | "FEMALE" | "NON_BINARY" | "UNDEFINED";

export type ProfileType = "CAT" | "DOG" | "HOOMAN" | "OTHER";

export type Profile = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    ethnicity: string;
    gender: Gender;
    bio: string;
    imageUrl: string;
    myersBriggsPersonalityType: string;
    profileType: ProfileType;
};

export interface LogoIconProps {
    size?: LogoIconSize;

}export interface ProfileSelectorProps {
    profile?: Profile;
}