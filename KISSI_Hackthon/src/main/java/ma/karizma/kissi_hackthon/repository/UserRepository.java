package ma.karizma.kissi_hackthon.repository;

import ma.karizma.kissi_hackthon.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByLogin(String login);
}
