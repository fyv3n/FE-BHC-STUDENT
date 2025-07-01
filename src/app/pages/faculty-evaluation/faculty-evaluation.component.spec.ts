import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyEvaluationComponent } from './faculty-evaluation.component';

describe('FacultyEvaluationComponent', () => {
  let component: FacultyEvaluationComponent;
  let fixture: ComponentFixture<FacultyEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
