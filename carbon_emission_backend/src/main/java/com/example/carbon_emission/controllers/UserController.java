package com.example.carbon_emission.controllers;


import com.example.carbon_emission.model.User;
import com.example.carbon_emission.services.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/userDetails")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserSevice userSevice;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        User savedUser = userSevice.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }
}
