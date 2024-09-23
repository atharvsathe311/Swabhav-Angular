import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component-demo';
  textVal = "Data from Parent"

  myArray = ["Atharv","Shubu","Prasad","Shantanu","Abhishek","Nana"];

  cricketers = [
    {"name": "Virat", "runs": 7547, "wickets": 0},
    {"name": "Rohit", "runs": 3543, "wickets": 0},
    {"name": "Bumrah", "runs": 0, "wickets": 120},
    {"name": "Jadeja", "runs": 2358, "wickets": 234},
    {"name": "KL Rahul", "runs": 2003, "wickets": 0}
];



onChildInput(event:string)
{
  this.title = event;
}

}
