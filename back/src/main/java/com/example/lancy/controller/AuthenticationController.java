package com.example.lancy.controller;

import com.example.lancy.model.AuthenticationRequest;
import com.example.lancy.model.AuthenticationResponse;
import com.example.lancy.model.RegisterRequest;
import com.example.lancy.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000") 

@RequiredArgsConstructor

public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity <AuthenticationResponse> register(
        @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authenticationService.register(request));
    }
    @PostMapping("/registerFreelancer")
    public ResponseEntity <AuthenticationResponse> registerFreelancer(
        @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authenticationService.registerFreelancer(request));
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
        @RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticateAndGetCurrentUser(request));

    }
    @GetMapping("/currentUserId")
    public ResponseEntity<Long> getCurrentUserId() {
        return ResponseEntity.ok(authenticationService.getCurrentUserId());
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        authenticationService.logout();
        return ResponseEntity.ok().build();
    }

}
