import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductExistsGuard, ProductsStatePreloadingGuard } from './guards';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [ProductsStatePreloadingGuard],
  },
  {
    path: 'products/:productID',
    component: ProductViewComponent,
    canActivate: [ProductExistsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
