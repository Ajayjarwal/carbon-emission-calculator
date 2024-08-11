package com.example.carbon_emission.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    private String country;
    private long family_members;
    private int start_year;
    private int end_year;
}

