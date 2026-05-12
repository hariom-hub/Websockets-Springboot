package com.Project.ChatingAppBackend.controller;
import java.util.*;

import com.Project.ChatingAppBackend.dto.RequestRoomId;
import com.Project.ChatingAppBackend.entities.Message;
import com.Project.ChatingAppBackend.entities.Room;
import com.Project.ChatingAppBackend.repository.RoomRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/api/v1/rooms") -> creates double path issue
@CrossOrigin("http://localhost:5173")

public class RoomController {

    private RoomRepository roomRepository;

    public RoomController(RoomRepository roomRepository){
        this.roomRepository = roomRepository;
    }




    // create room
    @PostMapping("/api/v1/rooms")
    public ResponseEntity<?> createRoom(@RequestBody RequestRoomId requestId){

        String roomId = requestId.getRoomId();

        if(roomRepository.findByRoomId(roomId) != null){
            // room already exists
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Room Already Exists. Create a new room.");
        }
        Room newRoom = new Room(requestId.getRoomId());
//        newroom.setRoomId(roomId);
        Room SavedRoom = roomRepository.save(newRoom);
        return ResponseEntity.status(HttpStatus.CREATED).body(SavedRoom);

    }

    // get room for joining

    @GetMapping("/room/{roomId}")
    public ResponseEntity<?> joinRoom(@PathVariable String roomId){

        Room room = roomRepository.findByRoomId(roomId);

        if (room == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Room not found.");
        }
        return ResponseEntity.ok(room);
    }


    // get messsages of room

    @GetMapping("/room/{roomId}/messages")

    public ResponseEntity<List<Message>>getMessages(@PathVariable String roomId, @RequestParam(value = "page",defaultValue = "0",required = false)int page,@RequestParam(value = "size",defaultValue = "20",required = false)int size) {

        Room room = roomRepository.findByRoomId(roomId);
        List<Message> messages = room.getMessages();
        if (room == null) {
            return ResponseEntity.badRequest().build();
        }
        int start = Math.max(0,messages.size()- (page+ 1) * size);
        int end = Math.min(messages.size(),start + size);

        List<Message>paginatedMessages = messages.subList(start,end);

        return ResponseEntity.status(HttpStatus.OK).body(messages);
    }
}
