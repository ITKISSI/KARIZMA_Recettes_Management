package ma.karizma.kissi_hackthon.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Data
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Recette {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;

    @OneToMany(mappedBy = "recette")
    @JsonManagedReference
    private List<Ingredient> ingredients;

    @OneToMany(mappedBy = "recette")
    @JsonManagedReference
    private List<PrepatrationSteps> preparationSteps;

    private int duree;
    private String photo;


    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

}
