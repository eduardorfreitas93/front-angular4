import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { isArray } from 'util';

import { NotifyModel } from '../models/notify.model';

@Injectable()
export class NotifyService {

  countNotify = 0;

  constructor(private afd: AngularFireDatabase, private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      const uid = Number(user.uid);
      this.afd.list('/notify', ref =>
        ref.orderByChild('destiny').equalTo(uid)
        .ref.orderByChild('read').equalTo(false))
        .valueChanges()
        .subscribe(res => this.countNotify = res.length);
    });
  }

  sendNotify(message, title, owner, destiny) {
    const notify = this.afd.list('/notify');

    if (isArray(destiny)) {
      for (const idUser of destiny) {
        notify.push(new NotifyModel(message, title, owner, idUser));
      }
    } else {
      notify.push(new NotifyModel(message, title, owner, destiny));
    }
  }
}
