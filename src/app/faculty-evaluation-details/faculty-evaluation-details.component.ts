import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { MockdataComponent, Faculty } from '../mockdata/mockdata.component';

@Component({
  selector: 'app-faculty-evaluation-details',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  providers: [MockdataComponent],
  templateUrl: './faculty-evaluation-details.component.html',
  styleUrls: ['./faculty-evaluation-details.component.css']
})
export class FacultyEvaluationDetailsComponent implements OnInit {
  faculty: Faculty | undefined;
  studentName = 'Student name';
  sidebarOpen = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mockData: MockdataComponent
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const facultyId = params['id'];
      this.faculty = this.mockData.facultyList.find(f => f.id === facultyId);
    });
  }

  get currentDateTime() {
    return new Date();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  todolist() {
    this.router.navigate(['/todolist']);
  }

  classDashboard() {
    this.router.navigate(['/class-dashboard']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  goBack() {
    window.history.back();
  }

  // Add methods for evaluation form submission here
} 