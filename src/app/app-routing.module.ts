import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './user/login/login.component';
import {AuthGuard} from './_guards/auth.guard';
import {EditAccountComponent} from './user/edit-account/edit-account.component';
import {UploadImagesComponent} from './upload-images/upload-images.component';
import {RegisterComponent} from './user/register/register.component';
import {MobiledashboardComponent} from './mobiledashboard/mobiledashboard.component'
import {OurmissionComponent} from './ourmission/ourmission.component'
import {OurtechnologyComponent} from './ourtechnology/ourtechnology.component'
import {AboutusComponent} from './aboutus/aboutus.component'
import {MobilehomeComponent} from './mobilehome/mobilehome.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'edit-account',
    component: EditAccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upload-images',
    component: UploadImagesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'mobiledashboard',
    component: MobiledashboardComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'ourmission',
    component: OurmissionComponent,
  },
  {
    path: 'ourtechnology',
    component: OurtechnologyComponent,
  },
  {
    path: 'mobilehome',
    component: MobilehomeComponent,
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
