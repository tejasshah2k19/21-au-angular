import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"calc",component:CalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
