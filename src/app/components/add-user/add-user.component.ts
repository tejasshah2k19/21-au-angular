import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  myForm: FormGroup
  constructor(private userService: UserService, private router: Router) {

    this.myForm = new FormGroup({
      email: new FormControl(),
      firstName: new FormControl(),
      password: new FormControl(),
      roleId: new FormControl(2)
    })

  }

  ngOnInit(): void {
  }
  saveUser() {
    console.log("save user => ");
    console.log(this.myForm.value);
    this.userService.saveUser(this.myForm.value).subscribe(resp => {
      // data 
      console.log("line 32");
      console.log(resp);
      //user:User //interface 
      // this.user = resp.data 
      // image --> angular --> base64 -> string --> spring --> 

      if (resp.status == 200)
        this.router.navigateByUrl("/ecom-login")
      else
        alert(resp.msg)

    }, err => {
      console.log(err);
    })
    console.log("line 33");


  }
}
