import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {
  }

  setTokenLocalStorage(token): Promise<any> {
    return new Promise((resolve, reject) => {
      localStorage.setItem('token', token);
      resolve();
    });
  }

  getTokenLocalStorage(): string {
    return localStorage.getItem('token');
  }

}
