import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerDashboardComponent } from './interviewer-dashboard.component';

describe('StaffDashComponent', () => {
  let component: InterviewerDashboardComponent;
  let fixture: ComponentFixture<InterviewerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
