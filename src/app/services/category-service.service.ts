import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private baseUrl = 'http://localhost:8080/api/product_category';

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

}

interface GetResponse {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
