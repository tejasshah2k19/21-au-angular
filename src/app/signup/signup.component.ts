import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  firstName:String=""
  email:String=""
  password:String=""
  
  
  user:Array<any> 
  constructor() { 
    this.user = [] 
    console.log("signup component constructor");
    //

  }

  ngOnInit(): void {

    //api -> user -> db -> data 
    console.log("signup component ngOnInit");
    //
  }

  printData(){
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);   
  }

}
