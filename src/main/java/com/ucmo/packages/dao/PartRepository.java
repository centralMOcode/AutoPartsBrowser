package com.ucmo.packages.dao;

import com.ucmo.packages.model.Part;
import com.ucmo.packages.dto.ModelPartDto;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface PartRepository extends CrudRepository<Part, Integer> {
	
	@Query("SELECT new com.ucmo.packages.dto.ModelPartDto(m.id, m.name, m.year, p.id, p.name, p.manufacturer, p.price) " 
			+ "FROM Part p JOIN p.model m")
	List<ModelPartDto> fetchModelPartDataJoin();
	
	@Query("SELECT new com.ucmo.packages.dto.ModelPartDto(m.id, m.name, m.year, p.id, p.name, p.manufacturer, p.price)"
			+ "FROM Part p JOIN p.model m WHERE m.id = ?1")
	List<ModelPartDto> fetchModelPartDataByModelId(Integer id);
	
	@Transactional
	@Modifying
	@Query(value = "INSERT INTO Part(name, manufacturer, price) VALUES(:name, :manufacturer, :price)", nativeQuery = true)
	void savePart(@Param("name") String name, @Param("manufacturer") String manufacturer, @Param("price") Double price);
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE Part SET price = :price WHERE id = :id")
	void updatePart(@Param("price") Double price, @Param("id") Integer id);
	
	/*@Query("SELECT id FROM part WHERE 1 ORDER BY id DESC LIMIT 1 ")
	Part fetchLastSaved();*/
	
	List<Part> findByNameContaining(String name); //Should be able to structure a query so I can use this repo function to incorporate a search function
}
