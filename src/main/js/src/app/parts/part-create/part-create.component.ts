import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Model } from '../../models/model.model';
import { PartService } from '../../services/part/part.service';

@Component({
  selector: 'app-part-create',
  templateUrl: './part-create.component.html',
  styleUrls: ['./part-create.component.css']
})
export class PartCreateComponent implements OnInit {
  models: Model[];

  constructor(private partService: PartService) { }

  ngOnInit(): void {
    this.partService.getAllModels().subscribe(data => {
      this.models = data;
    });
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }

}
