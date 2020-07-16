package com.ucmo.packages.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ucmo.packages.model.Model;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface ModelRepository extends CrudRepository<Model, Integer> {

	List<Model> findByNameContaining(String modelName);
	
	
	List<Model> findByYear(Integer modelYear);
}
