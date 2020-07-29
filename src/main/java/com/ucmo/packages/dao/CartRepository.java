package com.ucmo.packages.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ucmo.packages.model.Cart;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface CartRepository extends CrudRepository<Cart, Integer>{
	Long countByPartName(String name);
}
