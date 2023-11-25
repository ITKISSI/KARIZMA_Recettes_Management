package ma.karizma.kissi_hackthon.controller;

import ma.karizma.kissi_hackthon.model.Recette;
import ma.karizma.kissi_hackthon.service.RecetteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recettes")
@CrossOrigin(origins = "*")
public class RecetteController {

    @Autowired
    public RecetteService recetteService;

    @PostMapping
    public ResponseEntity<Recette> add(@RequestBody final Recette book){
        final Recette savedBook = recetteService.add(book);
        return new ResponseEntity<Recette>(savedBook, HttpStatus.CREATED);
    }
    @GetMapping("/{isbn}")
    public ResponseEntity<Recette> get(@PathVariable final Long isbn) {
        final Recette foundBook = recetteService.get(isbn);

        if(foundBook==null)
        {
            return new ResponseEntity<Recette>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Recette>(foundBook, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Recette>> getAll() {
        return new ResponseEntity<List<Recette>>(recetteService.getAll(), HttpStatus.OK);
    }


    @PutMapping("/{isbn}")
    public ResponseEntity edit(@PathVariable final Long isbn, @RequestBody final Recette book) {
        if(recetteService.edit(isbn,book)!=null){
            return new ResponseEntity(HttpStatus.CREATED);
        }
        return new ResponseEntity(HttpStatus.NOT_MODIFIED);
    }

    @DeleteMapping("/{isbn}")
    public ResponseEntity deleteBook(@PathVariable final Long isbn) {
        recetteService.delete(isbn);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }




}
