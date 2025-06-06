import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDashboardComponent } from './class-dashboard.component';

describe('ClassDashboardComponent', () => {
  let component: ClassDashboardComponent;
  let fixture: ComponentFixture<ClassDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
