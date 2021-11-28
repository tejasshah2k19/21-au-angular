import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthBehaviourService {
  authToken : BehaviorSubject<string>
  constructor() { 

    this.authToken = new BehaviorSubject<string>("")
  }
}
