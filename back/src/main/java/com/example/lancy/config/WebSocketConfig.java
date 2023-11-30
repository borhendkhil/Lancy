package com.example.lancy.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.support.ExecutorSubscribableChannel;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;


@Configuration
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/queue");
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").withSockJS();
    }
    @Bean
    public ThreadPoolTaskExecutor clientOutboundChannelExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(1);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(10);
        executor.setThreadNamePrefix("clientOutboundChannel-");
        executor.initialize();
        return executor;
    }

    @Bean
    public ExecutorSubscribableChannel clientOutboundChannel(ThreadPoolTaskExecutor clientOutboundChannelExecutor) {
        return new ExecutorSubscribableChannel(clientOutboundChannelExecutor);
    }

    @Bean
    public SimpMessagingTemplate simpMessagingTemplate(ExecutorSubscribableChannel clientOutboundChannel) {
        return new SimpMessagingTemplate(clientOutboundChannel);
    }
}
