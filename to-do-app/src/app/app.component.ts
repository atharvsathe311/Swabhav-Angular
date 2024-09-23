import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  taskListParent:Array<TaskObject> = [] ;

  newTaskNameEvent(taskName:TaskObject){   
    this.taskListParent.push(taskName);
  }

  deleteTask(event:number){
    const taskIndex = this.taskListParent.findIndex(task => task.id === event);
    console.log(taskIndex);
    
    if(taskIndex!=-1){
      this.taskListParent.splice(taskIndex,1);
    }
  }

  statusTask(event:number){
    const task = this.taskListParent.find(task => task.id === event);
    if (task) {
      task.taskStatus = true;
    }
  }

}

interface TaskObject {
  id : number ,
  taskName :string,
  taskDescription:string,
  taskStatus : boolean
}
