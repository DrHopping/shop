import { ProductModel } from "src/app/products/models/product.model";

export interface CartModel {
    [productId: number] : CartProductModel;
}

export interface CartProductModel {
    product: ProductModel;
    count: number;
}