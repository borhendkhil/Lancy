package com.example.lancy.controller;

import com.example.lancy.model.Chat;
import com.example.lancy.model.User;
import com.example.lancy.repository.UserRepository;
import com.example.lancy.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/auth/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;
    private final UserRepository userRepository;

    @PostMapping("/send")
    public ResponseEntity sendChatMessage(@RequestBody Chat chat) {
        chatService.sendChatMessage(chat);
        return ResponseEntity.ok("message sent");
    }
    @GetMapping("/between")
    public ResponseEntity<List<Chat>> getAllBetweenUsers(@RequestParam Long senderId, @RequestParam Long receiverId) {
        return ResponseEntity.ok(chatService.getAllBetweenUsers(senderId, receiverId));
    }

    @GetMapping("/userChats")
    public ResponseEntity<Set<User>> getUsersInChatWithUser(@RequestParam Long userId) {
        return ResponseEntity.ok(chatService.getUsersInChatWithUser(userId));
    }




}
