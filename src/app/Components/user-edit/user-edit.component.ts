// import { HttpClient } from '@angular/common/http';
// import { getSourceFileOrError } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';
//import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  loggedIn : boolean = false;
  u: User;

  constructor(private ps: ProfileService) { }

  ngOnInit(){
    this.ps.getUser().subscribe((response:any) => {
      if(response){
        this.u = response;
        this.loggedIn = true;
        console.log(this.u);
        document.getElementById('user_id').innerHTML += this.u.user_id.toString(); 
        document.getElementById('username').innerHTML += this.u.username; 
        document.getElementById('first_name').innerHTML += this.u.first_name;
        document.getElementById('last_name').innerHTML += this.u.last_name;
        document.getElementById('email').innerHTML += this.u.email;
      
      }
    });
  }

  editProfile(){
      let username = (<HTMLInputElement>document.getElementById('regUsernameField')).value;
      let password = (<HTMLInputElement>document.getElementById('regPasswordField')).value;
      let first_name = (<HTMLInputElement>document.getElementById('firstNameField')).value;
      let last_name = (<HTMLInputElement>document.getElementById('lastNameField')).value;
      let email = (<HTMLInputElement>document.getElementById('emailField')).value;
      let user_id = <number><unknown>sessionStorage.getItem('user');
      let user = new User(username, password , first_name, last_name, email, user_id)
      //console.log(user);
      this.ps.updateUser(user).subscribe((response:any) => {
        if(response){
          this.u = response;
          this.loggedIn == true;
          console.log(this.u);
        }
        document.getElementById("saved").innerText = "YOU HAVE SUCCESSFULLY SAVED CHANGES!";
        (<HTMLInputElement>document.getElementById('regUsernameField')).value = '';
        (<HTMLInputElement>document.getElementById('regPasswordField')).value = '';
        (<HTMLInputElement>document.getElementById('firstNameField')).value = '';
        (<HTMLInputElement>document.getElementById('lastNameField')).value = '';
        (<HTMLInputElement>document.getElementById('emailField')).value = '';
      }
      );
      window.location.reload();
  }
  
}