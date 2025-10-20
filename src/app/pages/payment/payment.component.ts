import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  fullName: string = '';
  cardNumber: string = '';
  expiry: string = '';
  cvv: string = '';

  constructor(public cartService: CartService, private router: Router) {}

  submitPayment() {
    if (!this.fullName || !this.cardNumber) {
      alert('Please fill in required payment details');
      return;
    }

    alert('Payment successful! Thank you for your purchase.');
    this.cartService.clearCart();
    // navigate to home page after successful payment
    this.router.navigate(['/']);
  }
}
