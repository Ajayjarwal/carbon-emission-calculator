package com.example.carbon_emission.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class EmissionDetails {
    private float houseHoldEmission;
    private float carEmission;
    private float bikeEmission;
    private float travellingEmission;
    private float wasteEmission;
    private float offsetsEmission;

    @Id
    private long user_id;
}
