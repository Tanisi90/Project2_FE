import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type = "Player";

  constructor() { }

  ngOnInit(): void {
  }
  
    // register (user): Observable<User> {
    //   return this.httpClient.post<User>('http://localhost:8080/data/user/update', user) as Observable<User>;
    // }

  }
}
