import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cart: Cart[] = [];
  total: number = 0;
  mySubscription: any;

  constructor(private cartService: ShoppingCartService) { 

  }

  ngOnInit(): void {
    this.cartService.getAll().subscribe(data => {
      this.cart = data;
      this.countCart();
    });
  }

  countCart() {
    this.total = this.cart.length;
    console.log(this.total);
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}
