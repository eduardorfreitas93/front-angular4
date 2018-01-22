import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {RegisterService} from './register.service';
import {AuthFirebaseService} from '../services/auth-firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  formData: FormData = new FormData();

  constructor(private registerService: RegisterService,
              private router: Router,
              private authFirebase: AuthFirebaseService) {
  }

  ngOnInit() {
  }

  async onRegister() {
    try {
      if (this.formData.has('file')) {
        const idImage = await this.registerService.upload(this.formData);
        this.model.idImage = idImage;
      }

      const uid = await this.registerService.register(this.model);

      await this.authFirebase.login(uid);

      this.router.navigateByUrl('app/home');
    } catch (err) {
      console.log(err.error.error.exception[0].message);
    }
  }

  upload() {
    const elem: EventTarget = event.target;
    if (elem['files'].length > 0) {
      this.formData.append('file', elem['files'][0]);
    }
  }
}
