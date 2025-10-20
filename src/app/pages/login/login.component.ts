import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string | null = null;

  constructor(private router: Router) {}

  login() {
    // Minimal client-side demo behavior. Replace with real auth.
    if (!this.email || !this.password) {
      this.error = 'Please enter email and password.';
      return;
    }

    // Fake success: navigate to home
    this.error = null;
    this.router.navigate(['/']);
  }
}
