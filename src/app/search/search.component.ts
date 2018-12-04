import { Component, OnInit } from '@angular/core';
import {WorkoutGeneratorService} from '../workout-generator.service'
import { Router } from "@angular/router";


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public search:any = '';
  locked: any[] = [];
  constructor(private workoutGenerator: WorkoutGeneratorService, private router: Router) {

 }
 workouts = []

  ngOnInit() {
    this.workouts = this.workoutGenerator.GetPremadeWorkouts()
  }

  goMakeYourOwn()
  {
    this.router.navigate(["/custom-workout"]);
  }



}
