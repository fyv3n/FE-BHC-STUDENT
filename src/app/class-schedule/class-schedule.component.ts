import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

interface ClassSchedule {
  code: string;
  subject: string;
  schedule: string;
  room: string;
  day: string;
  startTime: string;
  endTime: string;
}

@Component({
  selector: 'app-class-schedule',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent
  ],
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.css']
})
export class ClassScheduleComponent implements OnInit {
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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/class-dashboard']);
  }

  getClassForTimeSlot(day: string, timeSlot: string): ClassSchedule | null {
    return this.classList.find(cls => {
      const startTime = this.parseTime(cls.startTime);
      const endTime = this.parseTime(cls.endTime);
      const slotTime = this.parseTime(timeSlot);
      return cls.day === day && slotTime >= startTime && slotTime < endTime;
    }) || null;
  }

  isClassStart(day: string, timeSlot: string): ClassSchedule | null {
    return this.classList.find(cls => {
      return cls.day === day && cls.startTime === timeSlot;
    }) || null;
  }

  getClassSpan(cls: ClassSchedule): number {
    const start = this.parseTime(cls.startTime);
    const end = this.parseTime(cls.endTime);
    return (end - start) / 60;
  }

  private parseTime(time: string): number {
    const [timeStr, period] = time.split(' ');
    const [hours, minutes] = timeStr.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    if (period === 'PM' && hours !== 12) totalMinutes += 12 * 60;
    if (period === 'AM' && hours === 12) totalMinutes -= 12 * 60;
    return totalMinutes;
  }

  getClassesForDay(day: string) {
    return this.classList
      .filter(cls => cls.day === day)
      .sort((a, b) => this.parseTime(a.startTime) - this.parseTime(b.startTime));
  }
}
