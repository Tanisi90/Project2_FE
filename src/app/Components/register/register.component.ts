import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
//import { NavBar} from './app/Components/NavBar';


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
  constructor(private httpClient: HttpClient, private fb: FormBuilder) { }

  su: FormGroup = this.fb.group({
    usern: ' ',
    pass: ' ',
    fname: ' ',
    lname: ' ',
    email: ' '

  });

  ngOnInit(): void {
  }
  
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
      console.log(user);
      this.register(user).subscribe((response:any) => {
        if(response){
          this.u = response;
          this.loggedIn == true;
          console.log(this.u); 
        }
    }  
      );
    }
} 


  

