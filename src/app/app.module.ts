import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import {
  APP_CONSTANTS,
  APP_CONSTANTS_TOKEN,
} from './core/services/constant.service';
import { GENERATED_STRING, GeneratorFactory } from './core/services/generator.factory';
import { GeneratorService } from './core/services/generator.service';
import { LocalStorageService, LocalStorageServiceToken } from './core/services/local-storage.service';
import { OrdersModule } from './orders/orders.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './core/interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductsModule,
    OrdersModule,
    SharedModule,
  ],
  providers: [
    { provide: APP_CONSTANTS_TOKEN, useValue: APP_CONSTANTS },
    { provide: GENERATED_STRING, useFactory: GeneratorFactory, deps: [GeneratorService] },
    { provide: LocalStorageServiceToken, useValue: new LocalStorageService(window.localStorage)},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'},
    ...httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// Замечаний нет
