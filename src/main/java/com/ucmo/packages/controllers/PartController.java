package com.ucmo.packages.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ucmo.packages.dto.ModelPartDto;
import com.ucmo.packages.dao.ModelRepository;
import com.ucmo.packages.dao.PartRepository;
import com.ucmo.packages.model.Model;
import com.ucmo.packages.model.Part;
import com.ucmo.packages.service.JoinQueryService;

@Controller
@RequestMapping(path="/parts")
@CrossOrigin(origins = "http://localhost:4200")
public class PartController {
	
	@Autowired
	private PartRepository partRepo;
	
	@Autowired
	private ModelRepository modelRepo;
	
	@Autowired
	private JoinQueryService joinQueryService;
	
	@PostMapping(path="/add", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Part addPart(@RequestBody Part part) {
		Part newPart = new Part(part.getPartName(), part.getPartManufacturer(), part.getPrice());
		return partRepo.save(newPart);
	}
	
	/*@GetMapping(path="/all")
	public @ResponseBody Iterable<Part> getAllParts() {
		System.out.println("[Getting all parts...]");
		return partRepo.findAll();
	}*/
	
	@GetMapping(path="/all")
	public ResponseEntity<List<ModelPartDto>> getModelPartsJoin() {
		return new ResponseEntity<List<ModelPartDto>>(joinQueryService.getModelParts(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<List<ModelPartDto>> getModelPartsJoinByModelId(@PathVariable int id) {
		return new ResponseEntity<List<ModelPartDto>>(joinQueryService.getModelPartsByModelId(id), HttpStatus.OK);
	}
	
	@GetMapping(path="/models/all")
	public @ResponseBody Iterable<Model> getAllModels() {
		System.out.println("[Getting all models...]");
		return modelRepo.findAll();
	}
	
	/*@GetMapping("/{id}")
	@ResponseBody
	public Part getPartById(@PathVariable int id) {
		Optional<Part> matchPart = partRepo.findById(id);
		return matchPart.isPresent() ? matchPart.get() : null;
	}*/
	
    @GetMapping("/part/{partName}")
    @RequestMapping
    public List<Part> getPartByName(@PathVariable String name){
        return partRepo.findByNameContaining(name);
    }
	
	@DeleteMapping("/delete/{id}")
	@ResponseBody
	public void delete(@PathVariable int  id) {
		System.out.println("Called delete");
		partRepo.deleteById(id);
	}
}
