import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

  ngOnInit() {
  }

}
