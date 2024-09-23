import { Component, EventEmitter, Input, IterableDiffers, Output } from '@angular/core';

@Component({
  selector: 'app-display-comp',
  templateUrl: './display-comp.component.html',
  styleUrl: './display-comp.component.css'
})
export class DisplayCompComponent{

  @Input() taskList:Array<TaskObject> = [] ;

  private differ: IterableDiffers;

  constructor(private differs: IterableDiffers) {
    this.differ = differs;
  }

  ngDoCheck() {
    const changes = this.differ.find(this.taskList);
    if (changes) {
      this.filterTaskLists();
    }
  }

  @Output() taskDelete = new EventEmitter<number>();
  @Output() taskStatus = new EventEmitter<number>();

  OnDeleteClick(id:number){
    this.taskDelete.emit(id);
  }

  OnStatusClick(id:number){
    this.taskStatus.emit(id);
  }

  taskListParentTrue!:Array<TaskObject>
  taskListParentFalse!:Array<TaskObject>

  private filterTaskLists(): void {
    
    this.taskListParentTrue = this.taskList.filter(task => task.taskStatus);
    this.taskListParentFalse = this.taskList.filter(task => !task.taskStatus);
    
  }

}

interface TaskObject {
  id : number ,
  taskName :string,
  taskDescription:string,
  taskStatus : boolean
}