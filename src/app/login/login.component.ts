import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('1000ms cubic-bezier(0.23, 1, 0.32, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ])
  ]
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
