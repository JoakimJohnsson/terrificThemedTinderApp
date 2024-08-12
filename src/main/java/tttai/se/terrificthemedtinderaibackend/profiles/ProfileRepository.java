package tttai.se.terrificthemedtinderaibackend.profiles;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProfileRepository extends MongoRepository<Profile, String> {

    // Aggregation query (MongoDB) - Will get a random profile
    // See: https://www.mongodb.com/docs/manual/aggregation/
    @Aggregation(pipeline = {"{ $sample: { size: 1 } }"})
    Profile getRandomProfile();

}
