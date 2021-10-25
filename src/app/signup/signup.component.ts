import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName: String = ""
  email: String = ""
  password: String = ""
  user: User = { email: "", firstName: "", password: "" }

  users: Array<any>
  constructor(private userService: UserService, private tsService: ToastrService, private router: Router) {
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

    //bean --> get setters // interface 
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);

    let u = {firstName:this.firstName}
    
    //this.userService.users.push(u)  //email password firstName 


    this.user.firstName = this.firstName
    this.user.email = this.email
    this.user.password = this.password

    this.users.push(this.user);

    this.userService.users.push(this.user);

    console.log(this.users);
    localStorage.setItem("users", JSON.stringify(this.users))
    this.tsService.success("signup done", "", { timeOut: 3000 })
    setTimeout(() => {
      this.router.navigateByUrl("/login")
    }, 3000)

  }

}