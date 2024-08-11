package com.example.carbon_emission.controllers;

import com.example.carbon_emission.model.EmissionDetails;
import com.example.carbon_emission.model.Waste;
import com.example.carbon_emission.services.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/emissionDetails")
@CrossOrigin(origins = "http://localhost:4200")
public class EmissionDetailsController {
    @Autowired
    private UserSevice userSevice;

    @PostMapping
    public ResponseEntity<EmissionDetails> createUser(@RequestBody EmissionDetails user){
        EmissionDetails savedUser = userSevice.saveEmissionDetails(user);
        return ResponseEntity.ok(savedUser);
    }
}
