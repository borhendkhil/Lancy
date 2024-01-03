package com.example.lancy.service;

import com.example.lancy.model.Annonce;
import com.example.lancy.model.User;
import com.example.lancy.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import javax.swing.text.html.Option;
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow();
    }

    public Optional<User> updateUser(Long id, User updateduser) {
        if (userRepository.existsById(id)) {
            updateduser.setId(id);
            return Optional.of(userRepository.save(updateduser));
        }
        return Optional.empty();
    }



    

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}
