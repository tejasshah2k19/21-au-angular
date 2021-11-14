import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interface/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.myCart()
  }

  myCart() {
    let carts: Array<Cart> = []
    let productIds = []
    let authToken = localStorage.getItem("authToken") as string;
    this.cartService.myCart(authToken).subscribe(resp => {
      if (resp.status == 200) {
        carts = resp.data

         productIds = carts.map(d => d.productId) ;

      }
      // 


    })
  }

}
