import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient : HttpClient) { }

  addToCart(cart:any):Observable<any>{
    return this.httpClient.get(environment.api_url+"addtocart/"+cart.authToken+"/"+cart.productId)
  }

  myCart(authToken:string):Observable<any>{
    return this.httpClient.get(environment.api_url+"carts/"+authToken)
  }
}
