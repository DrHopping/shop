import { Injectable } from '@angular/core';
import { ProductCategory, ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : ProductModel[] { 
    return [
      {
        id: 1,
        name: 'Milk',
        description: 'Prostokvashino milk 2,5% 1.5L',
        price: 25.6,
        category: ProductCategory.Food,
        isAvailable: true,
        imageUrl: 'https://img.fozzyshop.com.ua/204151-large_default/moloko-prostokvashino-pasterizovannoe-25.jpg'
      },
      {
        id: 2,
        name: 'Snickers',
        description: 'Chocolate bar 112.5g',
        price: 17,
        category: ProductCategory.Food,
        isAvailable: true,
        imageUrl: 'https://ua.all.biz/img/ua/catalog/22573963.jpg'
      },      
      {
        id: 3,
        name: 'Cowboy Hat',
        description: 'American style cowboy hat',
        price: 270,
        category: ProductCategory.Clothes,
        isAvailable: true,
        imageUrl: 'https://www.u-buy.com.ua/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE5RUhYcmNUWUwuX0FDX1VMMTUwMF8uanBn.jpg'
      },
      {
        id: 4,
        name: 'Adhesive plaster',
        description: 'Medical adhesive plaster 5cm x 5m',
        price: 35.2,
        category: ProductCategory.Health,
        isAvailable: true,
        imageUrl: 'https://amsp.africa/all_media/2021/01/ELASTOPLAST-ADHESIVE-STRIP-PLASTER.jpg'
      },
      {
        id: 5,
        name: 'Xiaomi Redmi 7',
        description: 'Chinese budget smartphone 4/128GB' ,
        price: 4199.90,
        category: ProductCategory.Electronics,
        isAvailable: true,
        imageUrl: 'https://hotline.ua/img/tx/197/1972182965.jpg'
      }
    ];
  }
}
