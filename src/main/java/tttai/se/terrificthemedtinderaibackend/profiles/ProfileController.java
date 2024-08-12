package tttai.se.terrificthemedtinderaibackend.profiles;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {

    private final ProfileRepository profileRepository;

    public ProfileController(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @GetMapping("profiles/random")
    public Profile getRandomProfile() {
        return profileRepository.getRandomProfile();
    }
}
