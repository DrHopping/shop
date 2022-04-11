import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import {
  APP_CONSTANTS,
  APP_CONSTANTS_TOKEN,
} from './core/services/constant.service';
import { GENERATED_STRING, GeneratorFactory } from './core/services/generator.factory';
import { GeneratorService } from './core/services/generator.service';
import { LocalStorageService, LocalStorageServiceToken } from './core/services/local-storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductsModule,
    CartModule,
    SharedModule,
  ],
  providers: [
    { provide: APP_CONSTANTS_TOKEN, useValue: APP_CONSTANTS },
    { provide: GENERATED_STRING, useFactory: GeneratorFactory, deps: [GeneratorService] },
    { provide: LocalStorageServiceToken, useValue: new LocalStorageService(window.localStorage)}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
