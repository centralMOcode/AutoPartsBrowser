import { Component, OnInit } from '@angular/core';

import { PartService } from '../../services/part/part.service';
import { Part } from 'src/app/models/part.model';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {

  parts: Array<Part>;
  page = 1;
  pageSize = 5;

  constructor(private partService: PartService) { }

  ngOnInit(): void {
    this.partService.getAll().subscribe(data => {
      this.parts = data;
    });
  }
}
