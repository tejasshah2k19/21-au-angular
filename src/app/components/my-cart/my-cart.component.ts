import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interface/cart';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor(private cartService: CartService, private productService: ProductService) {
    this.myCarts = new Map()
  }

  myCarts: Map<number, Cart>
  ngOnInit(): void {
    this.myCart()
  }

  myCart() {
    let carts: Array<Cart> = []
    let productIds: Array<number> = []
    let authToken = localStorage.getItem("authToken") as string;
    this.cartService.myCart(authToken).subscribe(resp => {
      if (resp.status == 200) {
        carts = resp.data

        productIds = carts.map(d => d.productId);
        console.log(productIds);//1 2 2 3 1 

        for (let i = 0; i < productIds.length; i++) {
          this.productService.getProductById(productIds[i]).subscribe(resp => {//101

            if (this.myCarts.get(productIds[i])) {

              let x = this.myCarts.get(productIds[i]) as Cart
              x.qty = x.qty + 1

              console.log(productIds[i] + " updated");

            } else {
              let cart: Cart = {
                cartId: 0, name: resp.data.name, price: resp.data.price, productId: resp.data.productId, qty: 1, userId: -1
              }
              this.myCarts.set(productIds[i], cart)
              console.log(productIds[i] + " added ");

            }
            console.log(this.myCarts);


          })

        }


      }
      // 


    })
  }

}
