package ma.karizma.kissi_hackthon.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Ingredient {
    @Id
    Long id;

    String label;
    @ManyToOne
    @JoinColumn(name = "recette_id")
    @JsonBackReference
    private Recette recette;

    @Override
    public String toString() {
        return "Ingredient{" +
                "id=" + id +
                ", label='" + label + '\'' +

                '}';
    }

}

