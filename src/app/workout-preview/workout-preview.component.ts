import { Component, OnInit } from '@angular/core';
import {WorkoutGeneratorService} from '../workout-generator.service'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './workout-preview.component.html',
  styleUrls: ['./workout-preview.component.css']
})
export class WorkoutPreviewComponent implements OnInit {
  public search:any = '';
      locked: any[] = [];
  constructor(private workoutGenerator: WorkoutGeneratorService) {

 }
workouts = []

  ngOnInit() {
    this.workouts = this.workoutGenerator.GetWorkoutPreview()
  }



}
