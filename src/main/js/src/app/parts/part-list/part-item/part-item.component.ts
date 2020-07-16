import { Component, OnInit } from '@angular/core';
import { PartService } from 'src/app/services/part/part.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Part} from '../../../models/part.model';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-part-item',
  templateUrl: './part-item.component.html',
  styleUrls: ['./part-item.component.css']
})
export class PartItemComponent implements OnInit {
  parts: Part[];
  id: number;

  constructor(private partService: PartService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.partService.getPartsByModelId(this.id).subscribe(res => {
          this.parts = res;
        });
      }
    );
  }

  log() {
    //console.log(this.parts[partName]);
  }

}
