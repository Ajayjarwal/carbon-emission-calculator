package com.example.carbon_emission.repositories;
import com.example.carbon_emission.model.Offsets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OffsetsRepository extends JpaRepository<Offsets, Long> {
}
