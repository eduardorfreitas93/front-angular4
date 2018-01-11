import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin(): void {
    localStorage.setItem('token', 'qwert');
    this.router.navigateByUrl('app/home');
  }

}
