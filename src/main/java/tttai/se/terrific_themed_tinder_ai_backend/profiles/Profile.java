package tttai.se.terrific_themed_tinder_ai_backend.profiles;

public record Profile(
        String id,
        String firstName,
        String lastName,
        int age,
        String personalityType,     // used to help randomize profiles
        Gender gender,
        String ethnicity,           // specifies breed/race
        ProfileType profileType,    // cat, dog... etc.
        String bio,
        String imageUrl
) {
}
