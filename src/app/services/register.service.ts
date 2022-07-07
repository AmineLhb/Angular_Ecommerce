import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8080/register'

  constructor(private httpClient: HttpClient) { }

  registerUser(user: User): Observable<object>{
    console.log(user);
    return this.httpClient.post('baseUrl', user);

  }
}
