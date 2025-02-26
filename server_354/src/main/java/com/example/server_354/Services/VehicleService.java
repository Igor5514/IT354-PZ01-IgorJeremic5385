package com.example.server_354.Services;

import com.example.server_354.object.Make;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {

    private final MakeRepository makeRepository;
    private final ModelRepository modelRepository;

    public VehicleService(MakeRepository makeRepository, ModelRepository modelRepository) {
        this.makeRepository = makeRepository;
        this.modelRepository = modelRepository;
    }


    public List<Make> getAllMakes(){
        return makeRepository.getAllMakes();
    }





}
