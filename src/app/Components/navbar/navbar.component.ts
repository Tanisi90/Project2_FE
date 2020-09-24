import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { User } from 'src/app/models/user';

// import { User } from  '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  loggedIn : boolean = false;

  u: User;
  constructor(private login: LoginService, private formBuilder: FormBuilder ) {
  }
    // this.loginService.loggedIn.subscribe( value => {
    //     this.loggedIn = value;
    authForm: FormGroup;
    isSubmitted = false;
  
    ngOnInit(){
     this.authForm = this.formBuilder.group ({
        username: [' ', Validators.required],
        password: [' ', Validators.required]
      })
    }
    get formControls(){
      return this.authForm.controls;
    }
  
    signIn(){
      let un =(<HTMLInputElement>document.getElementById('usernameField')).value
      let p =(<HTMLInputElement>document.getElementById('passwordField')).value
      this.login.signIn(un, p).subscribe((users :User) => {
        this.u = users;
        this.login.update(users).subscribe();
      }
      );
    }
 
      // console.log(un);
      // this.isSubmitted = true;
      // if(this.authForm.invalid){
      //   return 'Invalid Username or Password';
      // }
      //   }

  // login() {
  //   this.loginService.loggedIn.next(true);
  // }
  
  // logout() {
  //   this.loginService.loggedIn.next(false);
 
}
