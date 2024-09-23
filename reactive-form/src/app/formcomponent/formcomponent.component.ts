import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrl: './formcomponent.component.css'
})


export class FormcomponentComponent implements OnInit {

  detailsForm !: FormGroup;

  ngOnInit(): void {

    this.detailsForm = new FormGroup(
      {
        fullName : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        email : new FormControl('', [Validators.required, Validators.email]),
        phoneNumber : new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
        dateOfBirth :new FormControl('', Validators.required),
        gender : new FormControl('', Validators.required),
        address : new FormControl('', Validators.required)
      }
    )
  }

  OnSubmit(){

    
    
  }

  asyncData$: Observable<string> = of('Hello from Observable!');
  today: Date = new Date();
  itemCount: number = 2;
  itemMapping: { [k: string]: string } = {
    '=0': 'No items',
    '=1': 'One item',
    'other': '# items'
  };
  gender: string = 'female';
  genderMapping: { [k: string]: string } = { 'male': 'He', 'female': 'She', 'other': 'They' };
  user = { name: 'John', age: 30, city: 'New York' };

}
