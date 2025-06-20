import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { MockdataComponent, Activity } from '../mockdata/mockdata.component';

@Component({
  selector: 'app-activity-details',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  providers: [MockdataComponent],
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  activity: Activity | undefined;
  newComment = '';
  uploadedFiles: { name: string, status: 'uploaded' | 'pending' }[] = [];
  studentName = 'Student name';
  sidebarOpen = false;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private mockData = inject(MockdataComponent);

  ngOnInit() {
    this.route.params.subscribe(params => {
      const activityId = params['id'];
      this.activity = this.mockData.activities.find(a => a.id === activityId);
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

  editUploadedFiles() {
    // Implement file edit functionality
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (file) {
      this.uploadedFiles.push({
        name: file.name,
        status: 'uploaded'
      });
    }
  }

  submitComment() {
    if (this.newComment.trim()) {
      // Implement comment submission
      this.newComment = '';
    }
  }

  facultyEvaluation(): void {
    this.router.navigate(['/faculty-evaluation']);
  }
}