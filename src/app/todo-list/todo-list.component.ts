import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { FormsModule } from '@angular/forms';
import { MockdataComponent, Activity } from '../mockdata/mockdata.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    IconComponent,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  studentName = 'Student Name'; // Replace with actual student name
  sidebarOpen = false;
  currentDateTime: Date = new Date();
  activities: Activity[] = [];
  private router = inject(Router);
  private mock = inject(MockdataComponent);

  ngOnInit(): void {
    this.activities = this.mock.activities;
    // Update time every second
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  classes(): void {
    this.router.navigate(['/class-dashboard']);
  }

  logout(): void {
    // Add logout logic here
    this.router.navigate(['/login']);
  }

  goToActivityDetails(activity: Activity): void {
    this.router.navigate(['/activity', activity.id]);
  }
}
