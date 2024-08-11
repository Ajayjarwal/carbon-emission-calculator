package com.example.carbon_emission.repositories;

import com.example.carbon_emission.model.Travelling;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravellingRepository extends JpaRepository<Travelling, Long> {
}
