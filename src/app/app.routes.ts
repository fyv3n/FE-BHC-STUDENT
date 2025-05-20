import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClassDashboardComponent } from './class-dashboard/class-dashboard.component';
import { FormPageComponent } from './form-page/form-page.component';


export const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'class-dashboard', component: ClassDashboardComponent },
  { path: 'form-page', component: FormPageComponent },
];
