package com.example.carbon_emission.repositories;

import com.example.carbon_emission.model.HouseholdEmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HousehRepository extends JpaRepository<HouseholdEmission, Long> {
}
