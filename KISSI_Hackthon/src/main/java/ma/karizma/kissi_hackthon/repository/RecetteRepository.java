package ma.karizma.kissi_hackthon.repository;

import ma.karizma.kissi_hackthon.model.Recette;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecetteRepository extends JpaRepository<Recette,Long> {
}
