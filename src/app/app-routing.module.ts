import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CampaignsNewComponent } from './Components/campaigns-new/campaigns-new.component';
import { ClassesComponent } from './Components/classes/classes.component';
import { AuthComponent } from './Components/auth/auth.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
//import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'campaigns/new', component: CampaignsNewComponent}, // canActivate: [AuthGuard] 
  { path: 'test', component: ClassesComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'login', component: NavbarComponent}
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