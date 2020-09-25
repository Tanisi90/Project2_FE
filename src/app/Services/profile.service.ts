import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = "http://localhost:8080/data"

  constructor(private httpClient: HttpClient) { }

  getUser() : Observable<User>{
    let id = <number><unknown>sessionStorage.getItem('user');
    console.log(id);
    return this.httpClient.get(`${this.baseUrl}/user/` + id) as Observable<User>;
  }

  updateUser(user: User): Observable<User>{
    return this.httpClient.post(`${this.baseUrl}/user/update/`, user) as Observable<User>;
  }

  // updateUser(u: User){
  //   return this.httpClient.post(`${this.baseUrl}`)
  // }
}
