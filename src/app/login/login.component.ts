import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string = ""
  password: string = ""
  constructor(private tsService: ToastrService) {

    console.log("LoginComponent cosntructor....");

  }

  ngOnInit(): void {
    console.log(localStorage.getItem("users"));

  }
  authenticate() {
    let users = JSON.parse(localStorage.getItem("users") || "")
    let isLogin = false
    for (let i = 0; i < users.length; i++) {

      if (users[i].email == this.email && users[i].password == this.password) {
        isLogin = true
        break
      }
    }

    if (isLogin) {
      //alert("done");
      this.tsService.success("login done", "", {
        positionClass: 'toast-bottom-right',
        timeOut: 3000
      })
    } else {
      //  alert("invalid credentials...")
      this.tsService.error("login done", "", {
        positionClass: 'toast-bottom-right',
        timeOut: 3000
      })
    }
  }
}
