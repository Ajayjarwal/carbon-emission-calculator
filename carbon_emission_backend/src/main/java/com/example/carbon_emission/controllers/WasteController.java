package com.example.carbon_emission.controllers;

import com.example.carbon_emission.model.Waste;
import com.example.carbon_emission.services.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/wasteDetails")
@CrossOrigin(origins = "http://localhost:4200")
public class WasteController {
    @Autowired
    private UserSevice userSevice;

    @PostMapping
    public ResponseEntity<Waste> createUser(@RequestBody Waste user){
        Waste savedUser = userSevice.saveWasteDetails(user);
        return ResponseEntity.ok(savedUser);
    }
}
