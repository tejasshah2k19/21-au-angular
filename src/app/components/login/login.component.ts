import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthBehaviourService } from 'src/app/auth-behaviour.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private router:Router,private abs:AuthBehaviourService) { }

  email: string = ""
  password: string = ""
  
  ngOnInit(): void {
  }

  authenticate() {
    let user = { "email": this.email, "password": this.password }
  
    this.userService.authenticate(user).subscribe(resp => {
      console.log(resp);
      
      if (resp.status == 200) {
        localStorage.setItem("authToken",resp.data.authToken)
        alert("login done");
        this.abs.authToken.next(resp.data.authToken)
        this.router.navigateByUrl("/products")
      } else if (resp.status == -1) {
        alert(resp.msg)
      }
    })
  
  
  
    // mydata  = await function()     
    //mydata.next(value)
    //


   // 
  
  }


}
