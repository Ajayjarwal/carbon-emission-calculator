package com.example.carbon_emission.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Travelling {
    private float travellingByBus;
    private float travellingByTaxi;
    private float travellingByRailway;
    private float travellingByFlight;


    @Id
    private long user_id;

}
