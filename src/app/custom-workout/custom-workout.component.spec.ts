import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWorkoutComponent } from './custom-workout.component';

describe('CustomWorkoutComponent', () => {
  let component: CustomWorkoutComponent;
  let fixture: ComponentFixture<CustomWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
