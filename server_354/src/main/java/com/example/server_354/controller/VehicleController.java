package com.example.server_354.controller;

import com.example.server_354.Services.VehicleService;
import com.example.server_354.object.*;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {

    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService){
        this.vehicleService = vehicleService;
    }

    @GetMapping("/getMake")
    public ResponseEntity<?> getVehicleMake() {
        Map<String, String> errorResponse = new HashMap<>();
        try {
            List<Make> makeList = vehicleService.getAllMakes();
            return ResponseEntity.ok(makeList);
        } catch (DataAccessException e) {
            System.out.println(e.getMessage());
            errorResponse.put("error", "Internal server error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PostMapping("/getModel")
    public ResponseEntity<?> getVehicleModel(@RequestBody String make){
        String substrigedMake = make.substring(1, make.length() - 1);
        Integer makeId = vehicleService.getMakeIdByMake(substrigedMake);
        Map<String, String> errorResponse = new HashMap<>();
        try{
            List<String> modelList = vehicleService.getModelByMakeId(makeId);
            return ResponseEntity.ok(modelList);
        }catch (DataAccessException e){
            System.out.println(e.getMessage());
            errorResponse.put("message", "couldn't retrieve model"+ e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PostMapping("/getGeneration")
    public ResponseEntity<?> getVehicleGeneration(@RequestBody String model){
        String substrigedModel = model.substring(1, model.length() - 1);
        Map<String, String> errorResponse = new HashMap<>();
        try{
            List<String> generationList = vehicleService.getGenerationByModelId(substrigedModel);
            return ResponseEntity.ok(generationList);
        }catch (DataAccessException e){
            System.out.println(e.getMessage());
            errorResponse.put("error", "couldn't retrieve generation"+ e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PostMapping("/getEngine")
    public ResponseEntity<?> getVehicleEngine(@RequestBody EngineModel engineModel){
        String substringModel = engineModel.getModel();
        String substringGeneration = engineModel.getGeneration();
        Map<String, String> errorResponse = new HashMap<>();
        try{
            List<String> engineList = vehicleService.getEngineByModelAndGeneration(substringModel, substringGeneration);
            return ResponseEntity.ok(engineList);
        }catch (DataAccessException e){
            System.out.println(e.getMessage());
            errorResponse.put("message", "couldn't retrieve engine"+ e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/getPartGroup")
    private ResponseEntity<?> getPartGroup(){
        Map<String,String> response = new HashMap<>();
        try{
            List<PartGroup> list = new ArrayList<>();
            List<CarPartGroup> groupList= vehicleService.getPartsGroup();
            for(CarPartGroup pg : groupList){
                String base64Image = Base64.getEncoder().encodeToString(pg.getImage());
                String groupName = pg.getGroup_name();
                List<String> partsList = vehicleService.getFourCarPartsByGroupId(pg.getGroup_id());
                list.add( new PartGroup(groupName,base64Image, partsList));
            }
            return ResponseEntity.ok(list);
        }catch (DataAccessException e){
            System.out.println("message: "+e.getMessage());
            response.put("message", "error: "+e.getMessage());
             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    public static byte[] convertImageToBytes(BufferedImage image) throws IOException {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ImageIO.write(image, "png", byteArrayOutputStream);
        return byteArrayOutputStream.toByteArray();
    }

}
