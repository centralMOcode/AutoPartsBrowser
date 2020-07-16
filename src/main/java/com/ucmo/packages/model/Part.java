package com.ucmo.packages.model;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "part")
public class Part implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "manufacturer")
	private String manufacturer;
	
	@Column(name = "price")
	private Double price;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JoinTable(name = "model_part",
		joinColumns = {
				@JoinColumn(name = "part_id", referencedColumnName = "id",
						nullable = false, updatable = false)},
		inverseJoinColumns = {
				@JoinColumn(name = "model_id", referencedColumnName = "id",
						nullable = false, updatable = false)})
	
	private Set<Model> model = new HashSet<>();

	public Part() { }
	
	public Part(String name, String manufacturer, Double price) {
		this.name = name;
		this.manufacturer = manufacturer;
		this.price = price;
	}
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getPartName() {
		return name;
	}
	
	public void setPartName(String name) {
		this.name = name;
	}
	
	public String getPartManufacturer() {
		return manufacturer;
	}
	
	public void setPartManufacturer(String name) {
		this.manufacturer = name;
	}
	
	public Double getPrice() {
		return price;
	}
	
	public void setPrice(Double price) {
		this.price = price;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(id, name, manufacturer, price);
	}
	
	@Override
	public String toString() {
		return "Part{" +
				"Id=" + id +
				", Name='" + name + '\'' +
				", Manufacturer='" + manufacturer + '\'' +
				", Price'" + price +'\'' +
				'}';
	}
	
}