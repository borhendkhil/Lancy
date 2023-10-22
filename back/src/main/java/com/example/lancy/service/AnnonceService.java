package com.example.lancy.service;

import com.example.lancy.model.Annonce;
import com.example.lancy.repository.AnnonceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;

@Service
public class AnnonceService {

    @Autowired
    private final AnnonceRepository annonceRepository;
    public AnnonceService(AnnonceRepository annonceRepository) {
        this.annonceRepository = annonceRepository;
    }



    public Optional<Annonce> getAnnonceById(Long id) {
        return annonceRepository.findById(id);
    }

    public Annonce createAnnonce(Annonce annonce) {
        return annonceRepository.save(annonce);

    }

    public Optional<Annonce> updateAnnonce(Long id, Annonce updatedAnnonce) {
        if (annonceRepository.existsById(id)) {
            updatedAnnonce.setId(id);
            return Optional.of(annonceRepository.save(updatedAnnonce));
        }
        return Optional.empty();
    }

    public boolean deleteAnnonce(Long id) {
        if (annonceRepository.existsById(id)) {
            annonceRepository.deleteById(id);
            return true;
        }
        return false;
    }


   public List<Annonce> getAllAnnonces() {
        return annonceRepository.findAll();
    }
 
}

