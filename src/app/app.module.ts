import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './Components/banner/banner.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginService } from './Services/login.service';
import { CampaignsNewComponent } from './Components/campaigns-new/campaigns-new.component';
import { ClassesComponent } from './Components/classes/classes.component';
import { UserEditComponent } from './Components/user-edit/user-edit.component';
import { CharactersNewComponent } from './Components/characters-new/characters-new.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Components/auth/auth.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    WelcomeComponent,
    RegisterComponent,
    CampaignsNewComponent,
    ClassesComponent,
    UserEditComponent,
    CharactersNewComponent,
    AuthComponent
  ],

  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
