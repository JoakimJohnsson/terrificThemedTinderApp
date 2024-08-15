package tttai.se.terrificthemedtinderaibackend.matches;

import tttai.se.terrificthemedtinderaibackend.profiles.Profile;

public record Match(
        String id,
        Profile profile,
        String conversationId
) {
}
