package com.example.carbon_emission.controllers;

import com.example.carbon_emission.model.HouseholdEmission;
import com.example.carbon_emission.services.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/houseDetails")
@CrossOrigin(origins = "http://localhost:4200")
public class HousehController {
    @Autowired
    private UserSevice userSevice;

    @PostMapping
    public ResponseEntity<HouseholdEmission> createUser(@RequestBody HouseholdEmission user){
        HouseholdEmission savedUser = userSevice.saveHouseDetails(user);
        return ResponseEntity.ok(savedUser);
    }
}
