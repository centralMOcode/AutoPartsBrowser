package com.ucmo.packages.dto;

public class ModelPartDto {

	private Integer modelId;
	private String modelName;
	private Integer modelYear;
	private Integer partId;
	private String partName;
	private String partManufacturer;
	private Double partPrice;
	
	
	
	public ModelPartDto(Integer modelId, String modelName, Integer modelYear, Integer partId, String partName,
			String partManufacturer, Double partPrice) {
		super();
		this.modelId = modelId;
		this.modelName = modelName;
		this.modelYear = modelYear;
		this.partId = partId;
		this.partName = partName;
		this.partManufacturer = partManufacturer;
		this.partPrice = partPrice;
	}

	public Integer getModelId() {
		return modelId;
	}
	
	public void setModelId(Integer modelId) {
		this.modelId = modelId;
	}
	
	public String getModelName() {
		return modelName;
	}
	
	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
	
	public Integer getModelYear() {
		return modelYear;
	}
	
	public void setModelYear(Integer modelYear) {
		this.modelYear = modelYear;
	}
	
	public Integer getPartId() {
		return partId;
	}
	
	public void setPartId(Integer partId) {
		this.partId = partId;
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
	
	public void setPartPrice(Double partPrice) {
		this.partPrice = partPrice;
	}
	
	@Override
	public String toString() {
		return "ModelPartDto [modelId=" + modelId + ", modelName=" + modelName + ", modelYear=" + modelYear
				+ ", partId=" + partId + ", partName=" + partName + ", partManufacturer=" + partManufacturer
				+ ", partPrice=" + partPrice + "]";
	}
	
	
	
}
