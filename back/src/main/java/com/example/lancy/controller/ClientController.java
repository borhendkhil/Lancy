package com.example.lancy.controller;

import com.example.lancy.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/client")
@RequiredArgsConstructor

public class ClientController {


    private final UserService userService;

    @GetMapping
    public ResponseEntity<String> demo() {

        return ResponseEntity.ok(userService.findAll().toString());
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<String> client(@PathVariable Long id) {

        return ResponseEntity.ok(userService.findById(id).toString());

    }
    @PutMapping
    public ResponseEntity<String> updateClient(@PathVariable Long id) {

        return ResponseEntity.ok(userService.findById(id).toString());

    }
    @DeleteMapping
    public ResponseEntity<String> deleteClient(@PathVariable Long id) {

        return ResponseEntity.ok(userService.findById(id).toString());

    }



}
