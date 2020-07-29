package com.ucmo.packages.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "model_name")
	private String modelName;
	
	@Column(name = "part_name")
	private String partName;
	
	@Column(name = "part_manufacturer")
	private String partManufacturer;
	
	@Column(name = "price")
	private Double partPrice;

	public Cart() {
		
	}
	
	public Cart(Integer id, String modelName, String partName, String partManufacturer, Double price) {
		super();
		this.id = id;
		this.modelName = modelName;
		this.partName = partName;
		this.partManufacturer = partManufacturer;
		this.partPrice = price;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getPartName() {
		return partName;
	}

	public void setPartName(String partName) {
		this.partName = partName;
	}

	public String getPartManufacturer() {
		return partManufacturer;
	}

	public void setPartManufacturer(String partManufacturer) {
		this.partManufacturer = partManufacturer;
	}

	public Double getPartPrice() {
		return partPrice;
	}

	public void setPartPrice(Double price) {
		this.partPrice = price;
	}
	
	
}
