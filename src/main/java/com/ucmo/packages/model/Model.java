package com.ucmo.packages.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "model")
public class Model implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "name")
	private String name;

	@Column(name = "year")
	private Integer year;

	@ManyToMany(mappedBy = "model", fetch = FetchType.LAZY)
	private Set<Part> part = new HashSet<>();
	
	public Model() {}
	
	public Model(String name, Integer year) {
		this.name = name;
		this.year = year;
	}
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getModelName() {
		return name;
	}
	
	public void setModelName(String name) {
		this.name = name;
	}
	
	public Integer getYear() {
		return year;
	}
	
	public void setYear(Integer year) {
		this.year = year;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(id, name, year);
	}
	
	@Override
	public String toString() {
		return "Part{" +
				"Id=" + id +
				", Name='" + name + '\'' +
				", Year'" + year +'\'' +
				'}';
	}
}
