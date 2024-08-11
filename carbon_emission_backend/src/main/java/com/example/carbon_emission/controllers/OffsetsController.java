package com.example.carbon_emission.controllers;

import com.example.carbon_emission.model.Offsets;
import com.example.carbon_emission.model.User;
import com.example.carbon_emission.services.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/offsetsDetails")
@CrossOrigin(origins = "http://localhost:4200")
public class OffsetsController {

    @Autowired
    private UserSevice userSevice;

    @PostMapping
    public ResponseEntity<Offsets> createUser(@RequestBody Offsets user){
        Offsets savedUser = userSevice.saveOffsetsDetails(user);
        return ResponseEntity.ok(savedUser);
    }
}
