import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyEvalComponent } from './faculty-eval.component';

describe('FacultyEvalComponent', () => {
  let component: FacultyEvalComponent;
  let fixture: ComponentFixture<FacultyEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyEvalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
