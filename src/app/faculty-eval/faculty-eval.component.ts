import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { MockdataComponent } from '../mockdata/mockdata.component';

@Component({
  selector: 'app-faculty-eval',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DatePipe,
    IconComponent,
  ],
  templateUrl: './faculty-eval.component.html',
  styleUrls: ['./faculty-eval.component.css']
})
export class FacultyEvalComponent {
  private mockData = inject(MockdataComponent);
  private router = inject(Router);
  studentName = 'Student name';
  searchTerm = '';
  sidebarOpen = false;

  get filteredFaculty() {
    if (!this.searchTerm.trim()) return this.mockData.facultyList;
    return this.mockData.facultyList.filter(faculty =>
      faculty.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      faculty.id.includes(this.searchTerm)
    );
  }

  enterFacultyEvaluation(id: string) {
    this.router.navigate(['/faculty-evaluation-details', id]);
  }

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
    this.router.navigate(['/class-schedule']);
  }

  todolist(): void {
    this.router.navigate(['/todolist']);
  }

  facultyEval(): void {
    this.router.navigate(['/faculty-eval']);
  }
}