import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { MockdataComponent } from '../mockdata/mockdata.component';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

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
  styleUrls: ['./class-dashboard.component.css'],
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
export class ClassDashboardComponent {
  mockData = inject(MockdataComponent);
  studentName = 'Student name';
  searchTerm = '';
  sidebarOpen = false;

  get filteredClasses() {
    if (!this.searchTerm.trim()) return this.mockData.classList;
    return this.mockData.classList.filter(cls =>
      cls.subject.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      cls.code.includes(this.searchTerm)
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
    this.router.navigate(['/class-schedule']);
  }

  todolist(): void {
    this.router.navigate(['/todolist']);
  }

  coursedashboard(code: string): void {
    this.router.navigate(['/course-dashboard', code])
  }
}
