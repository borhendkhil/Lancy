package com.example.lancy.service;

import com.example.lancy.config.JwtService;
import com.example.lancy.model.*;
import com.example.lancy.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;



    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .name(request.getName())
                .firstName(request.getFirstName())
                .mail(request.getMail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.CLIENT)

                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);


        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
    public AuthenticationResponse registerFreelancer(RegisterRequest request) {
        var user = User.builder()
                .name(request.getName())
                .firstName(request.getFirstName())
                .mail(request.getMail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.FREELANCER)

                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
    public AuthenticationResponse registerAdmin(RegisterRequest request) {
        var user = User.builder()
                .name(request.getName())
                .firstName(request.getFirstName())
                .mail(request.getMail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.ADMIN)

                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public Long     getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.getPrincipal() instanceof UserDetails ) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String username = userDetails.getUsername();
            System.out.println("Username: " + username);

            Optional<User> userOptional = userRepository.findByMail(username);
            if (userOptional.isPresent()) {
                Long userId = userOptional.get().getId();
                System.out.println("User ID: " + userId);
                return userId;
            } else {
                System.out.println("User not found in the database.");
            }
        } else {
            System.out.println("User not authenticated.");
        }

        return null;
    }
    public AuthenticationResponse authenticateAndGetCurrentUser(AuthenticationRequest request) {
        Authentication authenticationToken = new UsernamePasswordAuthenticationToken(
                request.getMail(),
                request.getPassword()
        );

        Authentication authenticatedAuthentication = authenticationManager.authenticate(authenticationToken);

        SecurityContextHolder.getContext().setAuthentication(authenticatedAuthentication);

        String authenticatedUsername = authenticatedAuthentication.getName();
        Optional<User> userOptional = userRepository.findByMail(authenticatedUsername);

        User user = userOptional.orElseThrow(() -> new UsernameNotFoundException("User not found"));

        String jwtToken = jwtService.generateToken(user);

        return new AuthenticationResponse(user.getId(), jwtToken);
    }


    public void logout() {
        SecurityContextHolder.clearContext();
    }










}
