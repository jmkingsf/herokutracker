import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutchartComponent } from './workoutchart.component';

describe('WorkoutchartComponent', () => {
  let component: WorkoutchartComponent;
  let fixture: ComponentFixture<WorkoutchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
