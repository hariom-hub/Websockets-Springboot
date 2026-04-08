package com.webapp.Websockets.chat;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ChatMessage {

    private String Content;
    private String Sender;
    private MessageType msgType;


}
