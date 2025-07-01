import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EvalCaptureService {
  capture(data: any): void {
    console.log('Captured Evaluation:', data);

    //Store in localStorage (or print to console)
    const existing = JSON.parse(localStorage.getItem('facultyEvaluations') || '[]');
    existing.push(data);
    localStorage.setItem('facultyEvaluations', JSON.stringify(existing));

  }

  getAll(): any[] {
    return JSON.parse(localStorage.getItem('facultyEvaluations') || '[]');
  }
}
