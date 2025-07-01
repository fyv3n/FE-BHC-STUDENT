import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MockdataComponent,Teacher } from '../../components/mockdata/mockdata.component';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../components/icon/icon.component';

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
  studentName = 'Student Name';
  sidebarOpen = false;
  currentDateTime = new Date();

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

  submitEvaluation(): void {
    if (!this.faculty) return;
    // Find and mark as evaluated in the mock To-Do list
    const todo = this.mockdataComponent.facultyEvaluationTodos.find(f => f.id === this.faculty!.id);
    if (todo) {
      todo.evaluated = true;
    }
    // Navigate back to To-Do list
    this.router.navigate(['/todolist']);
  }
}