package com.example.carbon_emission.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Waste {
    private float houseHoldResidue;
    private float foodAndDrink;
    private float gardenResidue;

    @Id
    private long user_id;
}
