import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myBool:boolean= true;

  myArray = ["Atharv","Shubu","Prasad","Shantanu","Abhishek","Nana"];

  cricketers = [
    {"name": "Virat", "runs": 7547, "wickets": 0},
    {"name": "Rohit", "runs": 3543, "wickets": 0},
    {"name": "Bumrah", "runs": 0, "wickets": 120},
    {"name": "Jadeja", "runs": 2358, "wickets": 234},
    {"name": "KL Rahul", "runs": 2003, "wickets": 0}
]

OnClick(){
  if(this.isConditionTrue){
    this.isConditionTrue = false
    return
  }
  this.isConditionTrue =true;
}

isConditionTrue :boolean = false;

textColor = "green" ; 
bgColor = "blue";


myText:string ="";

}
