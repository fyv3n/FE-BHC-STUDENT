import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { MockdataComponent } from '../mockdata/mockdata.component';

@Component({
  selector: 'app-class-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DatePipe,
    IconComponent,
  ],
  templateUrl: './class-dashboard.component.html',
  styleUrls: ['./class-dashboard.component.css']
})
export class ClassDashboardComponent {
  mockData = new MockdataComponent();
  studentName = 'Student name';
  searchTerm = '';
  
  get filteredClasses() {
    if (!this.searchTerm.trim()) return this.mockData.classList;
    return this.mockData.classList.filter(cls =>
      cls.subject.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      cls.code.includes(this.searchTerm)
    );
  }

  constructor(private router: Router) {}

  enterClass(code: string) {
    this.router.navigate(['/classroom', code]);
  }

  get currentDateTime() {
    return new Date();
  }

  sidebarOpen = false;

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

  coursedashboard(): void {
    this.router.navigate(['/course-dashboard'])
  }

}
