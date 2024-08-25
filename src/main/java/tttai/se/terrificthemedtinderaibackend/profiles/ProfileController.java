package tttai.se.terrificthemedtinderaibackend.profiles;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import tttai.se.terrificthemedtinderaibackend.conversations.Conversation;

@RestController
public class ProfileController {

    private final ProfileRepository profileRepository;

    public ProfileController(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("profiles/random")
    public Profile getRandomProfile() {
        return profileRepository.getRandomProfile();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("profiles/{profileId}")
    public Profile getProfile(@PathVariable String profileId) {
        return profileRepository.findById(profileId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found. ID: " + profileId));
    }
}
