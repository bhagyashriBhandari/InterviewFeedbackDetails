import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLoginComponent } from './my-login.component';
import { HttpClientModule } from '@angular/common/http';

describe('MyLoginComponent', () => {
  let component: MyLoginComponent;
  let fixture: ComponentFixture<MyLoginComponent>;
  http : HttpClientModule;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLoginComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

});
