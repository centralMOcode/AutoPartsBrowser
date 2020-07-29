package com.ucmo.packages.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ucmo.packages.dao.CartRepository;
import com.ucmo.packages.model.Cart;
import com.ucmo.packages.model.Part;

@Controller
@RequestMapping(path="/cart")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {

	@Autowired
	private CartRepository cartRepo;
	
	@PostMapping(path="/add", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Cart addCart(@RequestBody Cart cart) {
		Cart newCart = new Cart(null, cart.getModelName(), cart.getPartName(), cart.getPartManufacturer(), cart.getPartPrice());
		return cartRepo.save(newCart);
	}
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<Cart> getAllCarts() {
		System.out.println("[Getting all cart items...]");
		return cartRepo.findAll();
	}
	
	@DeleteMapping("/delete/{id}")
	@ResponseBody
	public void delete(@PathVariable int  id) {
		System.out.println("Called delete");
		cartRepo.deleteById(id);
	}
	
}
