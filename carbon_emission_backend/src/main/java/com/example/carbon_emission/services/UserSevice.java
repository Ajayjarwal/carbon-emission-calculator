package com.example.carbon_emission.services;

import com.example.carbon_emission.model.*;
import com.example.carbon_emission.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSevice {
    @Autowired
    private EmissionRepository emissionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HousehRepository hHRepository;

    @Autowired
    private CarUsageRepository carRepository;

    @Autowired
    private BikeUsageRepository bikeRepository;

    @Autowired
    private TravellingRepository travellingRepository;

    @Autowired
    private WasteRepository wasteRepository;

    @Autowired
    private OffsetsRepository offsetsRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public HouseholdEmission saveHouseDetails(HouseholdEmission hH){
        return hHRepository.save(hH);
    }

    public CarUsage saveCarusage(CarUsage carDetails){
        return carRepository.save(carDetails);
    }

    public MotorBike saveBikeUsage(MotorBike bikeDetails){
        return bikeRepository.save(bikeDetails);
    }

    public Travelling saveTravellingDetails(Travelling tDetails){
        return travellingRepository.save(tDetails);
    }

    public Waste saveWasteDetails(Waste wasteDetails){
        return wasteRepository.save(wasteDetails);
    }

    public Offsets saveOffsetsDetails(Offsets offsets){
        return offsetsRepository.save(offsets);
    }

    public EmissionDetails saveEmissionDetails(EmissionDetails emission){
        return emissionRepository.save(emission);
    }
}
