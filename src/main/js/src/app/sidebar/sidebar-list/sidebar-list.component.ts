import { Component, OnInit } from '@angular/core';

import { PartService } from '../../services/part/part.service';
import { Part } from '../../models/part.model';
import { Model } from '../../models/model.model';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent implements OnInit {
  parts: Part[];
  models: Model[];

  constructor(private partService: PartService) { }

  ngOnInit(): void {
    this.partService.getAllModels().subscribe(data => {
      this.models = data;
    });
  }
}
