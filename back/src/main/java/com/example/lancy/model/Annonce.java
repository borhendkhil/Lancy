package com.example.lancy.model;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name = "annonce")
public class Annonce {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long id_client;

    private String title;

    private String description;


    private String category;

    private LocalDate date;
    private boolean isActive;
    private String etat;





}

