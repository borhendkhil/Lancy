package com.example.lancy.service;

import com.example.lancy.model.Postuler;
import com.example.lancy.repository.PostulerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PostulerService {
    @Autowired
    private final PostulerRepository postulerRepository;

    public PostulerService(PostulerRepository postulerRepository) {
        this.postulerRepository = postulerRepository;
    }
    public List<Postuler> findAll() {
        return postulerRepository.findAll();
    }
    public Optional<Postuler> getPostulerById(Long id) {
        return postulerRepository.findById(id);
    }
    public List<Postuler> getPostulerById_annonce(Long id) {
        return postulerRepository.findPostulerById_annonce(id);
    }
    public List<Postuler> getPostulerById_freelancer(Long id) {
        return postulerRepository.findPostulerById_freelancer(id);
    }

    public Postuler createPostuler(Postuler postuler) {
        Optional<Postuler> postulerOptional = postulerRepository
                .findPostulerById_freelancer(postuler.getId_freelancer (), postuler.getId_annonce()) ;
        if (postulerOptional.isPresent()) {
            throw new IllegalStateException("you already applied for this job");

        }
        return postulerRepository.save(postuler);
    }

    public Optional<Postuler> updatePostuler(Long id, Postuler updatedPostuler) {
        if (postulerRepository.existsById(id)) {
            updatedPostuler.setId(id);
            return Optional.of(postulerRepository.save(updatedPostuler));
        }
        return Optional.empty();
    }

    public boolean deletePostuler(Long id) {
        if (postulerRepository.existsById(id)) {
            postulerRepository.deleteById(id);
            return true;
        }
        return false;
    }
    public int countFreelancer(Long id) {
        return postulerRepository.countPostuler(id);

    }



    

    
}
