package tttai.se.terrificthemedtinderaibackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tttai.se.terrificthemedtinderaibackend.profiles.*;

@SpringBootApplication
public class TerrificThemedTinderAiBackendApplication implements CommandLineRunner {

    @Autowired
    private ProfileCreationService profileCreationService;

    public static void main(String[] args) {
        SpringApplication.run(TerrificThemedTinderAiBackendApplication.class, args);
    }

    public void run(String... args) {
        System.out.println("TTTAI App is running...");
        profileCreationService.saveProfilesToDB();
    }
}
