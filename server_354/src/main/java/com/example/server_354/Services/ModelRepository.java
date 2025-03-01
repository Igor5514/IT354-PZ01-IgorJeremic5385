package com.example.server_354.Services;

import com.example.server_354.object.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ModelRepository extends JpaRepository<Model, Long> {

    @Query(value = "SELECT model from model where make_id = :makeId", nativeQuery = true)
    List<String> getModelByMakeId(@Param("makeId") int makeId);

    @Query(value = "SELECT model_id from model WHERE model = :model", nativeQuery = true)
    Integer getModelIdByModel(@Param("model") String model);


}