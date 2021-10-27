import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productService:ProductService) { }
  products:Array<Product> = [] 
  ngOnInit(): void { 
    this.products = this.productService.products; 
  }

  deleteProduct(productId:number){
    console.log("delete product Called...  "+productId);
    this.productService.products = this.productService.products.filter(product=>product.productId != productId)   
    this.products  = this.productService.products
  }
}
