package com.example.carbon_emission.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class MotorBike {
    private float milage;
    private String engineType;
    private int engineSize;
    private int bikeAge;
    private long usagePerMonth;

    @Id
    private long user_id;
}
