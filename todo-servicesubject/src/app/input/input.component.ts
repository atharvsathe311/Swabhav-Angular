import { Component, EventEmitter, Output } from '@angular/core';
import { TaskObject } from '../services/todoservice.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  counter = 1;
  taskName !: string;
  taskDescription!: string;
  taskObject!: TaskObject;

  @Output() taskNameEvent = new EventEmitter<TaskObject>();
  onSubmit(event: Event) {

    event.preventDefault();
    this.taskObject = {
      'id': this.counter,
      'taskName': this.taskName,
      'taskDescription': this.taskDescription,
      'taskStatus': false
    }
    this.taskNameEvent.emit(this.taskObject);
    this.counter++;
    this.taskName = "";
    this.taskDescription = "";
  }

}
