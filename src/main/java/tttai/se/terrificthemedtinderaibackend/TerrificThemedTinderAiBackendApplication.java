package tttai.se.terrificthemedtinderaibackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tttai.se.terrificthemedtinderaibackend.conversations.ChatMessage;
import tttai.se.terrificthemedtinderaibackend.conversations.Conversation;
import tttai.se.terrificthemedtinderaibackend.conversations.ConversationRepository;
import tttai.se.terrificthemedtinderaibackend.profiles.Gender;
import tttai.se.terrificthemedtinderaibackend.profiles.Profile;
import tttai.se.terrificthemedtinderaibackend.profiles.ProfileRepository;
import tttai.se.terrificthemedtinderaibackend.profiles.ProfileType;

import java.time.LocalDateTime;
import java.util.List;

import static tttai.se.terrificthemedtinderaibackend.ApplicationUtils.printRepositoryContent;

@SpringBootApplication
public class TerrificThemedTinderAiBackendApplication implements CommandLineRunner {

    @Autowired
    private ConversationRepository conversationRepository;
    @Autowired
    private ProfileRepository profileRepository;

    public static void main(String[] args) {
        SpringApplication.run(TerrificThemedTinderAiBackendApplication.class, args);
    }

    public void run(String... args) {

        System.out.println("TTTAI App is running...");

        System.out.println("   ...preparing repositories");
        conversationRepository.deleteAll();
        profileRepository.deleteAll();

        System.out.println("   ...creating a profile");
        Profile profile = new Profile(
                "1",
                "Joakim",
                "Johnsson",
                49,
                "INTP",
                Gender.MALE,
                "European",
                ProfileType.HOOMAN,
                "I'm a hoot!",
                "image/url"
        );
        profileRepository.save(profile);
        printRepositoryContent(profileRepository);

        System.out.println("   ...creating a conversation");
        Conversation conversation = new Conversation(
                "1",
                profile.id(),
                List.of(new ChatMessage("Hello there", profile.id(), LocalDateTime.now()))
        );
        conversationRepository.save(conversation);
        printRepositoryContent(conversationRepository);
    }
}
