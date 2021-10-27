import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    let p1:Product=  {productId:123,price:1234,productName:"iphone 12"}
    let p2:Product = {productId:456,price:5656,productName:"vivo 123"}
    this.products.push(p1)
    this.products.push(p2)
    


   }

  products:Array<Product>=[]
}
