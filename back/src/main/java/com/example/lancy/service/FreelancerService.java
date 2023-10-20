package com.example.lancy.service;

import com.example.lancy.model.Freelancer;
import com.example.lancy.repository.FreelancerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class FreelancerService {


    @Autowired private final FreelancerRepository freelancerRepository;

    public FreelancerService(FreelancerRepository freelancerRepository) {
        this.freelancerRepository = freelancerRepository;
    }

    public List<Freelancer> findAll() {
        return freelancerRepository.findAll();
    }
}
