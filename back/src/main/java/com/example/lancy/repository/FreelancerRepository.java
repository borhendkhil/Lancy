package com.example.lancy.repository;

import com.example.lancy.model.Freelancer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FreelancerRepository extends JpaRepository<Freelancer, Long> {

    Freelancer findByMail(String mail);



}
