package com.example.lancy.repository;

import com.example.lancy.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository

public interface ChatRepository extends JpaRepository<Chat, Long> {

    @Query("SELECT DISTINCT c.senderId FROM Chat c WHERE c.receiverId = ?1")
    List<Long> findDistinctBySenderId(Long sender);
    @Query("SELECT DISTINCT c.receiverId FROM Chat c WHERE c.senderId = ?1")
    List<Long> findDistinctByReceiverId(Long receiver);


    List<Chat> findAllBySenderIdAndReceiverId(Long senderId, Long receiverId);
}
