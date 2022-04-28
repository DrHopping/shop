import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { IsEmptyCartGuard } from './guards/is-empty-cart.guard';

const routes: Routes = [
  {
    path: 'place-order',
    component: PlaceOrderComponent,
    canActivate: [IsEmptyCartGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
