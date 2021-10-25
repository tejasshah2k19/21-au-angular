import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { LoginComponent } from './login/login.component';
import { ReactiveSignupFormComponent } from './reactive-signup-form/reactive-signup-form.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"calc",component:CalcComponent},
  {path:"reactive-signup",component:ReactiveSignupFormComponent}
  // {path:"edituser/:userId",component:EditUserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
