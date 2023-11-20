package com.example.lancy.repository;

import com.example.lancy.model.Postuler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostulerRepository extends JpaRepository<Postuler, Long> {
    Postuler findByid(long id);
    @Query("SELECT p FROM Postuler p WHERE p.id_freelancer = ?1 AND p.id_annonce = ?2")
    Optional<Postuler> findPostulerById_freelancer(Long id_freelancer , Long id_annonce);



}
