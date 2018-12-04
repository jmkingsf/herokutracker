import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutExerciseReviewComponent } from './workout-exercise-review.component';

describe('WorkoutExerciseReviewComponent', () => {
  let component: WorkoutExerciseReviewComponent;
  let fixture: ComponentFixture<WorkoutExerciseReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutExerciseReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutExerciseReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
