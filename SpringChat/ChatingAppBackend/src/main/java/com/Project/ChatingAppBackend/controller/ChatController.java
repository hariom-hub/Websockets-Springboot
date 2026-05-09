package com.Project.ChatingAppBackend.controller;


import com.Project.ChatingAppBackend.entities.Message;
import com.Project.ChatingAppBackend.entities.Room;
import com.Project.ChatingAppBackend.payload.MessageRequest;
import com.Project.ChatingAppBackend.repository.RoomRepository;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Controller
@CrossOrigin("http://localhost:5173")

public class ChatController {

    // controller for the chat

    private RoomRepository roomRepository;
    public ChatController(RoomRepository roomRepository){
        this.roomRepository = roomRepository;
    }

    // for sending and receiving messages

    @MessageMapping("/sendMessage/{roomId}")  // message willl
    @SendTo("/topic/room/{roomId}") // client
    public Message SendMessage(@DestinationVariable String roomId, @RequestBody MessageRequest messageRequest){

        Room room = roomRepository.findByRoomId(messageRequest.getRoomId());
        Message msg = new Message();
        msg.setContent(messageRequest.getContent());
        msg.setSender(messageRequest.getSender());
        msg.setTimeStamp(LocalDateTime.now());

        if (room != null){
            room.getMessages().add(msg);
            roomRepository.save(room);
        }else {
            throw  new RuntimeException("room not found !!");
        }
        return msg;
    }
    
}
