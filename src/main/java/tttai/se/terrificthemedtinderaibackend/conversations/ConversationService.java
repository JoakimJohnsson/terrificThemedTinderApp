package tttai.se.terrificthemedtinderaibackend.conversations;

import org.springframework.ai.chat.messages.*;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.stereotype.Service;
import tttai.se.terrificthemedtinderaibackend.profiles.Profile;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ConversationService {

    private final OllamaChatModel chatModel;

    public ConversationService(OllamaChatModel chatModel) {
        this.chatModel = chatModel;
    }

    public void generateProfileResponse(Conversation conversation, Profile profile, Profile user) {

        String systemMessageStr = STR."""
                You are a \{profile.age()} year old \{profile.profileType()}.
                You are a \{profile.gender()} of \{profile.ethnicity()} ethnicity.
                Your name is \{profile.firstName()} \{profile.lastName()} and your nickname is \{profile.nickName()}.
                You are chatting with your owner, who is called \{user.firstName()} and this is an in-app conversation.
                Your bio is: \{profile.bio()}.
                Your Myers Briggs personality is \{profile.myersBriggsPersonalityType()}
                Your owners bio is: \{user.bio()}.
                Respond in the role of this person.
                """;

        // System message (prompt) - instructions to AI
        SystemMessage systemMessage = new SystemMessage(systemMessageStr);

        // Adds previous messages to conversation - based on author
        List<AbstractMessage> messages = conversation.messages().stream().map(message -> {
            if (message.authorId().equals(profile.id())) {
                // Adds message as an assistant (AI) message (What the AI said)
                return new AssistantMessage(message.messageText());
            } else {
                // Adds message as a user message (What the user said)
                return new UserMessage(message.messageText());
            }
        }).toList();

        List<Message> promptMessages = new ArrayList<>();
        // The system message
        promptMessages.add(systemMessage);
        // Our complete list of assistant / user messages so far
        promptMessages.addAll(messages);
        // The prompt is a representation of the conversation so far that the chatModel will understand
        Prompt prompt = new Prompt(promptMessages);
        System.out.println("prompt:");
        System.out.println(prompt);
        ChatResponse response = chatModel.call(prompt);

        // Add the AI response to the Conversation
        conversation.messages().add(new ChatMessage(
                response.getResult().getOutput().getContent(),
                profile.id(),
                LocalDateTime.now()
        ));
    }
}
