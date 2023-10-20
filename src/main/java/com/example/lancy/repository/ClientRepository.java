package com.example.lancy.repository;

import com.example.lancy.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ClientRepository extends JpaRepository<Client, Long>{
     Client findByMail(String mail);
}
