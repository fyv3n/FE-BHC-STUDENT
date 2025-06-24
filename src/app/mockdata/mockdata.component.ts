import { Component } from '@angular/core';

// --- Interfaces ---
export interface Teacher {
  id: string;
  name: string;
  title: string;
  email: string;
  department: string;
  avatar?: string;
}

export interface FacultyTodo {
  id: string;
  name: string;
  evaluated: boolean;
}

@Component({
  selector: 'app-mockdata',
  standalone: true,
  imports: [],
  templateUrl: './mockdata.component.html',
  styleUrl: './mockdata.component.css'
})
export class MockdataComponent {
  // --- Faculty List ---
  private readonly _facultyList: Teacher[] = [
    { id: 'T001', name: 'Dr. Sarah Anderson', title: 'Associate Professor', email: 'sarah.anderson@university.edu', department: 'Computer Science Department' },
    { id: 'T002', name: 'Prof. Michael Lee', title: 'Professor', email: 'michael.lee@university.edu', department: 'Mathematics Department' },
    { id: 'T003', name: 'Dr. Emily Chen', title: 'Assistant Professor', email: 'emily.chen@university.edu', department: 'Physics Department' },
    { id: 'T004', name: 'Prof. David Kim', title: 'Lecturer', email: 'david.kim@university.edu', department: 'History Department' },
    { id: 'T005', name: 'Dr. Maria Garcia', title: 'Associate Professor', email: 'maria.garcia@university.edu', department: 'Biology Department' }
  ];
  get facultyList(): Teacher[] {
    return this._facultyList;
  }

  // --- Faculty Evaluation To-Do List ---
  facultyEvaluationTodos: FacultyTodo[] = [
    { id: 'T001', name: 'Dr. Sarah Anderson', evaluated: false },
    { id: 'T002', name: 'Prof. Michael Lee', evaluated: false },
    { id: 'T003', name: 'Dr. Emily Chen', evaluated: false },
    { id: 'T004', name: 'Prof. David Kim', evaluated: false },
    { id: 'T005', name: 'Dr. Maria Garcia', evaluated: false }
  ];
}
