import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Apiproduct } from '../interface/apiproduct';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private htppClient: HttpClient) {
    let p1: Product = { productId: 123, price: 1234, productName: "iphone 12",name:"iphone 12" }
    let p2: Product = { productId: 456, price: 5656, productName: "vivo 123",name:"vivo 123" }
    this.products.push(p1)
    this.products.push(p2)
 
  }
  url: string = ""
  products: Array<Product> = []


  getAllProducts(): Observable<any> {
    return this.htppClient.get(environment.api_url + "products")
  }

  getAllProducts2():Promise<any>{
    //return this.htppClient.get(environment.api_url+"products").toPromise()
    return new Promise((res,rej)=>{
       this.htppClient.get(environment.api_url+"products").subscribe(resp=>{
        res(resp)  
       },err=>{
         rej(err)
       })
    })

  }
  getProductById(productId:number):Observable<any>{
    return this.htppClient.get(environment.api_url+"products/"+productId)
  }

}
