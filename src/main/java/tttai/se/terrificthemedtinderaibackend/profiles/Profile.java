package tttai.se.terrificthemedtinderaibackend.profiles;

public record Profile(
        String id,
        String firstName,
        String lastName,
        int age,
        String ethnicity,           // specifies breed/race
        Gender gender,
        String bio,
        String imageUrl,
        String myersBriggsPersonalityType,     // used to help randomize profiles
        ProfileType profileType    // cat, dog... etc.
) {
}
