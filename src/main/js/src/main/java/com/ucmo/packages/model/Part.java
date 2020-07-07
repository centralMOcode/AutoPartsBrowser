package com.ucmo.packages.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Part {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer part_id;
	@Column
	private String carMake;
	@Column
	private String carModel;
	@Column
	private String partName;
	@Column
	private String partManufacturer;
	@Column
	private Double price;
	
	public Part() { }
	
	public Part(String car_make, String car_model, String part_name, String part_manufacturer, Double price) {
		this.carMake = car_make;
		this.carModel = car_model;
		this.partName = part_name;
		this.partManufacturer = part_manufacturer;
		this.price = price;
	}
	
	public Integer getId() {
		return part_id;
	}
	
	public void setId(Integer id) {
		this.part_id = id;
	}
	
	public String getCarMake() {
		return carMake;
	}
	
	public void setCarMake(String name) {
		this.carMake = name;
	}
	
	public String getCarModel() {
		return carModel;
	}
	
	public void setCarModel(String name) {
		this.carModel = name;
	}
	
	public String getPartName() {
		return partName;
	}
	
	public void setPartName(String name) {
		this.partName = name;
	}
	
	public String getPartManufacturer() {
		return partManufacturer;
	}
	
	public void setPartManufacturer(String name) {
		this.partManufacturer = name;
	}
	
	public Double getPrice() {
		return price;
	}
	
	public void setPrice(Double price) {
		this.price = price;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(part_id, carMake, carModel, partName, partManufacturer, price);
	}
	
	@Override
	public String toString() {
		return "Part{" +
				"Id=" + part_id +
				", partName='" + partName + '\'' +
				", partManufacturer='" + partManufacturer + '\'' +
				", partPrice'" + price +'\'' +
				", carMake='" + carMake + '\'' +
				", carModel='" + carModel + '\'' +
				'}';
	}
	
}