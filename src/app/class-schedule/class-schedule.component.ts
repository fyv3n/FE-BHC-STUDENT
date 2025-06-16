import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { MockdataComponent, ClassSchedule } from '../mockdata/mockdata.component';

@Component({
  selector: 'app-class-schedule',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
  ],
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.css']
})
export class ClassScheduleComponent implements OnInit {
  private mockData = new MockdataComponent();
  
  get classList(): ClassSchedule[] {
    return this.mockData.classList;
  }

  get days(): string[] {
    return this.mockData.days;
  }

  get timeSlots(): string[] {
    return this.mockData.timeSlots;
  }

  get weekDays(): string[] {
    return this.mockData.weekDays;
  }

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
