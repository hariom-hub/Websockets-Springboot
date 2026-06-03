package com.Project.ChatingAppBackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class democontroller {

    @GetMapping("/hello")
    public String greet(){
        return "hello world";
    }
}
