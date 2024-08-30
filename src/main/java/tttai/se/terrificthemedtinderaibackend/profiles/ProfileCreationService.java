package tttai.se.terrificthemedtinderaibackend.profiles;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import tttai.se.terrificthemedtinderaibackend.conversations.ConversationRepository;
import tttai.se.terrificthemedtinderaibackend.matches.MatchRepository;

import java.io.*;
import java.util.*;

import static tttai.se.terrificthemedtinderaibackend.ApplicationUtils.printRepositoryContent;

@Service
public class ProfileCreationService {

    private static final String PROFILES_FILE_PATH = "profiles.json";
    private final ConversationRepository conversationRepository;
    // User profile from properties file
    @Value("#{${tinderai.character.user}}")
    private Map<String, String> userProfileProperties;
    private final ProfileRepository profileRepository;
    private final MatchRepository matchRepository;

    public ProfileCreationService(ProfileRepository profileRepository, MatchRepository matchRepository, ConversationRepository conversationRepository) {
        this.profileRepository = profileRepository;
        this.matchRepository = matchRepository;
        this.conversationRepository = conversationRepository;
    }

    public void saveProfilesToDB() {
        Gson gson = new Gson();
        try {
            List<Profile> existingProfiles = gson.fromJson(
                    new FileReader(PROFILES_FILE_PATH),
                    new TypeToken<ArrayList<Profile>>() {}.getType()
            );
            conversationRepository.deleteAll();
            matchRepository.deleteAll();
            profileRepository.deleteAll();
            profileRepository.saveAll(existingProfiles);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
        // Save user profile
        Profile profile = new Profile(
                userProfileProperties.get("id"),
                userProfileProperties.get("firstName"),
                userProfileProperties.get("lastName"),
                userProfileProperties.get("nickName"),
                Integer.parseInt(userProfileProperties.get("age")),
                userProfileProperties.get("ethnicity"),
                Gender.valueOf(userProfileProperties.get("gender")),
                userProfileProperties.get("bio"),
                userProfileProperties.get("imageUrl"),
                userProfileProperties.get("myersBriggsPersonalityType"),
                ProfileType.HOOMAN
        );
        System.out.println(userProfileProperties);
        profileRepository.save(profile);
        printRepositoryContent(profileRepository);
    }
}
