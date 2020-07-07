package com.ucmo.packages.dao;

import com.ucmo.packages.model.Part;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface PartRepository extends CrudRepository<Part, Integer> {
	
	List<Part> findByCarModel(String model);
}
