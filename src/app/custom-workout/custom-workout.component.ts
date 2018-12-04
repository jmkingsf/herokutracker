import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-workout',
  templateUrl: './custom-workout.component.html',
  styleUrls: ['./custom-workout.component.css']
})
export class CustomWorkoutComponent implements OnInit {
  workouts=[{}];
  constructor() {}

  ngOnInit() {}

  addWorkout() {
      var item = {}
      this.workouts.push(item);
    }
    removeWorkout(){
      if(this.workouts.length > 1)
      this.workouts.pop();
    }
}
