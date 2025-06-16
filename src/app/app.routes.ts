import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClassDashboardComponent } from './class-dashboard/class-dashboard.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'class-dashboard', component: ClassDashboardComponent },
  { path: 'todolist', component: TodoListComponent },
  { path: 'class-schedule', component: ClassScheduleComponent },
  { path: 'course-dashboard/:code', component: CourseDashboardComponent },
  { path: 'activity/:id', component: ActivityDetailsComponent }
];
