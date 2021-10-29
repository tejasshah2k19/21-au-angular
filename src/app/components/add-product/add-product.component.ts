import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  title="Add Product"
  productId:number=0
  price:number=0
  productName:string=""
  constructor(private productService:ProductService,private router:Router) { }



  ngOnInit(): void {

    //productId => edit / no -> add 

    this.title="Update product"
  }

  saveProduct(){
    this.productId = parseInt((Math.random()* 1000000)+"")//121212
    let product:Product = {productId:this.productId,price:this.price,productName:this.productName}
    this.productService.products.push(product);    
    this.router.navigateByUrl("list-product")
  }
}


