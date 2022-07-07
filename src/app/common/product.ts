import { ProductCategory } from "./product-category";

export class Product {
    id?:number;
    title?: string;
    publisher?: string;
    description?: string;
    price?: number;
    imageUrl?: string;
    category?:ProductCategory;

    constructor( id:number, title: string,publisher: string,description: string, price: number,imageUrl: string,category: ProductCategory){
      this.id=id;
      this.title=title;
      this.publisher=publisher;
      this.description=description;
      this.price=price;
      this.imageUrl=imageUrl;
      this.category=category;
    }
    
}
