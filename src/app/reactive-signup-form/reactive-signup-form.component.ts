import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup-form',
  templateUrl: './reactive-signup-form.component.html',
  styleUrls: ['./reactive-signup-form.component.css']
})
export class ReactiveSignupFormComponent implements OnInit {

  myForm: FormGroup
  constructor() {

    this.myForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", Validators.required)
    })


  }

  ngOnInit(): void {


  }


  saveUser() {
    console.log("Form Data");
    console.log(this.myForm.value);
    console.log(this.myForm.valid); // true  | false 

  }
}
