import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  async onLogin() {
    try {
      await this.loginService.login(this.model);
      this.router.navigateByUrl('app/home');
    } catch (err) {
      console.log(err.error.error.exception[0].message);
    }
  }

}
