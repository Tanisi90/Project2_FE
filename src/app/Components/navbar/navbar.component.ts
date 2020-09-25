import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { User } from 'src/app/models/user';
import { ClassService } from 'src/app/Services/class.service';
import { RaceService } from 'src/app/Services/race.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  loggedIn : boolean = false;

  u: User;
  constructor(private ls: LoginService, private cs: ClassService, private rs: RaceService, private formBuilder: FormBuilder, private router: Router) {
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

navToRace(index: string) {
  this.rs.setIndex(index);
  if(this.router.url != '/reference/races') {
    this.router.navigateByUrl('/reference/races');
  } else {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/reference/races');
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
      //console.log(un);
      this.ls.signIn(un, p).subscribe((response:any) => {
        if(response){
          this.u = response;
          this.loggedIn = true;
          sessionStorage.setItem('user', this.u.user_id.toString());
          console.log(this.u);
        }
         }
      );
        if(sessionStorage.getItem('user') != null){
          this.signIn();
        }
        // this.ls.update(users).subscribe();
        if(this.loggedIn == true){
          window.location.reload();
         // document.getElementById("login_row").innerText = "YOU HAVE LOGGED IN!";
          // in getElementById() I want to route it to the user profile /user/profile add the profile to app-routing
          //document.getElementById().('Welcome' + " " + un)          
        }else{
          this.loggedIn == false;
          //console.log('am I here??')
          document.getElementById('unsuccessful').innerText = 'Invalid username or password. Try again!'
        }
    

      // this.isSubmitted = true;
      // if(this.authForm.invalid){
      //   return 'Invalid Username or Password';
      // }
      // this.ls.signIn(un, p).subscribe((users:any) => {
      // this.u = users;
      // console.log(this.u);
      
    }

  // login() {
  //   this.loginService.loggedIn.next(true);
  // }
  
  signOut() {
    this.ls.signOut();
    this.loggedIn = false;
    sessionStorage.clear();
    window.location.reload();
  }

  
 
}
