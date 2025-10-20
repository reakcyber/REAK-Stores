import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  private cartCount = new BehaviorSubject<number>(0);
  public cartCount$ = this.cartCount.asObservable();

  addToCart(product: Product) {
    const currentCart = this.cartItems.value;
    const existingItem = currentCart.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
      this.cartItems.next([...currentCart]);
    } else {
      this.cartItems.next([...currentCart, { product, quantity: 1 }]);
    }

    this.updateCartCount();
  }

  removeFromCart(productId: number) {
    const currentCart = this.cartItems.value.filter(
      item => item.product.id !== productId
    );
    this.cartItems.next(currentCart);
    this.updateCartCount();
  }

  updateQuantity(productId: number, quantity: number) {
    const currentCart = this.cartItems.value;
    const item = currentCart.find(item => item.product.id === productId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.cartItems.next([...currentCart]);
        this.updateCartCount();
      }
    }
  }

  clearCart() {
    this.cartItems.next([]);
    this.updateCartCount();
  }

  private updateCartCount() {
    const count = this.cartItems.value.reduce(
      (total, item) => total + item.quantity,
      0
    );
    this.cartCount.next(count);
  }

  getTotal(): number {
    return this.cartItems.value.reduce(
      (total, item) => total + (item.product.price * item.quantity),
      0
    );
  }
}
