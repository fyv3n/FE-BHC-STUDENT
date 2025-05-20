import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword = false;

  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onLogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['/class-dashboard']);
  }
}
