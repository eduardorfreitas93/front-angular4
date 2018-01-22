import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireAuth} from 'angularfire2/auth';

import {AuthService} from './auth.service';
import {BASE_URL} from '../../environments/environment';

@Injectable()
export class AuthFirebaseService {

  constructor(private http: HttpClient,
              private auth: AuthService,
              private afAuth: AngularFireAuth) {
  }

  async login(uid) {
    const tokenFirebase = await this.http.get(`${BASE_URL}/api/token-firebase/${uid}`).toPromise();
    await this.afAuth.auth.signInWithCustomToken(tokenFirebase['tokenFirebase']);
    return;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
