package com.example.server_354.Services;

import com.example.server_354.object.Make;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {

    private final MakeRepository makeRepository;
    private final ModelRepository modelRepository;
    private final GenerationRepository generationRepository;
    private final EngineRepository engineRepository;

    public VehicleService(MakeRepository makeRepository, ModelRepository modelRepository, GenerationRepository generationRepository, EngineRepository engineRepository) {
        this.makeRepository = makeRepository;
        this.modelRepository = modelRepository;
        this.generationRepository = generationRepository;
        this.engineRepository = engineRepository;
    }


    public List<Make> getAllMakes(){
        return makeRepository.getAllMakes();
    }

    public List<String> getModelByMakeId(int makeId){
        return modelRepository.getModelByMakeId(makeId);
    }

    public Integer getMakeIdByMake(String make){
        return makeRepository.getMakeIdByMake(make);
    }

    public List<String> getGenerationByModelId(String model){
        return generationRepository.getGenerationByModelId(model);
    }

    public List<String> getEngineByModelAndGeneration(String model, String generation){
        return engineRepository.getEngineByModelAndGeneration(model, generation);
    }

}
