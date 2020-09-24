import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  loggedIn : boolean = false;

  constructor(private loginService: LoginService) {
    this.loginService.loggedIn.subscribe( value => {
        this.loggedIn = value;
    });
}

  ngOnInit(): void {
  }

  login() {
    this.loginService.loggedIn.next(true);
  }
  
  logout() {
    this.loginService.loggedIn.next(false);
  }
}