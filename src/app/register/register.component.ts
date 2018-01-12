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

  upload() {
    const elem = event.target;
    if (elem.files.length > 0) {
      console.log(elem.files[0]);

      const formData = new FormData();
      formData.append('file', elem.files[0]);
      this.registerService.upload(formData);
    }
  }
}
