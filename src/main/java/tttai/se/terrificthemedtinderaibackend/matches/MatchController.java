package tttai.se.terrificthemedtinderaibackend.matches;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import tttai.se.terrificthemedtinderaibackend.conversations.Conversation;
import tttai.se.terrificthemedtinderaibackend.conversations.ConversationRepository;
import tttai.se.terrificthemedtinderaibackend.profiles.Profile;
import tttai.se.terrificthemedtinderaibackend.profiles.ProfileRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static tttai.se.terrificthemedtinderaibackend.ApplicationUtils.printRepositoryContent;

@RestController
public class MatchController {

    private final ConversationRepository conversationRepository;
    private final ProfileRepository profileRepository;
    private final MatchRepository matchRepository;

    public MatchController(ConversationRepository conversationRepository, ProfileRepository profileRepository, MatchRepository matchRepository) {
        this.conversationRepository = conversationRepository;
        this.profileRepository = profileRepository;
        this.matchRepository = matchRepository;
    }

    @PostMapping("/matches")
    public Match createNewMatch(@RequestBody CreateMatchRequest request) {
        Profile profile = profileRepository.findById(request.profileId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found. ID: " + request.profileId()));
        Conversation conversation = new Conversation(
                UUID.randomUUID().toString(),
                profile.id(),
                new ArrayList<>()
        );
        // TODO: Make sure no previous conversation with this profile.
        conversationRepository.save(conversation);
        printRepositoryContent(conversationRepository);
        Match match = new Match(
                UUID.randomUUID().toString(),
                profile,
                conversation.id()
        );
        matchRepository.save(match);
        printRepositoryContent(matchRepository);
        return match;
    }

    @GetMapping("/matches")
    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    public record CreateMatchRequest(
            String profileId
    ) {
    }

}
