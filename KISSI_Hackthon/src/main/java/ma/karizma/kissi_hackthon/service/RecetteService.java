package ma.karizma.kissi_hackthon.service;

import ma.karizma.kissi_hackthon.model.Recette;
import ma.karizma.kissi_hackthon.repository.RecetteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecetteService {

    @Autowired
    public RecetteRepository recetteRepository;

    public List<Recette> getAll() {
        return recetteRepository.findAll();
    }
    public Recette get(Long isbn) {
        return recetteRepository.findById(isbn).get();
    }

    public Recette add(final Recette recette) {
        return recetteRepository.save(recette);
    }

    public Recette edit(Long isbn,Recette updatedRecette) {

        Recette existingBook = recetteRepository.findById(isbn).get();
        if (recetteRepository.findById(isbn).isPresent()) {

            existingBook.setNom(updatedRecette.getNom());
            existingBook.setDuree(updatedRecette.getDuree());
            existingBook.setPhoto(updatedRecette.getPhoto());

            Recette savedRecette = recetteRepository.save(existingBook);
            return savedRecette;
        }
        return null;

    }

    public void delete(Long isbn) {recetteRepository.delete(recetteRepository.findById(isbn).get());

    }
}