import { Component, OnInit } from '@angular/core';
import { PartService } from 'src/app/services/part/part.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Part} from '../../../models/part.model';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-part-item',
  templateUrl: './part-item.component.html',
  styleUrls: ['./part-item.component.css']
})
export class PartItemComponent implements OnInit {
  parts: Part[] = [];
  id: number;
  page = 1;
  pageSize = 5;

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
}
