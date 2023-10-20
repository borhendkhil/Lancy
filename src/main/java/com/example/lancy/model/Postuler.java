package com.example.lancy.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "postuler")
public class Postuler {
    @Id
    @GeneratedValue (strategy = jakarta.persistence.GenerationType.IDENTITY)
    private long id;
    @Column (name = "id_freelancer")

    private long id_freelancer;
    @Column (name = "id_annonce")
    private long id_annonce;
    @Column (name = "motivation")
    private String motivation;
    @Column (name = "date")
    private LocalDate date;


    public Postuler(long id, long id_freelancer, long id_annonce, String motivation, LocalDate date) {
        this.id = id;
        this.id_freelancer = id_freelancer;
        this.id_annonce = id_annonce;
        this.motivation = motivation;
        this.date = date;
    }

    public Postuler() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId_freelancer() {
        return id_freelancer;
    }

    public void setId_freelancer(long id_freelancer) {
        this.id_freelancer = id_freelancer;
    }

    public long getId_annonce() {
        return id_annonce;
    }

    public void setId_annonce(long id_annonce) {
        this.id_annonce = id_annonce;
    }

    public String getMotivation() {
        return motivation;
    }

    public void setMotivation(String motivation) {
        this.motivation = motivation;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
