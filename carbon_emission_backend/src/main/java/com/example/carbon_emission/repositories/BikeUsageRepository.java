package com.example.carbon_emission.repositories;

import com.example.carbon_emission.model.MotorBike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BikeUsageRepository extends JpaRepository<MotorBike, Long> {
}
