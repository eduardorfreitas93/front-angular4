import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              public notifyService: NotifyService) { }

  ngOnInit() {
  }

  onLogout(): void {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

}
