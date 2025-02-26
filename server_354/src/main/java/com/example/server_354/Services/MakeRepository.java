package com.example.server_354.Services;

import com.example.server_354.object.Make;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MakeRepository extends JpaRepository<Make, Long> {

    @Query(value = "SELECT * FROM make", nativeQuery = true)
    List<Make> getAllMakes();

}
