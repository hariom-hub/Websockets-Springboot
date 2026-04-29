package com.Project.ChatingAppBackend.controller;

import com.Project.ChatingAppBackend.entities.Room;
import com.Project.ChatingAppBackend.repository.RoomRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/rooms")
public class RoomController {

    private RoomRepository roomRepository;

    public RoomController(RoomRepository roomRepository){
        this.roomRepository = roomRepository;
    }

    // create room

    @PostMapping
    public ResponseEntity<Room> createRoom(@RequestBody String roomId){

        if(roomRepository.findByRoomId(roomId) != null){

            // room already exists
            ResponseEntity.badRequest().body("Room already exists");
        }
        Room newroom = new Room();
        newroom.setRoomId(roomId);
        Room SavedRoom = roomRepository.save(newroom);
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





}
