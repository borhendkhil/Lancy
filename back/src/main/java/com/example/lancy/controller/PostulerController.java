package com.example.lancy.controller;

import com.example.lancy.model.Postuler;
import com.example.lancy.service.PostulerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("auth/postuler")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostulerController {
    
    private final PostulerService postulerService;

    public PostulerController(PostulerService postulerService) {
        this.postulerService = postulerService;
    }

    @GetMapping
    public ResponseEntity<List<Postuler>> getAllPostulers() {
        return ResponseEntity.ok(postulerService.findAll());
    }



    @GetMapping("/{id}")
    public ResponseEntity<Postuler> getPostulerById(@PathVariable Long id) {
        return postulerService.getPostulerById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping()
   public ResponseEntity<Postuler> createPostuler(@RequestBody Postuler newPostuler) {
        return ResponseEntity.ok(postulerService.createPostuler(newPostuler));
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
    @GetMapping("/count/{id}")
    public ResponseEntity<Integer> countPostuler(@PathVariable Long id) {
        return ResponseEntity.ok(postulerService.countFreelancer(id));
    }

    @GetMapping("/annonce/{id}")
    public ResponseEntity<List<Postuler>> getPostulerById_annonce(@PathVariable Long id) {
        return ResponseEntity.ok(postulerService.getPostulerById_annonce(id));
    }


    @GetMapping("/freelancer/{id}")
    public ResponseEntity<List<Postuler>> getPostulerById_freelancer(@PathVariable Long id) {
        return ResponseEntity.ok(postulerService.getPostulerById_freelancer(id));
    }

}
