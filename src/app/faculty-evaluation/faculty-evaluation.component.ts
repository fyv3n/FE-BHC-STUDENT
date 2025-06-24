import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { MockdataComponent, Teacher } from '../mockdata/mockdata.component';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-faculty-evaluation',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DatePipe,
    IconComponent,
    RouterModule
  ],
  templateUrl: './faculty-evaluation.component.html',
  styleUrls: ['./faculty-evaluation.component.css'],
  animations: [
    trigger('cardStagger', [
      transition(':enter', [
        query('.class-card', [
          style({ opacity: 0, transform: 'translateY(40px)' }),
          stagger(120, [
            animate('600ms cubic-bezier(0.23, 1, 0.32, 1)',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ], { optional: true })
      ])
    ]),
    trigger('fadeInUpCard', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('600ms cubic-bezier(0.23, 1, 0.32, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ])
  ]
})
export class FacultyEvaluationComponent {
  mockData = inject(MockdataComponent);
  studentName = 'Student name'; // Changed for faculty evaluation
  searchTerm = '';
  sidebarOpen = false;

  get filteredFaculty(): Teacher[] {
    if (!this.searchTerm.trim()) return this.mockData.facultyList;
    return this.mockData.facultyList.filter(faculty =>
      faculty.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      faculty.id.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  private router = inject(Router);

  get currentDateTime() {
    return new Date();
  }

  openSidebar() {
    this.sidebarOpen = true;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    this.router.navigate(['/login']);
  }

  forumPage(){
    this.router.navigate(['/form'])
  }

  viewSchedule(): void {
    this.viewEvaluationGuidelines();
  }

  todolist(): void {
    this.router.navigate(['/todolist']);
  }

  coursedashboard(code: string): void {
    this.evaluateFaculty(code);
  }

  evaluateFaculty(facultyId: string): void {
    console.log(`Navigating to evaluation for faculty ID: ${facultyId}`);
    this.router.navigate(['/faculty-evaluation-form', facultyId]);
  }

  viewEvaluationGuidelines(): void {
    console.log('Viewing evaluation guidelines');
  }

  // Returns true if the faculty has been evaluated (using mock data)
  isFacultyEvaluated(facultyId: string): boolean {
    const todo = this.mockData.facultyEvaluationTodos.find(f => f.id === facultyId);
    return !!todo && todo.evaluated;
  }
}