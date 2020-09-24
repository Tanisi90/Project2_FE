import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { User } from 'src/app/models/user';
import { ClassService } from 'src/app/Services/class.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  loggedIn : boolean = false;

  u: User;
  constructor(private ls: LoginService, private cs: ClassService, private formBuilder: FormBuilder, private router: Router) {
    //this.ls.loggedIn.subscribe( value => {
      //this.loggedIn = value;
  //});
}

navToClass(index: string) {
  this.cs.setIndex(index);
  if(this.router.url != '/reference/classes') {
    this.router.navigateByUrl('/reference/classes');
  } else {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/reference/classes');
  }); 
  }
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
      this.isSubmitted = true;
      if(this.authForm.invalid){
        return 'Invalid Username or Password';
      }
      //this.login.signIn(un, p).subscribe((users:any) => {
        //this.u = users;
        console.log(this.u);
         {

        }

      }

  // login() {
  //   this.loginService.loggedIn.next(true);
  // }
  
  // logout() {
  //   this.loginService.loggedIn.next(false);
  // }
 
}
