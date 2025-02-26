package com.example.server_354.object;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id = 0;
    private String make;
    private String model;
    private String generation;
    private String engine;

    public Vehicle(String make, String model, String generation, String engine) {
        this.make = make;
        this.model = model;
        this.generation = generation;
        this.engine = engine;
    }

    public Vehicle() {

    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public String getGeneration() {
        return generation;
    }

    public String getEngine() {
        return engine;
    }

    // Setters
    public void setMake(String make) {
        this.make = make;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setGeneration(String generation) {
        this.generation = generation;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

    @Override
    public String toString() {
        return make + " " + model + " (" + generation + ") - Engine: " + engine;
    }

}

