import { Component, OnInit } from "@angular/core";
import { WorkoutGeneratorService } from "../workout-generator.service";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-workout-exercise",
  templateUrl: "./workout-exercise.component.html",
  styleUrls: ["./workout-exercise.component.css"]
})
export class WorkoutExerciseComponent implements OnInit {
  constructor(
    private workoutGenerator: WorkoutGeneratorService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  workouts = [];
  public selectedWorkout;
  public index = 0;

  ngOnInit() {
    this.selectedWorkout = this.route.snapshot.params["id"];
    this.workouts = this.workoutGenerator
      .GetWorkouts()
      .filter(workout => workout.id == this.selectedWorkout);
    console.log(this.selectedWorkout);
    console.log(this.workouts);
  }

  getEmbedURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + url
    );
  }
  getNext(workout) {
    if (this.index >= this.workouts.length) {
      this.index = 0;
      this.router.navigate(["/workoutfinished"]);
    } else {
      this.workouts[0].exercise[this.index].reps =
        workout.exercise[this.index].reps;

      //update weight
      this.workouts[0].exercise[this.index].weight =
        workout.exercise[this.index].weight;
      this.index++;
    }
  }

  skip() {
    this.getNext(this.workouts[0]);
  }
}
