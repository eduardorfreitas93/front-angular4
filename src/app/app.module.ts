import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service';
import { EnsureAuthenticatedService } from './services/ensure-authenticated.service';
import { LoginRedirectService } from './services/login-redirect.service';
import { RegisterService } from './register/register.service';
import { LoginService } from './login/login.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    FriendsComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [
    AuthService,
    EnsureAuthenticatedService,
    LoginRedirectService,
    RegisterService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
