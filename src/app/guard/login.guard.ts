import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthBehaviourService } from '../auth-behaviour.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

 

  constructor(private route:Router,private authBehaviourService:AuthBehaviourService){
   
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("LoginGuard called....");
      let authToken1 = localStorage.getItem("authToken") 
      // if(authToken1){
      //   return true
      // }
      if(this.authBehaviourService.authToken.getValue().trim().length != 0){
        return true
      }

      if(this.authBehaviourService.authToken.getValue() == "")     
      alert("Please Login")
      this.route.navigateByUrl("/ecom-login")
      return false;
  }
  
}
