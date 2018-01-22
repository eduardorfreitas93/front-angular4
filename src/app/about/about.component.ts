import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  listPeople: Observable<any[]>;

  constructor(private afd: AngularFireDatabase) {
  }

  ngOnInit() {
    this.listPeople = this.afd.list('/pessoas').valueChanges();
  }
}
