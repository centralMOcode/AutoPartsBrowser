import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Cart } from "../models/cart.model";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cart: Cart[] = [];
  total: number = 0;
  private changeSubscription: Subscription;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartService.getAll().subscribe(data => {
      this.cart = data;
      for (var i = 0; i < this.cart.length; i++){
        this.total += this.cart[i].partPrice;
      }
    });
  }

  onRemoveFromCart(index) {
    console.log(index);
    this.cartService.deleteCartPart(index);
  }

  refresh() {
    window.location.reload();
  }

}
