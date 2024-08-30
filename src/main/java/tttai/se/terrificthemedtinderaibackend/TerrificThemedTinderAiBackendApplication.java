package tttai.se.terrificthemedtinderaibackend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tttai.se.terrificthemedtinderaibackend.conversations.ConversationRepository;
import tttai.se.terrificthemedtinderaibackend.matches.MatchRepository;
import tttai.se.terrificthemedtinderaibackend.profiles.*;

@SpringBootApplication
public class TerrificThemedTinderAiBackendApplication implements CommandLineRunner {

    private final ProfileCreationService profileCreationService;
    private final ProfileRepository profileRepository;
    private final MatchRepository matchRepository;
    private final ConversationRepository conversationRepository;

    public TerrificThemedTinderAiBackendApplication(ProfileCreationService profileCreationService, ProfileRepository profileRepository, MatchRepository matchRepository, ConversationRepository conversationRepository) {
        this.profileCreationService = profileCreationService;
        this.profileRepository = profileRepository;
        this.matchRepository = matchRepository;
        this.conversationRepository = conversationRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(TerrificThemedTinderAiBackendApplication.class, args);
    }

    public void run(String... args) {
        System.out.println("TTTAI App is running...");
        clearAllData();
        profileCreationService.saveProfilesToDB();
    }

    private void clearAllData() {
        profileRepository.deleteAll();
        matchRepository.deleteAll();
        conversationRepository.deleteAll();
    }
}
