import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  private baseUrl = 'http://localhost:8080/addProduct';


  constructor(private httpClient: HttpClient) { }

  addProduct(products: Product[]): Observable<Product[]> {
    const url=this.baseUrl;
    return this.httpClient.post<Product[]>(url, products).
    pipe(
      map(response  => response),
    );
  }

}


