import { Component, OnInit } from '@angular/core';
import { Apiproduct } from 'src/app/interface/apiproduct';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService,private cartService:CartService) { }

  count:number=0
  products: Array<Apiproduct> = []
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(resp => {
      if (resp.status == 200) {
        this.products = resp.data
      }
    })
  }


  addToCart(productId:number){
    console.log(productId);
    let authToken = localStorage.getItem("authToken")
    let cart = {"authToken":authToken,"productId":productId}
    this.cartService.addToCart(cart).subscribe(resp=>{
      if(resp.status == -1 ){
        alert(resp.msg)
      }else{
        alert(resp.msg)
      }
    })
    

  }
}
