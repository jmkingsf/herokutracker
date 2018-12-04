import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-workout-finished",
  templateUrl: "./workout-finished.component.html",
  styleUrls: ["./workout-finished.component.css"]
})
export class WorkoutFinishedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  returnHome() {
    this.router.navigate(["/"]);
  }
}
