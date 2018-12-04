import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutFinishedComponent } from './workout-finished.component';

describe('WorkoutFinishedComponent', () => {
  let component: WorkoutFinishedComponent;
  let fixture: ComponentFixture<WorkoutFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
