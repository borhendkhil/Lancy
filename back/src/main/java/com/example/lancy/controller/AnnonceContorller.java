package com.example.lancy.controller;

import com.example.lancy.model.Annonce;
import com.example.lancy.service.AnnonceService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("auth/annonce")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AnnonceContorller {

    private final AnnonceService annonceService;

    public AnnonceContorller(AnnonceService annonceService) {
        this.annonceService = annonceService;
    }

    @GetMapping
    public List<Annonce> getAllAnnonces() {
        return annonceService.getAllAnnonces(); }
    @GetMapping("/{id}")
    public ResponseEntity<Annonce> getAnnonceById(@PathVariable Long id) {
        return annonceService.getAnnonceById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Annonce> createAnnonce(@RequestBody Annonce newAnnonce) {
        return ResponseEntity.ok(annonceService.createAnnonce(newAnnonce));
    }




    @PutMapping("/{id}")
    public ResponseEntity<Annonce> updateAnnonce(@PathVariable Long id, @RequestBody Annonce updatedAnnonce) {
        return annonceService.updateAnnonce(id, updatedAnnonce)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAnnonce(@PathVariable Long id) {
        return annonceService.deleteAnnonce(id) ?
                ResponseEntity.noContent().build() :
                ResponseEntity.notFound().build();
    }
}
