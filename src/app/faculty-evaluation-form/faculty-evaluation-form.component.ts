import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MockdataComponent, Teacher } from '../mockdata/mockdata.component';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-faculty-evaluation-form',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, RouterModule, IconComponent],
  templateUrl: './faculty-evaluation-form.component.html',
  styleUrls: ['./faculty-evaluation-form.component.css']
})
export class FacultyEvaluationFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private mockdataComponent = inject(MockdataComponent);
  private router = inject(Router);

  faculty: Teacher | undefined;
  studentName: string = 'Student Name';
  sidebarOpen: boolean = false;
  currentDateTime: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    const facultyId = this.route.snapshot.paramMap.get('id');
    if (facultyId) {
      this.faculty = this.mockdataComponent.facultyList.find(f => f.id === facultyId);
    }

    // Update current time every second
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

  todolist(): void {
    this.router.navigate(['/todolist']);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
} 