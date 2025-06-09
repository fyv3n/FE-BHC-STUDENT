import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-class-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DatePipe,
    IconComponent
  ],
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css']
})
export class CourseDashboardComponent {
  studentName = 'Student name';
//mock data
  classList = [
    {
      code: '123456',
      subject: 'CS Thesis Writing (LAB)',
      schedule: 'Wed 1:00 PM – 4:00 PM',
      room: 'Room #: 100'
    },

    {
      code: '234567',
      subject: 'Math 101',
      schedule: 'Mon 9:00 AM – 12:00 PM',
      room: 'Room #: 201'
    },
    {
      code: '345678',
      subject: 'Physics 201',
      schedule: 'Fri 2:00 PM – 5:00 PM',
      room: 'Room #: 305'
    },
    {
      code: '456789',
      subject: 'English Literature',
      schedule: 'Tue 10:00 AM – 1:00 PM',
      room: 'Room #: 402'
    },
    {
      code: '567890',
      subject: 'History 101',
      schedule: 'Thu 8:00 AM – 11:00 AM',
      room: 'Room #: 110'
    }
  ];

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

  classDashboard(): void {
    this.router.navigate(['/course-dashboard']);
  }
}
