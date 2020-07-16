package com.ucmo.packages.service;

import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

import com.ucmo.packages.dto.ModelPartDto;
import com.ucmo.packages.dao.ModelRepository;
import com.ucmo.packages.dao.PartRepository;

@Service
public class JoinQueryService {

	@Resource
	private ModelRepository modelRepo;
	
	@Resource
	private PartRepository partRepo;
	
	public List<ModelPartDto> getModelParts() {
		List<ModelPartDto> list = partRepo.fetchModelPartDataJoin();
		list.forEach(l -> System.out.println(l));
		return list;
	}
	
	public List<ModelPartDto> getModelPartsByModelId(Integer id) {
		List<ModelPartDto> list = partRepo.fetchModelPartDataByModelId(id);
		list.forEach(l -> System.out.println(l));
		return list;
	}
}
