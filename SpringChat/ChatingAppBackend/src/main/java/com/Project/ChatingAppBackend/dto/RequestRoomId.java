package com.Project.ChatingAppBackend.dto;

public class RequestRoomId {

    private String roomId;

    public RequestRoomId(String roomId){
        this.roomId = roomId;
    }

    public  String getRoomId(){
        return roomId;
    }
    public void setRoomId(String roomId){
        this.roomId = roomId;
    }


}
