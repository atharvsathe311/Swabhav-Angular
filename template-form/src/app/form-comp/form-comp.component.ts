import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrl: './form-comp.component.css'
})
export class FormCompComponent {

onSubmit(event :Event) {

  console.log(this.student);

}

student:IStudent = 
{
  email : "",
  password : "",
  education : "",
  gender : "Male"
}

degrees = ["BE/BTech","ME/MTech","BSc","MSc","BCom","MCom","BA","MA"]

}

interface IStudent {
  email : string ,
  password:string,
  education : string,
  gender :string
}
