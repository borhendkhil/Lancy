package com.example.lancy.model;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private Long senderId;


    private Long receiverId;

    private String message;

    private LocalDateTime timestamp;

    @PrePersist
    @PreUpdate
    public void setTimestamp() {

        this.timestamp = LocalDateTime.now();
    }




}
