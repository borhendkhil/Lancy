package com.example.lancy.controller;

import com.example.lancy.model.Postuler;
import com.example.lancy.service.PostulerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/postuler")
@RestController
public class PostulerController {
    
    private final PostulerService postulerService;

    public PostulerController(PostulerService postulerService) {
        this.postulerService = postulerService;
    }

    @GetMapping
    public List<Postuler> getAllPostuler() {
        return postulerService.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Postuler> getPostulerById(@PathVariable Long id) {
        return postulerService.getPostulerById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping(/*consumes = "application/json", produces = "application/json"*/)
    public Postuler createPostuler(@RequestBody Postuler annonce) {
        return postulerService.createPostuler(annonce);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Postuler> updatePostuler(@PathVariable Long id, @RequestBody Postuler updatedPostuler) {
        return postulerService.updatePostuler(id, updatedPostuler)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePostuler(@PathVariable Long id) {
        return postulerService.deletePostuler(id) ?
                ResponseEntity.noContent().build() :
                ResponseEntity.notFound().build();
    }
}
