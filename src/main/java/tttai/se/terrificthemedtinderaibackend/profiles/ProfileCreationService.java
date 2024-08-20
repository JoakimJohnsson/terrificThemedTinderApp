package tttai.se.terrificthemedtinderaibackend.profiles;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.*;

import static tttai.se.terrificthemedtinderaibackend.ApplicationUtils.printRepositoryContent;

@Service
public class ProfileCreationService {

    private static final String PROFILES_FILE_PATH = "profiles.json";
    // User profile from properties file
    @Value("#{${tinderai.character.user}}")
    private Map<String, String> userProfileProperties;
    private final ProfileRepository profileRepository;

    public ProfileCreationService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public void saveProfilesToDB() {
        Gson gson = new Gson();
        try {
            List<Profile> existingProfiles = gson.fromJson(
                    new FileReader(PROFILES_FILE_PATH),
                    new TypeToken<ArrayList<Profile>>() {}.getType()
            );
            profileRepository.deleteAll();
            profileRepository.saveAll(existingProfiles);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
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
