package com.example.lancy.repository;

import com.example.lancy.model.Postuler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository

public interface PostulerRepository  extends JpaRepository<Postuler, Long> {
    Postuler findByid(long id);
    @Query("SELECT p FROM Postuler p WHERE p.id_freelancer = ?1 AND p.id_annonce = ?2")
    Optional<Postuler> findPostulerById_freelancer(Long id_freelancer , Long id_annonce);

    @Query("SELECT COUNT(*) FROM Postuler p WHERE p.id_freelancer = ?1")
    int countPostuler(Long id);



    @Query("SELECT p FROM Postuler p WHERE p.id_annonce = ?1")
    List<Postuler> findPostulerById_annonce(Long id);

    @Query("SELECT p FROM Postuler p WHERE p.id_freelancer = ?1")
    List<Postuler> findPostulerById_freelancer(Long id);
}
