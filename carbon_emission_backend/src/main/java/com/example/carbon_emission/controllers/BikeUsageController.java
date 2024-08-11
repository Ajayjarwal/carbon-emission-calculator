package com.example.carbon_emission.controllers;

import com.example.carbon_emission.model.MotorBike;
import com.example.carbon_emission.services.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/bikeDetails")
@CrossOrigin(origins = "http://localhost:4200")
public class BikeUsageController {
    @Autowired
    private UserSevice userSevice;

    @PostMapping
    public ResponseEntity<MotorBike> createUser(@RequestBody MotorBike user){
        MotorBike savedUser = userSevice.saveBikeUsage(user);
        return ResponseEntity.ok(savedUser);
    }
}
