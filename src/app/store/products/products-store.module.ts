import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productsFeatureKey } from '../app.state';
import { ProductsEffects } from './products.effects';
import { productsReducer } from './products.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
})
export class ProductsStoreModule {}
