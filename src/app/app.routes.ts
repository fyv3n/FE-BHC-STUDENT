import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClassDashboardComponent } from './class-dashboard/class-dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'class-dashboard', component: ClassDashboardComponent },
];
