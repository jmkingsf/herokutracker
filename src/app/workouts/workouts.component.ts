import { Component, OnInit } from "@angular/core";
import { WorkoutGeneratorService } from "../workout-generator.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-workouts",
  templateUrl: "./workouts.component.html",
  styleUrls: ["./workouts.component.css"]
})
export class WorkoutsComponent implements OnInit {
  constructor(
    private workoutGenerator: WorkoutGeneratorService,
    private router: Router
  ) {}

  workouts = []
  pinnedWorkouts = []
  workoutsOfInterest = []

  ngOnInit() {
    this.workouts = this.workoutGenerator.GetWorkouts();
    this.pinnedWorkouts = this.workouts.filter(workout => workout.Pinned == true);
    this.workoutsOfInterest = this.workouts.filter(workout => workout.InterestScore >= 20);
  }

  navigate(workout) {
    this.router.navigate(["/workoutexercise", workout.id]);
  }

  navigateToPreviewPage()
  {
    this.router.navigate(["/workout-preview"]);
  }
}
