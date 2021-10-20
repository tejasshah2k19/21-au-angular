import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName: String = ""
  email: String = ""
  password: String = ""


  users: Array<any>
  constructor() {
    this.users = []
    console.log("signup component constructor");
    //

  }

  ngOnInit(): void {

    //api -> user -> db -> data 
    console.log("signup component ngOnInit");
    //
  }

  printData() {
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
    let user = {firstName:this.firstName,email:this.email,password:this.password}
    this.users.push(user); 
    console.log(this.users);
    localStorage.setItem("users",JSON.stringify(this.users))
    
  }

}