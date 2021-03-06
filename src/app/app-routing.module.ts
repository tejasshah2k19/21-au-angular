import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LoginComponent } from './login/login.component';
import { LoginComponent as Login } from './components/login/login.component';

import { ReactiveSignupFormComponent } from './reactive-signup-form/reactive-signup-form.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { LoginGuard } from './guard/login.guard';
import { UserComponent } from './components/user/user.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';

const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "calc", component: CalcComponent },
  { path: "reactive-signup", component: ReactiveSignupFormComponent },
  { path: "add-product", component: AddProductComponent },
  { path: "list-product", component: ListProductComponent },
  { path: "edit-product/:productId", component: EditProductComponent },
  { path: "ecom-signup", component: AddUserComponent },
  { path: "ecom-login", component: Login },
  {
    path: "user", component: UserComponent, children:
      [
        { path: "products", component: ProductsComponent },
        { path: "mycart", component: MyCartComponent },
      ],
    canActivate: [LoginGuard]
  },
  {path:"pipe",component:PipeDemoComponent},
  {path:"attributebind",component:AttributeBindingComponent}
  // {path:"edituser/:userId",component:EditUserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
