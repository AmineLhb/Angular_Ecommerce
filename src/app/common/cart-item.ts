import { Product } from './product';

export class CartItem {

    id?: number;
    title?: string;
    imageUrl?: string;
    price?: number;

    quantity: number;

    constructor(product?: Product) {
        this.id = product?.id;
        this.title = product?.title;
        this.imageUrl = product?.imageUrl;
        this.price = product?.price;
        this.quantity = 1;
    }
}
