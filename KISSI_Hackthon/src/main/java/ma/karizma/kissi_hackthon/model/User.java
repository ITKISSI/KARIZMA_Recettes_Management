package ma.karizma.kissi_hackthon.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String login;
    String password;

    @OneToMany(mappedBy = "user")
    private List<Recette> recettes;

}
