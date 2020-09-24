import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginService } from './Services/login.service';
import { CampaignsNewComponent } from './components/campaigns-new/campaigns-new.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CharactersNewComponent } from './components/characters-new/characters-new.component';
import { LoginComponent } from './Components/login/login.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Components/auth/auth.component';
import { ReferenceClassesComponent } from './components/reference-classes/reference-classes.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    WelcomeComponent,
    RegisterComponent,
    CampaignsNewComponent,
    UserEditComponent,
    CharactersNewComponent,
    LoginComponent,
    AuthComponent,
    ReferenceClassesComponent,
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
