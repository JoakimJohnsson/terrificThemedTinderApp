package tttai.se.terrificthemedtinderaibackend.conversations;

import tttai.se.terrificthemedtinderaibackend.profiles.Profile;

import java.util.List;

public record Conversation(
        String id,
        String profileId,
        List<ChatMessage> messages
) {
}
