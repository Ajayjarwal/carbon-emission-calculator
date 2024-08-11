package com.example.carbon_emission.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class HouseholdEmission {

    private float electricity;
    private float lpg;
    private float naturalGas;
    private float heatOil;
    private float coal;
    private float propane;
    private float woodenPallets;

    @Id
    private long user_id;
}
