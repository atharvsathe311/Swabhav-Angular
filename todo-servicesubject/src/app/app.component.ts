import { Component, OnInit } from '@angular/core';
import { TaskObject, TodoserviceService } from './services/todoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private todoService:TodoserviceService ){}

  newTaskNameEvent(event: TaskObject) {
    this.todoService.newTaskNameEvent(event);
  }


  
}
