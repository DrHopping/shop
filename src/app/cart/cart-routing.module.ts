import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { CartListComponent } from "./components/cart-list/cart-list.component";

const routes: Routes = [
    {
      path: '',
      component: CartListComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CartRoutingModule {
    static components = [CartComponent, CartListComponent, CartItemComponent];
  }