import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { BASE_URL } from '../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  async login (user): Promise<any> {
    try {
      const res = await this.http.post(`${BASE_URL}/api/login_check`, user).toPromise();
      await this.auth.setTokenLocalStorage(res.token);
      return;
    } catch (err) {
      throw err;
    }
  }
}
