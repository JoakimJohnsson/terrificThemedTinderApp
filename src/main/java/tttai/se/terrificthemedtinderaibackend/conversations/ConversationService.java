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

    public Conversation generateProfileResponse(Conversation conversation, Profile profile, Profile user) {

        // System message (prompt)
        SystemMessage systemMessage = new SystemMessage("Pretend to be a Tinder user");

        // Assistant message and User message
        List<AbstractMessage> messages = conversation.messages().stream().map(message -> {
            if (message.authorId().equals(profile.id())) {
                return new AssistantMessage(message.messageText());
            } else {
                return new UserMessage(message.messageText());
            }
        }).toList();

        List<Message> promptMessages = new ArrayList<>();
        promptMessages.add(systemMessage);
        promptMessages.addAll(messages);

        Prompt prompt = new Prompt(promptMessages);
        ChatResponse response =  chatModel.call(prompt);

        conversation.messages().add(new ChatMessage(
                response.getResult().getOutput().getContent(),
                profile.id(),
                LocalDateTime.now()
        ));

        String result = response.getResult().getOutput().getContent();
        System.out.println("Result : " + result);

        return conversation;
    }

}
