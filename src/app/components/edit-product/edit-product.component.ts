import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }



  product: Product = { productId: 0, price: 0, productName: "",name:"" }
  ngOnInit(): void {
    this.product.productId = this.activatedRoute.snapshot.params.productId
    // this.productService.products.filter(product=>product.productId)
    let index = this.productService.products.findIndex(product => product.productId == this.product.productId)
    this.product = this.productService.products[index]

  }
  updateProduct(){
    //
  }
}
