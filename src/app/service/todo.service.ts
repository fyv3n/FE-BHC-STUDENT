import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FacultyTodo } from '../components/mockdata/mockdata.component';

const MOCK_FACULTY_EVALUATION_TODOS: FacultyTodo[] = [
  { id: 'T001', name: 'Dr. Sarah Anderson', subject: 'Computer Science', evaluated: false },
  { id: 'T002', name: 'Prof. Michael Lee', subject: 'Mathematics', evaluated: false },
  { id: 'T003', name: 'Dr. Emily Chen', subject: 'Physics', evaluated: false },
  { id: 'T004', name: 'Prof. David Kim', subject: 'History', evaluated: false },
  { id: 'T005', name: 'Dr. Maria Garcia', subject: 'Biology', evaluated: false }
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}


  // API Fetch for Todos
  getFacultyEvaluationTodos(): Observable<FacultyTodo[]> {
    return this.http.get<FacultyTodo[]>('/api/faculty-evaluation-todos').pipe(
        catchError(error => {
            console.warn('API not available yet, using mockdata', error);
            return of(MOCK_FACULTY_EVALUATION_TODOS);
        })
    );
  }
}
