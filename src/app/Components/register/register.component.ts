import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
//import { NavBar} from './app/Components/NavBar';
import {LoginService} from 'src/app/Services/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type = "Player";

   loggedIn : boolean = false;
   usern: string;
   pass: string;
   fname: string;
   lname: string;
   email: string;
   u: User;
   submitted = false;
   loading = false;
  constructor(private httpClient: HttpClient, private fb: FormBuilder, private router: Router, private ls: LoginService) { }

  su: FormGroup = this.fb.group({
    usern: ' ',
    pass: ' ',
    fname: ' ', 
    lname: ' ', 
    email: ' '
  });

  ngOnInit(): void {
  }
  
<<<<<<< HEAD
    register(): void {
      // return this.httpClient.post<User>('http://localhost:8080/data/user/update', user) as Observable<User>;
    }
}
=======
    register(user): Observable<User> {
      return this.httpClient.post<User>('http://localhost:8080/data/user/signup', user) as Observable<User>;
    }

    signUp(){
      let usern = (<HTMLInputElement>document.getElementById('regUsernameField')).value;
      let pass = (<HTMLInputElement>document.getElementById('regPasswordField')).value;
      let fname = (<HTMLInputElement>document.getElementById('firstNameField')).value;
      let lname = (<HTMLInputElement>document.getElementById('lastNameField')).value;
      let email = (<HTMLInputElement>document.getElementById('emailField')).value;
      let user = new User(usern, pass , fname, lname, email)
      //console.log(user);
      this.register(user).subscribe((response:any) => {
        if(response){
          this.u = response;
          this.loggedIn == true;
          console.log(this.u); 
        }
        document.getElementById("registered").innerText = "YOU HAVE SUCCESSFULLY REGISTERED! Please Login";
        (<HTMLInputElement>document.getElementById('regUsernameField')).value = '';
        (<HTMLInputElement>document.getElementById('regPasswordField')).value = '';
        (<HTMLInputElement>document.getElementById('firstNameField')).value = '';
        (<HTMLInputElement>document.getElementById('lastNameField')).value = '';
        (<HTMLInputElement>document.getElementById('emailField')).value = '';
    }  
      );

      // if(this.loggedIn == true){
      //   document.getElementById("registered").innerText = "YOU HAVE SUCCESSFULLY REGISTERED!";       
      // }else{
      //   this.loggedIn == false;
      //   document.getElementById('unsuccessful').innerText = 'YOU CAN NOT HAVE MISSING FIELDS';
      // }
    //}

    // onSubmit(){
      
    //   this.submitted = true;
    //   console.log(this.su.get('usern'));      
    //   if(this.su.invalid){
    //   //console.log("I am here");
    //   document.getElementById('failed').innerText = 'Every field must be filled in!';
    //   }else{
    //     this.signUp()
    //     this.loading = true;
    //     this.register(this.su.value).subscribe(data => 
    //     this.router.navigate(['/']));
    //   }

      // this.loading = true;
      // this.register(this.su.value).subscribe(data => 
      //   this.router.navigate(['/']));
      }
    }



  

>>>>>>> 04ad757778e3b451670371eddecba9ffe99e6884
