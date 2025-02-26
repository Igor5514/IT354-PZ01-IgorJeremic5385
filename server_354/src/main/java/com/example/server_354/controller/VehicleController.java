package com.example.server_354.controller;

import com.example.server_354.Services.VehicleService;
import com.example.server_354.object.Make;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
            errorResponse.put("error", "Internal server error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

}
