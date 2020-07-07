package com.ucmo.packages.controllers;

import java.util.List;
import java.util.Optional;

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

import com.ucmo.packages.dao.PartRepository;
import com.ucmo.packages.model.Part;

@Controller
@RequestMapping(path="/parts")
@CrossOrigin(origins = "http://localhost:4200")
public class PartController {
	
	@Autowired
	private PartRepository partRepo;
	
	@PostMapping(path="/add", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Part addPart(@RequestBody Part part) {
		Part newPart = new Part(part.getCarMake(), part.getCarModel(), part.getPartName(), part.getPartManufacturer(), part.getPrice());
		return partRepo.save(newPart);
	}
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<Part> getAllParts() {
		System.out.println("[Getting all parts...]");
		return partRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@ResponseBody
	public Part getPartById(@PathVariable int id) {
		Optional<Part> matchPart = partRepo.findById(id);
		return matchPart.isPresent() ? matchPart.get() : null;
	}
	
    @GetMapping("/model/{model}")
    @RequestMapping
    public List<Part> getCarModel(@PathVariable String model){
        return partRepo.findByCarModel(model);
    }
	
	@DeleteMapping("/{id}")
	@ResponseBody
	public void delete(@PathVariable int id) {
		partRepo.deleteById(id);
	}
}
