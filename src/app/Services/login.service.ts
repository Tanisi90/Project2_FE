import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
// import { Users } from '../auth/user';
import { tap } from 'rxjs/operators';
import { Jwtresp } from '../auth/jwtresp';
//import { NavBar } from './Component/navbar/navbar.Component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //  AUTH_SERVER = "http://localhost:8080";

  //public loggedIn: BehaviorSubject<boolean> 
   authUser = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  register(user: User): Observable<Jwtresp> {
    return this.httpClient.post<Jwtresp>('http://localhost:8080/signup', user).pipe(
      tap((res: Jwtresp ) => {

        if (res.users) {
          localStorage.set("ACCESS_TOKEN", res.users.access_token);
      
          this.authUser.next(true);
        }
      })
    );   
  }

  signIn(un:string, p:string): Observable<User>{
    let creds:string[] = [un,p]
    // console.log(un);
    return this.httpClient.post<User>('http://localhost:8080/login', creds);
    
    //console.log(this.httpClient.post<User>('http://localhost:8080/login', creds));
    //return this.httpClient.post(`${this.AUTH_SERVER}/login`, creds) 
  }

  signOut() {
    localStorage.removeItem("ACCESS_TOKEN");
    this.authUser.next(false);
  }

  // authenticate(){
  //   const{username, password } = body;
  //   const user = user.find( x => x.username === username && x.password === password);
    
  // }

  isAuthenticated() {
    return this.authUser.asObservable();
  }
}
