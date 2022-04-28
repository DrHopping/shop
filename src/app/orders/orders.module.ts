import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { OrderRoutingModule } from './order-routing.module';



@NgModule({
  declarations: [
    PlaceOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrdersModule { }
