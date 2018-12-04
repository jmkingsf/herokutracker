import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/js/canvasjs.min.js';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			
    },
    backgroundColor: "#FFF8DC",
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Bench Press" },
          { y: 55, label: "Rows" },
          { y: 50, label: "Dead Lift" },
          { y: 10, label: "Pullups" },
        ]
      }]
    });
    chart.render();
  } 
}