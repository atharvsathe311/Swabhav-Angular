import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  taskListParent: TaskObject[] = [];

  private todosSubject = new BehaviorSubject<TaskObject[]>(this.taskListParent);

  todoList$ = this.todosSubject.asObservable();

  newTaskNameEvent(taskName: TaskObject) {
    this.taskListParent = [...this.taskListParent, taskName];
    this.todosSubject.next(this.taskListParent);
  }

  deleteTask(event: number) {
    const taskIndex = this.taskListParent.findIndex(task => task.id === event);
    if (taskIndex != -1) {
      this.taskListParent.splice(taskIndex, 1);
      this.taskListParent = [...this.taskListParent];
      this.todosSubject.next(this.taskListParent);
    }

  }

  statusTask(event: number) {
    const task = this.taskListParent.find(task => task.id === event);
    if (task) {
      task.taskStatus = true;
      this.taskListParent = [...this.taskListParent];
      this.todosSubject.next(this.taskListParent);
    }
  }
}


export interface TaskObject {
  id: number,
  taskName: string,
  taskDescription: string,
  taskStatus: boolean
}