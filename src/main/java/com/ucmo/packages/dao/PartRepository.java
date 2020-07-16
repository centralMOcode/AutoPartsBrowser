package com.ucmo.packages.dao;

import com.ucmo.packages.model.Part;
import com.ucmo.packages.dto.ModelPartDto;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface PartRepository extends CrudRepository<Part, Integer> {
	
	@Query("SELECT new com.ucmo.packages.dto.ModelPartDto(m.id, m.name, m.year, p.id, p.name, p.manufacturer, p.price) " 
			+ "FROM Part p JOIN p.model m")
	List<ModelPartDto> fetchModelPartDataJoin();
	
	List<Part> findByNameContaining(String name);
}
