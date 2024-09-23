import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { TaskObject, TodoserviceService } from '../services/todoservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  todoList!: TaskObject[];
  constructor(private todoService: TodoserviceService) { }

  ngOnInit(): void {
    this.todoService.todoList$.subscribe((taskList) => {
      this.todoList = taskList;
      this.filterTaskLists()
    })
  }

  OnStatusClick(id: number) {
    this.todoService.statusTask(id);
  }

  OnDeleteClick(id: number) {
    this.todoService.deleteTask(id);
  }

  taskListParentTrue!: Array<TaskObject>
  taskListParentFalse!: Array<TaskObject>

  private filterTaskLists(): void {

    this.taskListParentTrue = this.todoList.filter(task => task.taskStatus);
    this.taskListParentFalse = this.todoList.filter(task => !task.taskStatus);

  }





}
