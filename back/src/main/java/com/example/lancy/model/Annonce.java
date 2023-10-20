package com.example.lancy.model;

import jakarta.persistence.*;

@Entity
@Table(name = "annonce")
public class Annonce {
    @Id
    @GeneratedValue (strategy = jakarta.persistence.GenerationType.IDENTITY)
    private long id;
    @Column (name = "title")
    private String title;
    @Column (name = "description")
    private String description;

    public Annonce() {
    }

    public Annonce(long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
