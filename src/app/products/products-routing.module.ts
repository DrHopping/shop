import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { resolveProductWithRedirect } from '../shared/guards/product.resolver';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/:productID',
    component: ProductViewComponent,
    ...resolveProductWithRedirect('/products')
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
