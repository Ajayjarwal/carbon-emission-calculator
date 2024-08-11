package com.example.carbon_emission.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class CarUsage {

    private float milage;
    private String carType;
    private String fuelType;
    private int engineSize;
    private int carAge;
    private long usagePerMonth;

    @Id
    private long user_id;
}
