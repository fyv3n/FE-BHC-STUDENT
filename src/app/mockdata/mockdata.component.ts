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

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
}
