package com.example.carbon_emission.repositories;


import com.example.carbon_emission.model.EmissionDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmissionRepository extends JpaRepository<EmissionDetails, Long> {
}
