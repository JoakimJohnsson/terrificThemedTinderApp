package tttai.se.terrificthemedtinderaibackend.conversations;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import tttai.se.terrificthemedtinderaibackend.profiles.ProfileRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

import static tttai.se.terrificthemedtinderaibackend.ApplicationUtils.printRepositoryContent;

@RestController
public class ConversationController {

    private final ConversationRepository conversationRepository;
    private final ProfileRepository profileRepository;

    public ConversationController(ConversationRepository conversationRepository, ProfileRepository profileRepository) {
        this.conversationRepository = conversationRepository;
        this.profileRepository = profileRepository;
    }

    @PostMapping("/conversations")
    public Conversation createNewConversation(@RequestBody CreateConversationRequest request) {
        profileRepository.findById(request.profileId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found. ID: " + request.profileId()));
        Conversation conversation = new Conversation(
                UUID.randomUUID().toString(),
                request.profileId(),
                new ArrayList<>()
        );
        conversationRepository.save(conversation);
        printRepositoryContent(conversationRepository);
        return conversation;
    }

    @PostMapping("conversations/{conversationId}")
    public Conversation addMessageToConversation(@PathVariable String conversationId, @RequestBody ChatMessage message) {
        Conversation conversation = conversationRepository.findById(conversationId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Conversation not found. ID: " + conversationId));
        profileRepository.findById(message.authorId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found. ID: " + message.authorId()));
        ChatMessage messageWithTimeStamp = new ChatMessage(message.messageText(), message.authorId(), LocalDateTime.now());
        conversation.messages().add(messageWithTimeStamp);
        conversationRepository.save(conversation);
        printRepositoryContent(conversationRepository);
        return conversation;
    }

    public record CreateConversationRequest(
            String profileId
    ) {
    }
}
