import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FacultyEvaluationComponent } from './faculty-evaluation/faculty-evaluation.component';
import { FacultyEvaluationFormComponent } from './faculty-evaluation-form/faculty-evaluation-form.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'todolist', component: TodoListComponent },
  { path: 'faculty-evaluation', component: FacultyEvaluationComponent },
  { path: 'faculty-evaluation-form/:id', component: FacultyEvaluationFormComponent }
];
