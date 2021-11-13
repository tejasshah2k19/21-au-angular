import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = "http://healthy-me-rest-api.herokuapp.com/"
  constructor(private httpClient:HttpClient) { }

  //consume api --> Observable | Promise ==> sync async 
  //client --> HttpClient 
  saveUser(user:any):Observable<any>{
    return this.httpClient.post(this.url+"saveuser",user)
  }

  authenticate(user:any):Observable<any>{
    return this.httpClient.post(this.url+"authenticate",user)
  }


}
