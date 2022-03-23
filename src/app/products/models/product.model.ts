export interface ProductModel {
    id: number;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    isAvailable: boolean;
    imageUrl: string;
}

export enum ProductCategory {
    Food,
    Health,
    Toys,
    Electronics,
    Clothes
}