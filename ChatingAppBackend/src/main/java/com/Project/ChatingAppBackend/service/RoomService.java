package com.Project.ChatingAppBackend.service;

import com.Project.ChatingAppBackend.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomService {

    @Autowired
    private final RoomRepository roomRepository;


}
