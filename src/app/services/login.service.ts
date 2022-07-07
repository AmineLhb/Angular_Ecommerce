import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/api/users'

  constructor(private httpClient: HttpClient) { }

  loginUser(user: User, id: number): Observable<object>{
    console.log(user);
    const url=this.baseUrl+'/'+id;
    return this.httpClient.get<User>(url).pipe(
          map(response => response)
        );;

  }
}
