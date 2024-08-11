package com.example.carbon_emission.controllers;

import com.example.carbon_emission.model.CarUsage;
import com.example.carbon_emission.services.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/carDetails")
@CrossOrigin(origins = "http://localhost:4200")
public class CarUsageController {
    @Autowired
    private UserSevice userSevice;

    @PostMapping
    public ResponseEntity<CarUsage> createUser(@RequestBody CarUsage user){
        CarUsage savedUser = userSevice.saveCarusage(user);
        return ResponseEntity.ok(savedUser);
    }
}
