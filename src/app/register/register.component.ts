import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(private registerService: RegisterService, private router: Router) {
  }

  ngOnInit() {
  }

  async onRegister() {
    try {
      await this.registerService.register(this.model);
      this.router.navigateByUrl('app/home');
    } catch (err) {
      console.log(err.error.error.exception[0].message);
    }
  }
}
