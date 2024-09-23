import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-comp',
  templateUrl: './input-comp.component.html',
  styleUrl: './input-comp.component.css'
})
export class InputCompComponent {
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

interface TaskObject {
  id: number,
  taskName: string,
  taskDescription: string,
  taskStatus: boolean
}
