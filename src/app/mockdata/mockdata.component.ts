import { Component } from '@angular/core';

export interface ClassSchedule {
  code: string;
  subject: string;
  schedule: string;
  room: string;
  day: string;
  startTime: string;
  endTime: string;
}

export interface Activity {
  id: string;
  title: string;
  type: 'assignment' | 'exam' | 'quiz';
  dueDate: string;
  datePosted: string;
  status: 'ongoing' | 'completed' | 'upcoming';
  comments?: number;
  commentsList?: {
    id: string;
    author: {
      name: string;
      role: 'teacher' | 'student';
    };
    content: string;
    datePosted: string;
  }[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'document' | 'link' | 'video';
  datePosted: string;
  fileSize?: string;
}

export interface Student {
  id: string;
  name: string;
  studentNumber: string;
  email: string;
  avatar?: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  email: string;
  department: string;
  avatar?: string;
}

export interface Post {
  id: string;
  author: {
    name: string;
    avatar?: string;
    role: 'teacher' | 'student';
  };
  content: string;
  attachments?: {
    type: 'image' | 'video' | 'document';
    url: string;
    name: string;
  }[];
  datePosted: string;
  likes: number;
  comments: number;
  commentsList?: {
    id: string;
    author: {
      name: string;
      avatar?: string;
      role: 'teacher' | 'student';
    };
    content: string;
    datePosted: string;
  }[];
}

@Component({
  selector: 'app-mockdata',
  standalone: true,
  imports: [],
  templateUrl: './mockdata.component.html',
  styleUrl: './mockdata.component.css'
})
export class MockdataComponent {
  
  classList: ClassSchedule[] = [
    {
      code: '123456',
      subject: 'CS Thesis Writing (LAB)',
      schedule: 'Wed 1:00 PM – 4:00 PM',
      room: 'Room #: 100',
      day: 'Wednesday',
      startTime: '1:00 PM',
      endTime: '4:00 PM'
    },
    {
      code: '234567',
      subject: 'Math 101',
      schedule: 'Mon 9:00 AM – 12:00 PM',
      room: 'Room #: 201',
      day: 'Monday',
      startTime: '9:00 AM',
      endTime: '12:00 PM'
    },
    {
      code: '345678',
      subject: 'Physics 201',
      schedule: 'Fri 2:00 PM – 5:00 PM',
      room: 'Room #: 305',
      day: 'Friday',
      startTime: '2:00 PM',
      endTime: '5:00 PM'
    },
    {
      code: '456789',
      subject: 'English Literature',
      schedule: 'Tue 10:00 AM – 1:00 PM',
      room: 'Room #: 402',
      day: 'Tuesday',
      startTime: '10:00 AM',
      endTime: '1:00 PM'
    },
    {
      code: '567890',
      subject: 'History 101',
      schedule: 'Thu 8:00 AM – 11:00 AM',
      room: 'Room #: 110',
      day: 'Thursday',
      startTime: '8:00 AM',
      endTime: '11:00 AM'
    }
  ];

  activities: Activity[] = [
    {
      id: '1',
      title: 'Midterm Examination',
      type: 'exam',
      dueDate: '2024-03-15T14:00:00',
      datePosted: '2024-03-01T09:00:00',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'Assignment 1: System Analysis',
      type: 'assignment',
      dueDate: '2024-03-10T23:59:00',
      datePosted: '2024-03-01T10:00:00',
      status: 'ongoing'
    },
    {
      id: '3',
      title: 'Quiz 1: Introduction to Systems',
      type: 'quiz',
      dueDate: '2024-03-05T15:00:00',
      datePosted: '2024-03-01T11:00:00',
      status: 'completed'
    }
  ];

  resources: Resource[] = [
    {
      id: '1',
      title: 'CSP411 COURSE REQUIREMENT!',
      type: 'document',
      datePosted: '2024-02-02T10:00:00',
      fileSize: '2.5 MB'
    },
    {
      id: '2',
      title: 'Week 1: Introduction to Systems Development',
      type: 'document',
      datePosted: '2024-02-05T14:30:00',
      fileSize: '1.8 MB'
    },
    {
      id: '3',
      title: 'Tutorial: System Analysis Basics',
      type: 'video',
      datePosted: '2024-02-10T09:15:00'
    }
  ];

  students: Student[] = [
    {
      id: '1',
      name: 'John Doe',
      studentNumber: '2020-00001',
      email: 'john.doe@example.com'
    },
    {
      id: '2',
      name: 'Jane Smith',
      studentNumber: '2020-00002',
      email: 'jane.smith@example.com'
    },
    {
      id: '3',
      name: 'Bob Johnson',
      studentNumber: '2020-00003',
      email: 'bob.johnson@example.com'
    },
    {
      id: '4',
      name: 'Alice Brown',
      studentNumber: '2020-00004',
      email: 'alice.brown@example.com'
    },
    {
      id: '5',
      name: 'Charlie Wilson',
      studentNumber: '2020-00005',
      email: 'charlie.wilson@example.com'
    }
  ];

  teacher: Teacher = {
    id: 'T001',
    name: 'Dr. Sarah Anderson',
    title: 'Associate Professor',
    email: 'sarah.anderson@university.edu',
    department: 'Computer Science Department',
    avatar: undefined // You can add an avatar URL here if needed
  };

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  posts: Post[] = [
    {
      id: '1',
      author: {
        name: 'Dr. Sarah Anderson',
        role: 'teacher'
      },
      content: "Hello class! I've uploaded the course requirements for this semester. Please review them carefully and let me know if you have any questions.",
      attachments: [
        {
          type: 'document',
          url: '/assets/docs/course-requirements.pdf',
          name: 'CSP411 Course Requirements.pdf'
        }
      ],
      datePosted: '2024-02-02T10:00:00',
      likes: 15,
      comments: 3,
      commentsList: [
        {
          id: '1',
          author: {
            name: 'John Doe',
            role: 'student'
          },
          content: 'Thank you for sharing the requirements, professor! Looking forward to this semester.',
          datePosted: '2024-02-02T10:15:00'
        },
        {
          id: '2',
          author: {
            name: 'Jane Smith',
            role: 'student'
          },
          content: 'Quick question - for the final project, are we allowed to work in pairs?',
          datePosted: '2024-02-02T10:30:00'
        },
        {
          id: '3',
          author: {
            name: 'Dr. Sarah Anderson',
            role: 'teacher'
          },
          content: 'Yes, you can work in pairs for the final project. Please let me know your partner choices by next week.',
          datePosted: '2024-02-02T11:00:00'
        }
      ]
    },
    {
      id: '2',
      author: {
        name: 'John Doe',
        role: 'student'
      },
      content: 'Thank you for the detailed requirements, professor! Quick question about the final project deadline - will we have a grace period for submissions?',
      datePosted: '2024-02-02T11:30:00',
      likes: 2,
      comments: 1
    },
    {
      id: '3',
      author: {
        name: 'Dr. Sarah Anderson',
        role: 'teacher'
      },
      content: "Important announcement: Our midterm examination will be held next week. Here's the coverage and some review materials.",
      attachments: [
        {
          type: 'document',
          url: '/assets/docs/midterm-coverage.pdf',
          name: 'Midterm Exam Coverage.pdf'
        },
        {
          type: 'document',
          url: '/assets/docs/review-materials.pdf',
          name: 'Review Materials.pdf'
        }
      ],
      datePosted: '2024-03-01T09:00:00',
      likes: 20,
      comments: 5
    }
  ];
}
