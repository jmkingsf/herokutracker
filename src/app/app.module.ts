import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WorkoutchartComponent } from './workoutchart/workoutchart.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsComponent } from './workouts/workouts.component';
import { SearchComponent } from './search/search.component';
import { WorkoutPreviewComponent } from './workout-preview/workout-preview.component';
import { CustomWorkoutComponent } from './custom-workout/custom-workout.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutExerciseComponent } from './workout-exercise/workout-exercise.component';
import { WorkoutFinishedComponent } from './workout-finished/workout-finished.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { CommonModule }   from '@angular/common';
import { FilterPipe } from './filter.pipe';
const appRoutes: Routes = [
  {path: 'workouts', component: WorkoutsComponent},
  {path: '', component: HomepageComponent},
  {path: 'search', component: SearchComponent},
  {path: 'workoutdetail', component: WorkoutDetailComponent},
  {path: 'workoutexercise/:id', component: WorkoutExerciseComponent },
  {path: 'custom-workout', component: CustomWorkoutComponent},
  {path: 'workout-preview', component: WorkoutPreviewComponent},
  {path: 'workoutfinished', component: WorkoutFinishedComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    WorkoutchartComponent,
    WorkoutsComponent,
    SearchComponent,
    WorkoutDetailComponent,
    WorkoutExerciseComponent,
    WorkoutFinishedComponent,
    CustomWorkoutComponent,
    WorkoutPreviewComponent,
    FilterPipe
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
