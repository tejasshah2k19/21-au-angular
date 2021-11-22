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
    this.myCarts = new Map<number, Cart>()
  }

  myCarts: Map<number, Cart>
  ngOnInit(): void {
    this.myCart()
  }

  myCart() {
    this.myCarts = new Map<number, Cart>()
    let carts: Array<any> = []
    let productIds: Array<number> = []
    let authToken = localStorage.getItem("authToken") as string;
    this.cartService.myCart(authToken).subscribe(resp => {
      if (resp.status == 200) {
        carts = resp.data

        productIds = carts.map(d => d.productId);

        console.log(productIds);//1 2 2 3 1 

        for (let i = 0; i < productIds.length; i++) { // 11 12 11 
          this.productService.getProductById(productIds[i]).subscribe(resp => {//101

            if (this.myCarts.get(productIds[i])) {

              let x = this.myCarts.get(productIds[i]) as Cart
              x.qty = x.qty + 1
              x.cartId.push(carts[i].cartId);
              console.log(productIds[i] + " updated");

            } else {
              let cart: Cart = {
                cartId: [carts[i].cartId], name: resp.data.name, price: resp.data.price, productId: resp.data.productId, qty: 1, userId: -1
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
  removeQty(cartId: number) {

    console.log(cartId);
    let mc = this.myCarts
    this.cartService.removeCart(cartId).subscribe(resp => {
      if (resp.status == 200) {
        alert(resp.msg);



        this.myCarts.forEach(function (v, k,myCarts) {
          console.log(k); // 
          if (v.cartId.includes(cartId)) {
            if (v.cartId.length == 1) {
              myCarts.delete(k)
            } else {
              v.cartId.filter(id => id !== cartId);
              v.qty = v.qty - 1
            }
          }
          
        });
         console.log("after remove => ", this.myCarts);

      } else {
        alert(resp.msg);
      }
    }, err => {

    })
  }
}
