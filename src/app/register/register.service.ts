import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AuthService} from '../services/auth.service';
import {BASE_URL} from '../../environments/environment';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient,
              private auth: AuthService) {
  }

  async register(formData: FormData): Promise<any> {
    try {
      const res = await this.http.post(`${BASE_URL}/api/register`, formData).toPromise();
      await this.auth.setToken(res['token']);
      return res['uid'];
    } catch (err) {
      throw err;
    }
  }

  async upload(formData: FormData) {
    try {
      const res = await this.http.post(`${BASE_URL}/api/file/upload`, formData).toPromise();
      return res['idImage'];
    } catch (err) {
      throw err;
    }
  }
}
