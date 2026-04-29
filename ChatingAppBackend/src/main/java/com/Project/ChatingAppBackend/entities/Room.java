package com.Project.ChatingAppBackend.entities;


import lombok.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "rooms")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Room {

    @Id
    private String Id;  // mongodb unique id
    private String roomId;
    private List<Message>messages = new ArrayList<>();


}
