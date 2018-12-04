import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WorkoutGeneratorService {
  constructor() {}

  GetWorkouts() {
    return this.Workouts;
  }

  GetPremadeWorkouts(){
    return this.PremadeWorkouts;
  }

  GetWorkoutPreview(){
    return this.WorkoutPreview;
  }

  Workouts = [
    {
      id : 1,
      "Name" : "Back",
      "Pinned":true,
      "InterestScore": 20,
      "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor facilisis viverra. Vivamus eu consectetur leo. Proin iaculis, est vel vehicula bibendum, orci diam tempus nunc, eget imperdiet arcu erat quis tortor. Integer convallis fermentum orci vel mollis. Vivamus semper mattis arcu in tristique. Aenean vehicula facilisis lacinia. In hac habitasse platea dictumst.",
      "ImgDisPath" : "../../assets/img/back.jpeg",
      exercise: [
        {
          name: "First Exercise",
          lift: "Deadlifts",
          reps: "0",
          weight: "0",
          embed: "-4qRntuXBSc"
        },
        {
          name: "Second Exercise",
          lift: "Pull ups",
          reps: "0",
          weight: "0",
          embed: "vw5Xmu5CIew"
        }
      ]
    },
    {
      id : 2,
      "Name" : "Chest",
      "GUID" : "12341342",
      "Pinned":true,
      "InterestScore": 40,
      "Description" : "Nam imperdiet sem ut tincidunt dictum. Curabitur nec eros a felis sodales placerat at et sapien. Proin finibus lacinia nibh, a imperdiet nulla scelerisque id.",
      exercise: [
        {
          name: "First Exercise",
          lift: "Bench Press",
          reps: "20",
          weight: "400",
          embed: "gRVjAtPip0Y"
        },
        {
          name: "Second Exercise",
          lift: "Chest Flys",
          reps: "15",
          weight: "340",
          embed: "qRS3cn89gBE"
        }
      ]
    },
    {
      id : 3,
      "Name" : "Legs",
      "GUID" : "12341341",
      "Pinned":true,
      "InterestScore": 10,
      "Description": "Maecenas porttitor neque dui, quis accumsan ex volutpat vel. Nam eu eleifend tortor, vel faucibus mi. Nunc semper feugiat ligula, quis porttitor mauris dictum nec. Ut aliquam viverra elit, ut hendrerit enim aliquam id. Donec quis euismod mi, eget viverra velit. Morbi eget elit felis. Proin ut tempus dolor. Cras vitae consectetur ligula, sit amet tincidunt sem. Fusce euismod vel erat non pretium.",
      exercise: [
        {
          name: "First Exercise",
          lift: "Squats",
          reps: "0",
          weight: "0",
          embed: "Dy28eq2PjcM"
        },
        {
          name: "Second Exercise",
          lift: "Lunges",
          reps: "0",
          weight: "0",
          embed: "7pkeQFzJR9g"
        }
      ]
    },
    // {
    //   "Name" : "Abs"
    // },
    // {
    //   "Name" : "Deadlifts"
    // },
    // {
    //   "Name" : "Back"
    // },
    // {
    //   "Name" : "Shoulders"
    // },
    // {
    //   "Name" : "Biceps"
    // },
    // {
    //   "Name" : "Cardio"
    // }
  ]

  ExerciseCompleted = [
    {
      "WorkoutGuid" : "12341341",
      "CompletedDate" : "2018-12-01T13:37:27+00:00",
      "ExerciseDurations" : [
        "00:31",
        "00:45",
        "01:01"
      ]
    }
  ]

  WorkoutPreview = [
    {
      "name" : "Bench Press",
      "sets":1,
      "reps":20,
      "weight":400
    },
    {
      "name" : "Bench Press",
      "sets":2,
      "reps":15,
      "weight":340
    },
    {
      "name" : "Bench Press",
      "sets":3,
      "reps":12,
      "weight":600
    },
    {
      "name" : "Bench Press",
      "sets":4,
      "reps":20,
      "weight":400
    },
  
  ]

  PremadeWorkouts = [
    "Workout1",
    "Abs",
    "Deadlifts",
    "Back",
    "Shoulders",
    "Biceps",
    "Cardio",
  ]
}
