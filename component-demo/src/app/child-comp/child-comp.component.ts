import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent implements OnInit{

  @Input() inputData!:string
  @Input() inputData1!:Array<string>
  @Input() inputData2!:any
  inputString:string = ""
  inputString1:Array<string> = []
  inputString2:any

  childMessageString = "Hello From Child";
  @Output() childMessage = new EventEmitter<string>();

  SendText(){
    this.childMessage.emit(this.childMessageString)
  }


  ngOnInit(): void {
    this.inputString = this.inputData;
    this.inputString1 = this.inputData1;
    this.inputString2 = this.inputData2;
  }
  

}
