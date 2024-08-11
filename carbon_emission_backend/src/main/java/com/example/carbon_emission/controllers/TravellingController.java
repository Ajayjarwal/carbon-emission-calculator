package com.example.carbon_emission.controllers;


import com.example.carbon_emission.model.Travelling;
import com.example.carbon_emission.model.User;
import com.example.carbon_emission.services.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/travellingDetails")
@CrossOrigin(origins = "http://localhost:4200")
public class TravellingController {
    @Autowired
    private UserSevice userSevice;

    @PostMapping
    public ResponseEntity<Travelling> createUser(@RequestBody Travelling user){
        Travelling savedUser = userSevice.saveTravellingDetails(user);
        return ResponseEntity.ok(savedUser);
    }
}
