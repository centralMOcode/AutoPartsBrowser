import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PartService } from '../../services/part/part.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Part } from '../../models/part.model';

@Component({
  selector: 'app-part-search',
  templateUrl: './part-search.component.html',
  styleUrls: ['./part-search.component.css']
})
export class PartSearchComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  parts: Part[];
  search: Part[] = [];
  page = 1;
  pageSize = 5;
  searchSubStr: string;
  query = {
    searchString: ''
  }

  constructor(private partService: PartService,
              private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.partService.getAll().subscribe(data => {
      this.parts = data;
    });
  }

  onAddToCart(part) {
    console.log(part)
    this.cartService.addCartPart(part)
  }

  refresh() {
    window.location.reload();
  }

  onSubmit() {
    //Reg ex and populate search array
    this.search = [];
    this.query.searchString = this.searchForm.value;
    var str = JSON.stringify(this.query.searchString);
    var indices = [];

    for (var i = 0; i < str.length; i++) {
      if (str[i] === "\"") {
        indices.push(i);
      }
    }
    this.searchSubStr = str.substring(indices[2] + 1, indices[3]);
    console.log(this.searchSubStr);
    console.log(this.parts);

    for (var j = 0; j < this.parts.length; j++) {
      if (this.parts[j].partName.includes(this.searchSubStr) || this.parts[j].partManufacturer.includes(this.searchSubStr) || this.parts[j].modelName.includes(this.searchSubStr)){
        this.search.push(this.parts[j]);
      } else {
        console.log("no match");
      }
    }
  }

}
