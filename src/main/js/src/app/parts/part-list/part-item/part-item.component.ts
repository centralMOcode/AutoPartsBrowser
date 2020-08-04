import { Component, OnInit, ViewChild  } from '@angular/core';
import { PartService } from 'src/app/services/part/part.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Part} from '../../../models/part.model';
import { PartUpdateRequest } from '../../../models/partUpdateRequest.model';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { NullTemplateVisitor } from '@angular/compiler';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-part-item',
  templateUrl: './part-item.component.html',
  styleUrls: ['./part-item.component.css']
})
export class PartItemComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  parts: Part[] = [];
  request: PartUpdateRequest = {
    price: null
  };
  id: number;
  page = 1;
  pageSize = 5;
  showEdit = false;
  indexToEdit: number;
  searchSubStr: string;
  query = {
    searchString: ''
  } 

  constructor(private partService: PartService,
              private route: ActivatedRoute,
              private router: Router,
              private cartService: ShoppingCartService) { }

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

  deletePart(part) {
    console.log(part);
    return this.partService.deletePart(part.toString());
  }

  refresh() {
    window.location.reload();
  }

  onAddToCart(part) {
    console.log(part)
    this.cartService.addCartPart(part)
  }

  onShowEdit(index: number) {
    this.showEdit = true;
    this.indexToEdit = index;
  }

  onResetEditStatus() {
    this.showEdit = false;
  }

  onSubmit(form: NgForm) {
    console.log(form);

    var indices = [];
    this.query.searchString = this.searchForm.value;
    var str = JSON.stringify(this.query.searchString);

    for (var i = 0; i < str.length; i++) {
      if (str[i] === "\"") {
        indices.push(i);
      }
    }

    this.searchSubStr = str.substring(indices[1] + 2, str.length - 1);
    this.request.price = +this.searchSubStr;
    return this.partService.updatePart(this.indexToEdit.toString(), this.request);
  }
}
