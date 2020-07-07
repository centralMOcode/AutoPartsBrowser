import { Component, OnInit } from '@angular/core';

import { PartService } from '../services/part/part.service';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {

  parts: Array<any>;

  constructor(private partService: PartService) { }

  ngOnInit(): void {
    this.partService.getAll().subscribe(data => {
      this.parts = data;
    });
  }

}
