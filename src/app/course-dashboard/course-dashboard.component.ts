import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { MockdataComponent, ClassSchedule, Activity, Resource, Student, Teacher, Post } from '../mockdata/mockdata.component';

@Component({
  selector: 'app-class-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    IconComponent,
  ],
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css']
})
export class CourseDashboardComponent {
  studentName = 'Student name';
  classList: ClassSchedule[] = new MockdataComponent().classList;
  selectedClass: ClassSchedule | undefined;
  activeTab: 'classFeed' | 'activitiesResources' | 'studentList' = 'classFeed';
  
  // Get mock data
  mockData = new MockdataComponent();
  activities: Activity[] = this.mockData.activities;
  resources: Resource[] = this.mockData.resources;
  students: Student[] = this.mockData.students;
  teacher: Teacher = this.mockData.teacher;
  posts: Post[] = this.mockData.posts;

  newPostContent = '';
  activeCommentPostId: string | null = null;
  newCommentText = '';

  createPost() {
    if (!this.newPostContent.trim()) return;

    const newPost: Post = {
      id: (this.posts.length + 1).toString(),
      author: {
        name: this.studentName,
        role: 'student'
      },
      content: this.newPostContent,
      datePosted: new Date().toISOString(),
      likes: 0,
      comments: 0
    };

    this.posts.unshift(newPost);
    this.newPostContent = '';
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const classCode = params.get('code');
      if (classCode) {
        this.selectedClass = this.classList.find(cls => cls.code === classCode);
      }
    });
  }

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
    this.router.navigate(['/class-dashboard'])
  }

  classDashboard(): void {
    this.router.navigate(['/class-dashboard']);
  }

  classFeed(): void {
    this.router.navigate(['/class-feed']);
  }

  activitiesResources(): void {
    this.router.navigate(['/activities-resources'])
  }

  studentList(): void {
    this.router.navigate(['/student-list'])
  }

  setActiveTab(tab: string) {
    this.activeTab = tab as 'classFeed' | 'activitiesResources' | 'studentList';
  }

  getAttachmentIcon(type: string): string {
    switch (type.toLowerCase()) {
      case 'image':
        return 'image';
      case 'video':
        return 'film';
      case 'document':
        return 'file';
      default:
        return 'paperclip';
    }
  }

  toggleComments(postId: string) {
    this.activeCommentPostId = this.activeCommentPostId === postId ? null : postId;
    this.newCommentText = '';
  }

  addComment(postId: string) {
    if (!this.newCommentText.trim()) return;

    const post = this.posts.find(p => p.id === postId);
    if (post) {
      if (!post.commentsList) {
        post.commentsList = [];
      }
      
      post.commentsList.push({
        id: (post.commentsList.length + 1).toString(),
        author: {
          name: this.studentName,
          role: 'student'
        },
        content: this.newCommentText,
        datePosted: new Date().toISOString()
      });
      post.comments = post.commentsList.length;
      this.newCommentText = '';
    }
  }

  viewActivity(activityId: string) {
    this.router.navigate(['/activity', activityId]);
  }
}
