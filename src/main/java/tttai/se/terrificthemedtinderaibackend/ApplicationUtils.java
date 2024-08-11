package tttai.se.terrificthemedtinderaibackend;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;
import java.util.List;

public final class ApplicationUtils {

    // Private constructor to prevent instantiation
    private ApplicationUtils() {
        throw new UnsupportedOperationException("Utility class cannot be instantiated");
    }

    public static <T, ID> void printRepositoryContent(MongoRepository<T, ID> repository) {
        System.out.println("      ...printing repository content:");
        repository.findAll().forEach(System.out::println);
    }

    public static List<String> selfieTypes() {
        return List.of(
                "closeup with head and partial shoulders",
                "Reflection in a mirror",
                "action selfie, person in motion",
                "candid photo",
                "standing in nature",
                "sitting on a chair",
                "indoor photograph",
                "outdoor photograph"
        );
    }

    public static List<String> generateMyersBriggsTypes() {
        List<String> myersBriggsPersonalityTypes = new ArrayList<>();

        String[] dimensions = {
                "E,I", // Extraversion or Introversion
                "S,N", // Sensing or Intuition
                "T,F", // Thinking or Feeling
                "J,P"  // Judging or Perceiving
        };

        // Generate all combinations
        for (String e : dimensions[0].split(",")) {
            for (String s : dimensions[1].split(",")) {
                for (String t : dimensions[2].split(",")) {
                    for (String j : dimensions[3].split(",")) {
                        myersBriggsPersonalityTypes.add(e + s + t + j);
                    }
                }
            }
        }

        return myersBriggsPersonalityTypes;
    }
}
