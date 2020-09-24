import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
//import { User } from './models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  // authForm: FormGroup;
  // isSubmitted = false;

  ngOnInit():void{
//    this.authForm = this.formBuilder.group ({
//       username: [' ', Validators.required],
//       password: [' ', Validators.required]
//     })
//   }
//   get formControls(){
//     return this.authForm.controls;
//   }

//   signIn(){
//     this.isSubmitted = true;
//     if(this.authForm.invalid){
//       return 'Invalid Username or Password';
//     }
//     this.authService.signIn(this.authForm.value);
  }
}
