import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Model } from '../../models/model.model';
import { PartCreateRequest } from '../../models/partCreateRequest.model';
import { PartService } from '../../services/part/part.service';

@Component({
  selector: 'app-part-create',
  templateUrl: './part-create.component.html',
  styleUrls: ['./part-create.component.css']
})
export class PartCreateComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  models: Model[];
  //Initialize request entity
  partCreateRequest: PartCreateRequest = {
    modelSelect: null,
    partName: '',
    partManufacturer: '',
    price: null
  };
  query = {
    searchString: ''
  } 

  constructor(private partService: PartService) { }

  ngOnInit(): void {
    this.partService.getAllModels().subscribe(data => {
      this.models = data;
    });
  }

  onSubmit() {
    this.partCreateRequest = {
      modelSelect: this.searchForm.value.modelSelect,
      partName: this.searchForm.value.partName,
      partManufacturer: this.searchForm.value.partManufacturer,
      price: this.searchForm.value.price
    }

    window.alert("Part created!");
    return this.partService.createPart(this.partCreateRequest);
  }

}
