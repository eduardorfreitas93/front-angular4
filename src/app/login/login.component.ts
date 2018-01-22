import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {LoginService} from './login.service';
import {AuthFirebaseService} from '../services/auth-firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private loginService: LoginService,
              private router: Router,
              private authFirebase: AuthFirebaseService) {
  }

  ngOnInit() {
  }

  async onLogin() {
    try {
      const uid = await this.loginService.login(this.model);
      await this.authFirebase.login(uid);

      this.router.navigateByUrl('app/home');
    } catch (err) {
      console.log(err.error.error.exception[0].message);
    }
  }

}
