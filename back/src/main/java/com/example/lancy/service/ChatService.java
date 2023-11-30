package com.example.lancy.service;

import com.example.lancy.model.Chat;
import com.example.lancy.model.User;
import com.example.lancy.repository.ChatRepository;
import com.example.lancy.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRepository chatRepository;

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final UserRepository userRepository;

    public void sendChatMessage(Chat chat) {
        chatRepository.save(chat);
        simpMessagingTemplate.convertAndSendToUser(
                String.valueOf(chat.getReceiverId()), "/queue/messages", chat);
    }

    public List<Chat> getAllBetweenUsers(Long senderId, Long receiverId) {
        return chatRepository.findAllBySenderIdAndReceiverId(senderId, receiverId);
    }

    public Set<User> getUsersInChatWithUser(Long userId) {
        List<Long> senderIds = chatRepository.findDistinctBySenderId(userId);
        List<Long> receiverIds = chatRepository.findDistinctByReceiverId(userId);

        Set<User> allUsersInChat = new HashSet<>();

        senderIds.forEach(senderId -> {
            User sender = userRepository.findById(senderId).orElse(null);
            if (sender != null) {
                allUsersInChat.add(sender);
            }
        });

        receiverIds.forEach(receiverId -> {
            User receiver = userRepository.findById(receiverId).orElse(null);
            if (receiver != null) {
                allUsersInChat.add(receiver);
            }
        });

        return allUsersInChat;
    }



}
