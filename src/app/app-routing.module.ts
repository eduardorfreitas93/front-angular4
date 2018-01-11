import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnsureAuthenticatedService } from './services/ensure-authenticated.service';
import { LoginRedirectService } from './services/login-redirect.service';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},

  {
    path: 'app', component: NavbarComponent, canActivate: [EnsureAuthenticatedService],
    children:
      [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent, canActivate: [EnsureAuthenticatedService]},
        {path: 'about', component: AboutComponent, canActivate: [EnsureAuthenticatedService]},
      ]
  },

  {path: 'login', component: LoginComponent, canActivate: [LoginRedirectService]},
  {path: '**', redirectTo: 'app', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
