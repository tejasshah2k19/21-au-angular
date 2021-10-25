import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
    console.log("UserService Constructor()");
    
  }

  users:Array<User>=[]//1 2 3 login logut signup 4  // refresh 


}
