package com.example.carbon_emission.repositories;

import com.example.carbon_emission.model.CarUsage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarUsageRepository extends JpaRepository<CarUsage, Long> {
}
