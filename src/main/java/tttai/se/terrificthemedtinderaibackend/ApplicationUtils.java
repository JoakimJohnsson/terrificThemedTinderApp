package tttai.se.terrificthemedtinderaibackend;

import org.springframework.data.mongodb.repository.MongoRepository;

public final class ApplicationUtils {

    // Private constructor to prevent instantiation
    private ApplicationUtils() {
        throw new UnsupportedOperationException("Utility class cannot be instantiated");
    }

    public static <T, ID> void printRepositoryContent(MongoRepository<T, ID> repository) {
        System.out.println("Printing repository content:");
        repository.findAll().forEach(System.out::println);
    }
}
