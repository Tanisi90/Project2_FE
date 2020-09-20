import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CampaignsNewComponent } from './components/campaigns-new/campaigns-new.component';
import { ClassesComponent } from './components/classes/classes.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'campaigns/new', component: CampaignsNewComponent },
  { path: 'test', component: ClassesComponent }
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