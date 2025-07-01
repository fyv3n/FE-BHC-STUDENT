import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';
import { MockdataComponent, Teacher } from '../../components/mockdata/mockdata.component';

@Component({
  selector: 'app-faculty-evaluation-details',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  providers: [MockdataComponent],
  templateUrl: './faculty-evaluation-details.component.html',
  styleUrls: ['./faculty-evaluation-details.component.css']
})
export class FacultyEvaluationDetailsComponent implements OnInit {
  faculty: Teacher | undefined;
  studentName = 'Student name';
  sidebarOpen = false;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private mockData = inject(MockdataComponent);

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

  facultyEval() {
    this.router.navigate(['/faculty-evaluation']);
  }

  // Add methods for evaluation form submission here
}