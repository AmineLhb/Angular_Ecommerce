import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductCategory } from '../common/product-category';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getProductList(category_id:number): Observable<Product[]> {
    const url=this.baseUrl+'/search/findByCategoryId?id='+category_id;
    return this.httpClient.get<GetResponseproducts>(url).pipe(
      map(response => response._embedded.products)
    );
  }
  searchProductList(keyword:string): Observable<Product[]> {
    const url=this.baseUrl+'/search/findByNameContaining?name='+keyword;
    return this.httpClient.get<GetResponseproducts>(url).pipe(
      map(response => response._embedded.products)
    );
  }
  getproduct(id:number): Observable<Product> {
    const url=this.baseUrl+'/'+id;
    return this.httpClient.get<Product>(url).pipe(
      map(response => response)
    );
  }
  allproducts(): Observable<Product[]> {
    const url=this.baseUrl;
    return this.httpClient.get<GetResponseproducts>(url).pipe(
      map(response => response._embedded.products)
    );
  }
  deleteproduct(id:Number): Observable<any> {

    const url=this.baseUrl+'/'+id;
  return  this.httpClient.delete(url,{responseType: 'text'});
  }
}

interface GetResponseproducts {
  _embedded: {
    products: Product[];
  }
}
