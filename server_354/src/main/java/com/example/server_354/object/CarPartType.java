package com.example.server_354.object;

import jakarta.persistence.*;

@Entity
public class CarPartType{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String part_type;
    private byte[] image;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private CarPartGroup carPartGroup;

    public String getPart_type() {
        return part_type;
    }

    public void setPart_type(String part_type) {
        this.part_type = part_type;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public CarPartGroup getCarPartGroup() {
        return carPartGroup;
    }

    public void setCarPartGroup(CarPartGroup carPartGroup) {
        this.carPartGroup = carPartGroup;
    }
}
