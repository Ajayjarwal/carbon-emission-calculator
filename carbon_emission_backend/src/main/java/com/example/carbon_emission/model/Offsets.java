package com.example.carbon_emission.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Offsets {
    private long numOfTrees;
    private long areaUnderSoil;
    private long getAreaUnderWater;
    private long getAreaUnderGrass;

    @Id
    private long user_id;
}
