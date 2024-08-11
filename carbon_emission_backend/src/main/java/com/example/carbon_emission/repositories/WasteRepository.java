package com.example.carbon_emission.repositories;

import com.example.carbon_emission.model.Waste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WasteRepository extends JpaRepository<Waste, Long> {
}
