import { Component, OnInit, Input } from '@angular/core';
import { Part } from 'src/app/models/part.model';
import { Model } from '../../models/model.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent implements OnInit {
  @Input() model: Model;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  log() {
    console.log(this.model.id);
  }
}
