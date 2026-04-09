package com.webapp.Websockets.config;

import com.webapp.Websockets.chat.ChatMessage;
import com.webapp.Websockets.chat.MessageType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class WebSocketEventListener {

    private final SimpMessageSendingOperations messageTemplate;
    @EventListener
    public void handleDisconnectEventListener(SessionDisconnectEvent event){

        // to be implemented
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        String username = (String) headerAccessor.getSessionAttributes().get("username");
        if (username != null){

            log.info("User disconnected : {}",username);
            var chatMessage = ChatMessage.builder().msgType(MessageType.LEAVE).Sender(username).build();
            messageTemplate.convertAndSend("/topic/public",chatMessage);




        }
    }
}
