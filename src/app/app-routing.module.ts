import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CampaignsNewComponent } from './components/campaigns-new/campaigns-new.component';
import { CharactersNewComponent } from './components/characters-new/characters-new.component';
import { AuthComponent } from './Components/auth/auth.component';
import { LoginComponent } from './Components/login/login.component';
import { ReferenceClassesComponent } from './components/reference-classes/reference-classes.component';
import { ReferenceRacesComponent } from './components/reference-races/reference-races.component';
import { ReferenceSpellsComponent } from './components/reference-spells/reference-spells.component';
import { ReferenceSpellsSplashComponent } from './components/reference-spells-splash/reference-spells-splash.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'campaigns/new', component: CampaignsNewComponent}, // canActivate: [AuthGuard]
  { path: 'characters/new', component: CharactersNewComponent }, 
  { path: 'reference/classes', component: ReferenceClassesComponent },
  { path: 'reference/races', component: ReferenceRacesComponent },
  { path: 'reference/spells', component: ReferenceSpellsComponent },
  { path: 'reference/spells/index', component: ReferenceSpellsSplashComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: UserEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //this.name = params['name'];
    });
  }
}