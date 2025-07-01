import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MockdataComponent,Teacher } from '../../components/mockdata/mockdata.component';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../components/icon/icon.component';
import { EvalCaptureService } from '../../service/eval.capture.service';

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
  private evalCaptureService = inject(EvalCaptureService);


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

    const formData: any = {
      facultyId: this.faculty.id,
      facultyName: this.faculty.name,
      timestamp: new Date().toISOString(),
      responses: {},
      comments: {
        continue: (document.getElementById('continueInput') as HTMLTextAreaElement)?.value || '',
        stop: (document.getElementById('stopInput') as HTMLTextAreaElement)?.value || ''
      }
    };

    const questionNames = [
      'qA1', 'qA2', 'qA3', 'qA4', 'qA5', 'qA6', 'qA7', 'qA8',
      'qB1', 'qB2', 'qB3', 'qB4', 'qB5', 'qB6',
      'qC1', 'qC2', 'qC3', 'qC4', 'qC5', 'qC6'
    ];

    for (const name of questionNames) {
      const selected = (document.querySelector(`input[name="${name}"]:checked`) as HTMLInputElement);
      formData.responses[name] = selected?.value || null;
    }
    
    // Send to capture service
    this.evalCaptureService.capture(formData);

    // Mark as evaluated in mock
    const todo = this.mockdataComponent.facultyEvaluationTodos.find(f => f.id === this.faculty!.id);
    if (todo) todo.evaluated = true;

    // Go back
    this.router.navigate(['/todolist']);
  }

}