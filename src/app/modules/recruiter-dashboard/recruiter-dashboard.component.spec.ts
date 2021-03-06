import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterDashboardComponent } from './recruiter-dashboard.component';

describe('HodDashComponent', () => {
  let component: RecruiterDashboardComponent;
  let fixture: ComponentFixture<RecruiterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
